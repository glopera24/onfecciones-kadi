import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-ink text-ivory">
      <div className="container grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="font-display text-2xl font-medium">
            Kadi<span className="text-gold">.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            Fabricante colombiano de moda íntima y confección para marcas.
            Más de 20 años convirtiendo diseños en producción textil de
            calidad premium, desde Bogotá para toda Colombia.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              {SITE.city}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={`tel:+${SITE.whatsappNumber}`} className="hover:text-ivory">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${SITE.email}`} className="hover:text-ivory break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            © {year} {SITE.legalName} · NIT {SITE.nit}
          </p>
          <Link href="/politica-privacidad" className="hover:text-ivory">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
