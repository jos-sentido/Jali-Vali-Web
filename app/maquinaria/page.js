import { machinery, machineryTotal } from "@/lib/site";
import { Check, CTASection, PlaceholderImage, SectionHeading } from "@/components/ui";
import PageHero from "@/components/PageHero";
import Counter from "@/components/Counter";

export const metadata = {
  title: "Maquinaria y capacidad operativa",
  description:
    "46 equipos especializados de maquinaria pesada propia: excavadoras, anfibias, retroexcavadoras, bulldozers, motoniveladoras y más.",
};

const capacities = [
  "Flota propia, no rentada",
  "Mantenimiento preventivo continuo",
  "Operadores certificados",
  "Equipos seguros y modernos",
  "Respaldo total para proyectos simultáneos",
  "Alta capacidad de respuesta",
];

export default function MaquinariaPage() {
  return (
    <>
      <PageHero
        eyebrow="Capacidad operativa"
        title="Maquinaria propia, lista para cualquier reto"
        intro="Equipo propio que ofrece la seguridad de ejecutar proyectos de infraestructura con eficiencia, seguridad y resultados."
      />

      {/* Resumen total */}
      <section className="section">
        <div className="container-jv">
          <div className="rounded-card bg-jv-ink text-white p-8 md:p-12 grid lg:grid-cols-3 gap-8 items-center grid-pattern relative overflow-hidden">
            <div className="lg:col-span-1">
              <div className="text-7xl font-extrabold text-jv-green">
                <Counter value={machineryTotal} />
              </div>
              <p className="mt-2 text-white/70 text-lg">equipos especializados de maquinaria pesada</p>
            </div>
            <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {capacities.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-white/85">
                  <Check className="text-jv-green shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Catálogo de flota */}
      <section className="section bg-jv-bg pt-0">
        <div className="container-jv">
          <SectionHeading eyebrow="Catálogo de flota" title="Maquinaria pesada disponible" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {machinery.map((m) => (
              <article key={m.name} className="rounded-card bg-white border border-jv-line overflow-hidden hover:shadow-lg hover:border-jv-green transition-all">
                <PlaceholderImage label={m.name} ratio="aspect-[4/3]" className="rounded-none" />
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-jv-ink leading-tight">{m.name}</h3>
                    <p className="text-xs text-jv-gray mt-0.5">Equipo propio</p>
                  </div>
                  <span className="text-3xl font-extrabold text-jv-green">{m.units}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
