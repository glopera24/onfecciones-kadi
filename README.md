# Confecciones Kadi SAS — Sitio web corporativo

Sitio web premium para **Confecciones Kadi SAS**, fabricante colombiano de
moda íntima y confección textil para marcas (Bogotá).

Construido con **Next.js 15 (App Router) + React 19 + TypeScript +
TailwindCSS + Framer Motion + shadcn/ui + React Hook Form + Zod**.

> **Nota de diseño**: este proyecto es una implementación original —
> paleta, tipografía, copy y código propios— pensada para transmitir el
> mismo nivel de calidad de un sitio premium de moda, sin reutilizar
> contenido ni diseño de terceros.

## 1. Requisitos

- Node.js ≥ 18.18
- npm ≥ 9 (o pnpm/yarn si prefieres)

## 2. Instalación

```bash
npm install
```

## 3. Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API Key de [Resend](https://resend.com) para enviar el formulario de contacto por correo. |
| `CONTACT_FROM_EMAIL` | Correo remitente verificado en Resend (requiere dominio propio verificado). |
| `CONTACT_TO_EMAIL` | Correo donde llegan los mensajes (por defecto `kadiconfecciones@gmail.com`). |
| `NEXT_PUBLIC_SITE_URL` | URL pública final del sitio (usada en metadata, sitemap y JSON-LD). |

El formulario también puede adaptarse a **EmailJS** si prefieres envío
100% desde el cliente sin backend propio; el hook queda en
`components/ContactForm.tsx` y el endpoint en `app/api/contact/route.ts`.

## 4. Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 5. Build de producción

```bash
npm run build
npm run start
```

## 6. Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Importa el repositorio en [vercel.com/new](https://vercel.com/new).
3. Agrega las variables de entorno del paso 3 en **Project Settings →
   Environment Variables**.
4. Despliega. No requiere configuración adicional (Vercel detecta Next.js
   automáticamente).

## 7. Estructura del proyecto

```
app/                     Rutas (App Router)
  page.tsx                Inicio
  nosotros/                Nosotros
  servicios/                Servicios
  proceso/                  Proceso
  portafolio/                Portafolio
  clientes/                   Clientes
  preguntas-frecuentes/        FAQ
  contacto/                     Contacto (+ formulario)
  politica-privacidad/           Política de privacidad
  api/contact/route.ts     Endpoint backend del formulario (Resend)
  sitemap.ts               Sitemap dinámico
  robots.ts                Robots.txt dinámico
  manifest.ts               Web App Manifest
  layout.tsx                Layout raíz + metadata SEO + JSON-LD
  globals.css                Estilos globales y tokens de diseño

components/
  layout/                   Header, Footer, botón de WhatsApp
  sections/                  Bloques reutilizables (Hero, Servicios, Proceso…)
  ui/                         Componentes base estilo shadcn/ui
  ContactForm.tsx            Formulario con RHF + Zod
  FAQAccordion.tsx            Acordeón de preguntas frecuentes
  Breadcrumbs.tsx             Migas de pan con JSON-LD

lib/
  constants.ts              Datos de la empresa, navegación, servicios, FAQ
  validations.ts             Esquemas Zod
  utils.ts                    Utilidad cn()

public/
  favicon.svg, images/       Assets estáticos
```

## 8. SEO implementado

- Metadata dinámica por página (`title`, `description`, `canonical`).
- Open Graph y Twitter Cards.
- `sitemap.xml` y `robots.txt` generados dinámicamente (`app/sitemap.ts`,
  `app/robots.ts`).
- Datos estructurados JSON-LD: `Organization`, `WebSite`, `FAQPage`,
  `BreadcrumbList`.
- Breadcrumbs visibles y semánticos en todas las páginas internas.
- HTML semántico (`h1` único por página, jerarquía de encabezados).

## 9. Accesibilidad

- Foco visible (`:focus-visible`) en todos los elementos interactivos.
- Enlace "Saltar al contenido principal".
- Atributos ARIA en menú móvil, formulario y botón de WhatsApp.
- Contraste de color verificado sobre la paleta definida.
- Soporte de `prefers-reduced-motion`.

## 10. Rendimiento

- Imágenes con `next/image`, formatos AVIF/WebP y `sizes` responsivos.
- Fuentes optimizadas con `next/font` (sin bloqueo de render).
- CSS mínimo vía Tailwind (purga automática de clases no usadas).
- Sin JavaScript innecesario en componentes que no lo requieren
  (`Server Components` por defecto; `"use client"` solo donde hay
  interactividad).

> Para maximizar el puntaje en Lighthouse en producción, reemplaza las
> imágenes de `images.unsplash.com` (usadas como placeholders libres de
> uso) por activos propios optimizados y comprimidos, y genera un
> `og-cover.jpg` final con tu diseñador de marca.

## 11. Formulario de contacto

- Validación de cliente y servidor con **Zod** (mismo esquema en
  `lib/validations.ts`).
- Honeypot anti-spam (`website`) y límite básico de solicitudes por IP.
- Envío por **Resend** desde `app/api/contact/route.ts`. Requiere dominio
  verificado en Resend para el remitente (`CONTACT_FROM_EMAIL`).

## 12. Modo oscuro

El proyecto incluye una base de modo oscuro opcional (clase `.dark` en
`<html>`). Actualmente no hay selector visible en la interfaz; puede
activarse agregando un botón que alterne la clase `dark` en el elemento
`<html>` (por ejemplo, con `next-themes`).

## 13. Licencia de contenido

Las imágenes de ejemplo provienen de Unsplash (uso libre, ver
[unsplash.com/license](https://unsplash.com/license)) y deben
reemplazarse por fotografía propia de planta y producto antes de
publicar el sitio en producción.
