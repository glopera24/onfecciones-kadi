import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos para solicitar una cotización de producción textil. Confecciones Kadi SAS, Bogotá, Colombia.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contacto" }]} />

      <section className="container py-16">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-wine">
              Contacto
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
              Cuéntanos tu proyecto
            </h1>
            <p className="mt-6 leading-relaxed text-ink/70">
              Responde el formulario o escríbenos directamente. Te
              contactamos en menos de 24 horas hábiles.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-wine" aria-hidden />
                <span className="text-ink/70">{SITE.city}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-wine" aria-hidden />
                <a href={`tel:+${SITE.whatsappNumber}`} className="text-ink/70 hover:text-wine">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-wine" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="text-ink/70 hover:text-wine break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <p className="mt-10 text-xs text-ink/40">
              {SITE.legalName} · NIT {SITE.nit}
            </p>
          </div>

          <div className="rounded-[2rem] border border-sand bg-ivory p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
