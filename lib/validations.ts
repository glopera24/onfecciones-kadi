import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Escribe tu nombre completo.")
    .max(80, "El nombre es demasiado largo."),
  email: z.string().email("Ingresa un correo electrónico válido."),
  phone: z
    .string()
    .min(7, "Ingresa un número de teléfono válido.")
    .max(15, "Ingresa un número de teléfono válido.")
    .optional()
    .or(z.literal("")),
  company: z.string().max(100).optional().or(z.literal("")),
  service: z.string().min(1, "Selecciona un servicio de tu interés."),
  message: z
    .string()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado largo."),
  // Honeypot anti-spam: debe llegar vacío
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
