import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

// Límite simple de envíos por IP en memoria (se reinicia con cada deploy/cold start).
// Para producción a mayor escala, sustituir por Upstash Redis o similar.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intenta más tarde." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Honeypot: si viene lleno, es un bot. Respondemos éxito sin enviar nada.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, phone, company, service, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL || "kadiconfecciones@gmail.com";

    if (!apiKey || !fromEmail) {
      console.error(
        "RESEND_API_KEY o CONTACT_FROM_EMAIL no configurados. Ver .env.example."
      );
      return NextResponse.json(
        { error: "El servicio de correo no está configurado." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: `Formulario web Kadi <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nueva solicitud: ${service} — ${name}`,
      html: `
        <h2>Nueva solicitud desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone || "No indicado")}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company || "No indicada")}</p>
        <p><strong>Servicio de interés:</strong> ${escapeHtml(service)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando formulario de contacto:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el mensaje." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
