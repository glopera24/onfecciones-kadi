import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de tratamiento de datos personales de Confecciones Kadi SAS, conforme a la Ley 1581 de 2012 de Colombia.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Política de privacidad" }]} />

      <section className="container py-16">
        <div className="container-narrow prose-p:leading-relaxed">
          <h1 className="font-display text-4xl text-ink">
            Política de privacidad
          </h1>
          <p className="mt-4 text-sm text-ink/50">
            Última actualización: {new Date().toLocaleDateString("es-CO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="mt-10 space-y-8 text-ink/70">
            <div>
              <h2 className="font-display text-xl text-ink">
                1. Responsable del tratamiento
              </h2>
              <p className="mt-2">
                {SITE.legalName}, identificada con NIT {SITE.nit}, con domicilio
                en {SITE.city}, es responsable del tratamiento de los datos
                personales recolectados a través de este sitio web, en los
                términos de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de
                Colombia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                2. Datos que recolectamos
              </h2>
              <p className="mt-2">
                A través del formulario de contacto recolectamos: nombre,
                correo electrónico, teléfono, nombre de empresa (opcional) y
                el contenido del mensaje enviado. No solicitamos datos
                sensibles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                3. Finalidad del tratamiento
              </h2>
              <p className="mt-2">
                Los datos suministrados se usan exclusivamente para responder
                solicitudes de cotización o información comercial, y para
                dar seguimiento a la relación comercial que se derive de
                ellas. No compartimos tus datos con terceros para fines
                publicitarios.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                4. Derechos del titular
              </h2>
              <p className="mt-2">
                Puedes conocer, actualizar, rectificar y solicitar la
                supresión de tus datos personales, así como revocar la
                autorización otorgada, escribiendo a{" "}
                <a href={`mailto:${SITE.email}`} className="text-wine underline">
                  {SITE.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                5. Conservación y seguridad
              </h2>
              <p className="mt-2">
                Conservamos los datos únicamente durante el tiempo necesario
                para atender tu solicitud y cumplir obligaciones legales,
                aplicando medidas técnicas y organizativas razonables para
                protegerlos.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                6. Cookies
              </h2>
              <p className="mt-2">
                Este sitio no utiliza cookies de rastreo publicitario. Puede
                usar almacenamiento técnico estrictamente necesario para el
                funcionamiento del sitio.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                7. Contacto
              </h2>
              <p className="mt-2">
                Para cualquier consulta sobre esta política, escríbenos a{" "}
                <a href={`mailto:${SITE.email}`} className="text-wine underline">
                  {SITE.email}
                </a>{" "}
                o llámanos al {SITE.phoneDisplay}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
