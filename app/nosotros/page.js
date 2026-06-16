import { company, valueProps, stats, PLACEHOLDER } from "@/lib/site";
import { Check, CTASection, PendingTag, PlaceholderImage, SectionHeading } from "@/components/ui";
import PageHero from "@/components/PageHero";
import Counter from "@/components/Counter";

export const metadata = {
  title: "Nosotros",
  description:
    "JALIE-VALI Constructora: capacidad técnica, operativa y maquinaria propia para proyectos de infraestructura crítica en México.",
};

const pillars = [
  {
    title: "Misión",
    text: "Ejecutar proyectos de infraestructura hidráulica, sanitaria, pluvial y eléctrica con los más altos estándares de calidad, seguridad y cumplimiento normativo, generando valor para el desarrollo del país.",
    pending: true,
  },
  {
    title: "Visión",
    text: "Ser la constructora de referencia en infraestructura crítica en México, reconocida por su capacidad operativa, su maquinaria propia y la confiabilidad de sus soluciones llave en mano.",
    pending: true,
  },
  {
    title: "Valores",
    text: "Compromiso, calidad, responsabilidad, seguridad y eficiencia en cada proyecto que ejecutamos.",
    pending: false,
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Construimos la infraestructura que sostiene al país"
        intro={company.description}
      />

      {/* Intro + imagen */}
      <section className="section">
        <div className="container-jv grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Nuestra empresa"
              title="Capacidad técnica, operativa y maquinaria propia"
              intro="JALIE-VALI Constructora desarrolla proyectos públicos y privados de alto impacto: desarrollo urbano, movilidad, saneamiento, protección hidráulica y gestión eficiente del agua."
            />
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-jv-line p-4">
                  <dt className="text-3xl font-extrabold text-jv-green">
                    <Counter value={s.num} prefix={s.prefix || ""} suffix={s.suffix || ""} />
                  </dt>
                  <dd className="mt-1 text-xs text-jv-gray">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <PlaceholderImage label="Equipo y obra JALIE-VALI" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* Misión, visión, valores */}
      <section className="section bg-jv-bg">
        <div className="container-jv">
          <SectionHeading center eyebrow="Nuestra esencia" title="Misión, visión y valores" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-card bg-white border border-jv-line p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-jv-ink">{p.title}</h3>
                  {p.pending && <PendingTag>Validar redacción</PendingTag>}
                </div>
                <p className="mt-4 text-jv-gray text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section">
        <div className="container-jv">
          <SectionHeading
            center
            eyebrow="Propuesta de valor"
            title="¿Por qué elegir JALIE-VALI?"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueProps.map((v) => (
              <div key={v} className="rounded-xl border border-jv-line p-5 hover:border-jv-green transition-colors">
                <Check className="text-jv-green" />
                <p className="mt-3 font-semibold text-jv-ink text-sm leading-snug">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos corporativos pendientes */}
      <section className="section bg-jv-ink text-white">
        <div className="container-jv">
          <div className="flex items-center gap-3 flex-wrap">
            <SectionHeading light eyebrow="Ficha corporativa" title="Datos de la empresa" />
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            {[
              ["Razón social", company.legalName],
              ["Año de fundación", company.foundedYear],
              ["RFC", company.rfc],
              ["Cobertura", company.coverage],
            ].map(([k, v]) => (
              <div key={k} className="bg-jv-ink p-5">
                <dt className="text-xs uppercase tracking-wider text-white/45">{k}</dt>
                <dd className="mt-1.5 font-semibold text-white">{v}</dd>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">
            Los campos marcados como “{PLACEHOLDER}” se completarán con la información oficial que entregue el cliente.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
