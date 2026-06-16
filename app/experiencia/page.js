import { portfolioBreakdown, company, PLACEHOLDER } from "@/lib/site";
import { CTASection, PendingTag, SectionHeading, Check } from "@/components/ui";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Experiencia y licitaciones",
  description:
    "Más de $542 millones MXN en obras de infraestructura presentadas. Respaldo para licitaciones públicas y privadas.",
};

const money = (n) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

export default function ExperienciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiencia comprobada"
        title="Respaldo para licitaciones y proyectos de gran escala"
        intro="Capacidad operativa comprobada y cumplimiento normativo para gobiernos, organismos operadores de agua, desarrolladores e industria."
      />

      {/* Monto total destacado */}
      <section className="section">
        <div className="container-jv">
          <div className="rounded-card bg-jv-green-dark text-white p-10 text-center grid-pattern relative overflow-hidden">
            <p className="text-sm uppercase tracking-widest text-white/80">
              Monto total de obras presentadas · {company.year}
            </p>
            <p className="mt-3 text-5xl md:text-6xl font-extrabold tabular-nums">
              {portfolioBreakdown.totalLabel}
            </p>
            <p className="mt-2 text-white/85">MXN</p>
          </div>
        </div>
      </section>

      {/* Tabla de distribución */}
      <section className="section pt-0">
        <div className="container-jv">
          <SectionHeading
            eyebrow="Resumen global por tipo de obra"
            title="Distribución de obra ejecutada"
          />
          <div className="mt-8 overflow-hidden rounded-card border border-jv-line">
            <table className="w-full text-left">
              <thead className="bg-jv-bg">
                <tr className="text-sm text-jv-gray">
                  <th className="py-4 px-6 font-semibold">Tipo de obra</th>
                  <th className="py-4 px-6 font-semibold text-right">Monto</th>
                  <th className="py-4 px-6 font-semibold text-right hidden sm:table-cell">% del total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jv-line">
                {portfolioBreakdown.rows.map((r) => {
                  const pct = ((r.amount / portfolioBreakdown.total) * 100).toFixed(1);
                  return (
                    <tr key={r.label} className="hover:bg-jv-bg/60">
                      <td className="py-4 px-6 font-medium text-jv-ink">{r.label}</td>
                      <td className="py-4 px-6 text-right tabular-nums text-jv-ink">{money(r.amount)}</td>
                      <td className="py-4 px-6 text-right tabular-nums text-jv-green-dark font-semibold hidden sm:table-cell">
                        {pct}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-jv-ink text-white font-bold">
                  <td className="py-4 px-6">Total global</td>
                  <td className="py-4 px-6 text-right text-jv-green tabular-nums text-lg">
                    {portfolioBreakdown.totalLabel}
                  </td>
                  <td className="py-4 px-6 text-right hidden sm:table-cell">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Certificaciones pendientes */}
      <section className="section bg-jv-bg">
        <div className="container-jv">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <SectionHeading eyebrow="Credenciales" title="Certificaciones y registros" />
            <PendingTag>Pendiente de cliente</PendingTag>
          </div>
          <p className="text-jv-gray max-w-2xl">
            Espacio reservado para certificaciones, registros de contratista (públicos y privados) y
            afiliaciones que refuercen la credibilidad ante comités de licitación.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Registro de contratista", "Certificación de calidad", "Cumplimiento NOM / CFE", "Afiliaciones"].map(
              (c) => (
                <div key={c} className="rounded-xl border border-dashed border-jv-line bg-white p-6 text-center">
                  <Check className="text-jv-green/50 mx-auto" />
                  <p className="mt-2 text-sm font-medium text-jv-ink">{c}</p>
                  <p className="text-xs text-jv-gray mt-1">{PLACEHOLDER}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
