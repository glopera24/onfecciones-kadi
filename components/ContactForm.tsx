"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { SERVICES } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-sand bg-ivory p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-wine" aria-hidden />
        <h3 className="font-display text-xl text-ink">¡Mensaje enviado!</h3>
        <p className="text-sm text-ink/60">
          Gracias por escribirnos. Te responderemos muy pronto a tu correo o
          teléfono.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot anti-spam, oculto para personas, visible para bots */}
      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nombre completo</Label>
          <Input id="name" className="mt-2" {...register("name")} />
          {errors.name && (
            <p className="mt-1.5 text-xs text-wine" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" className="mt-2" {...register("email")} />
          {errors.email && (
            <p className="mt-1.5 text-xs text-wine" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input id="phone" type="tel" className="mt-2" {...register("phone")} />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-wine" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Empresa o marca (opcional)</Label>
          <Input id="company" className="mt-2" {...register("company")} />
        </div>
      </div>

      <div>
        <Label htmlFor="service">Servicio de interés</Label>
        <select
          id="service"
          className="mt-2 h-12 w-full rounded-lg border border-ink/15 bg-ivory px-4 text-sm text-ink focus-visible:border-wine"
          {...register("service")}
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-wine" role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Cuéntanos qué necesitas</Label>
        <Textarea
          id="message"
          className="mt-2"
          placeholder="Tipo de prenda, cantidades aproximadas, tiempos, etc."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-wine" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-wine">
          <XCircle className="h-4 w-4" aria-hidden />
          No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por
          WhatsApp.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Enviando…
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  );
}
