import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SITE } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Fabricante de moda íntima y confección para marcas en Bogotá`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "confección textil Bogotá",
    "fabricante moda íntima Colombia",
    "confección para marcas",
    "patronaje industrial",
    "bordado y estampado textil",
    "fabricación privada de ropa interior",
    "maquila textil Colombia",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  category: "Manufactura textil",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Fabricante de moda íntima y confección para marcas`,
    description: SITE.description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Confecciones Kadi SAS — confección textil premium en Bogotá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Fabricante de moda íntima y confección para marcas`,
    description: SITE.description,
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF6F1" },
    { media: "(prefers-color-scheme: dark)", color: "#211B22" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    image: `${SITE.url}/images/og-cover.jpg`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    foundingDate: String(SITE.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    sameAs: [],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Confección para marcas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Patronaje industrial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bordado y estampado textil" } },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "es-CO",
  };

  return (
    <html lang="es-CO" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-wine focus:px-4 focus:py-2 focus:text-ivory"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
