import { featuredProjects } from "@/lib/site";
import { CTASection, ObraImage, PendingTag, SectionHeading } from "@/components/ui";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Proyectos",
  description:
    "Proyectos de infraestructura hidráulica, sanitaria, pluvial, eléctrica y especial ejecutados por JALIE-VALI Constructora.",
};

const categories = ["Todos", "Hidráulica", "Sanitaria", "Pluvial", "Eléctrica", "Especiales"];

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Proyectos de infraestructura ejecutados"
        intro="Casos representativos de nuestra capacidad técnica y operativa en obra pública y privada."
      />

      <section className="section">
        <div className="container-jv">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <span
                  key={c}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                    i === 0
                      ? "bg-jv-green text-jv-ink border-jv-green"
                      : "border-jv-line text-jv-gray"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
            <PendingTag>Fotos del catálogo · faltan cliente, ubicación y año</PendingTag>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <article
                key={i}
                className="group rounded-card overflow-hidden border border-jv-line bg-white hover:shadow-lg transition-all"
              >
                <div className="relative">
                  <ObraImage src={p.image} alt={p.title} ratio="aspect-[4/3]" className="rounded-none" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-jv-green text-jv-ink text-xs font-bold z-10">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-jv-ink leading-snug">{p.title}</h3>
                  <div className="mt-3 flex justify-between text-xs text-jv-gray">
                    <span>Cliente: {p.client}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-card border border-dashed border-jv-green/40 bg-jv-green/5 p-8 text-center">
            <h3 className="text-lg font-bold text-jv-ink">Sección lista para tus proyectos reales</h3>
            <p className="mt-2 text-jv-gray text-sm max-w-xl mx-auto">
              Entréganos los 10 proyectos más importantes con fotos reales, cliente, ubicación, monto
              y año, y los publicaremos aquí con filtros por tipo de obra.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
