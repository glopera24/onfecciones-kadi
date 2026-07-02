const SECTORS = [
  "Marcas de moda íntima",
  "Boutiques independientes",
  "Marcas emergentes",
  "Distribuidores textiles",
  "E-commerce de moda",
  "Marcas privadas (private label)",
];

/**
 * Muestra sectores/tipos de clientes en lugar de logos reales, ya que
 * no se dispone de autorización de marca de clientes específicos.
 */
export default function ClientsLogos() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      {SECTORS.map((sector) => (
        <div
          key={sector}
          className="flex h-28 items-center justify-center rounded-xl border border-sand bg-ivory px-4 text-center"
        >
          <p className="font-display text-sm text-ink/70">{sector}</p>
        </div>
      ))}
    </div>
  );
}
