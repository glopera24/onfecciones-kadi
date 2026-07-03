import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BrochureCard() {
  return (
    <div className="mt-12 overflow-hidden rounded-[32px] border border-sand bg-white shadow-2xl">

      <Link href="/pdf/brochure-kadi.pdf" target="_blank">

        <div className="group relative">

          <Image
            src="/images/brochure/brochure-preview.jpg"
            alt="Brochure Corporativo Confecciones Kadi"
            width={800}
            height={1100}
            className="w-full transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <p className="text-sm uppercase tracking-[0.3em] text-white/80">
              Brochure Corporativo
            </p>

            <h3 className="mt-2 font-display text-3xl text-white">
              Confecciones Kadi S.A.S.
            </h3>

          </div>

        </div>

      </Link>

      <div className="flex flex-wrap gap-4 p-6">

        <Button asChild>
          <Link
            href="/pdf/brochure-kadi.pdf"
            target="_blank"
          >
            Ver brochure
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
        >
          <a
            href="/pdf/brochure-kadi.pdf"
            download
          >
            Descargar PDF
          </a>
        </Button>

      </div>

    </div>
  );
}