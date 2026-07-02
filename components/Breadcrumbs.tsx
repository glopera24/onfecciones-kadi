import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Inicio", href: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        item: `${SITE.url}${item.href ?? ""}`,
      })
    ),
  };

  return (
    <nav aria-label="Ruta de navegación" className="container pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink/50">
        <li>
          <Link href="/" className="hover:text-wine">
            Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" aria-hidden />
            {item.href && i !== items.length - 1 ? (
              <Link href={item.href} className="hover:text-wine">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink/70">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
