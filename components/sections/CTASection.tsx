import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection({
  title = "Hablemos de tu próxima colección",
  description = "Cuéntanos qué necesitas producir y te respondemos con una propuesta clara de tiempos y costos.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-wine py-20">
      <div className="container flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-balance font-display text-3xl text-ivory sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-lg text-ivory/70">{description}</p>
        <Button asChild size="lg" variant="gold">
          <Link href="/contacto">Solicitar cotización</Link>
        </Button>
      </div>
    </section>
  );
}
