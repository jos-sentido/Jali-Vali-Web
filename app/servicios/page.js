import { services } from "@/lib/site";
import { Bullet, CTASection, ObraImage } from "@/components/ui";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Servicios de infraestructura",
  description:
    "Protección hidráulica, redes sanitarias y pluviales, e instalaciones eléctricas y especiales. Soluciones integrales llave en mano.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Líneas de negocio"
        title="Servicios de infraestructura especializada"
        intro="Diseño, construcción, rehabilitación y ejecución de proyectos de alto impacto con maquinaria propia y cumplimiento normativo."
      />

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`section ${i % 2 === 1 ? "bg-jv-bg" : ""}`}
        >
          <div className="container-jv grid lg:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="eyebrow">Servicio 0{i + 1}</span>
              <h2 className="mt-3 text-3xl font-extrabold text-jv-ink tracking-tight">{s.title}</h2>
              <p className="mt-4 text-jv-gray text-lg leading-relaxed">{s.short}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {s.items.map((it) => (
                  <div key={it} className="flex gap-2.5 text-sm text-jv-ink/90">
                    <Bullet className="mt-0.5" />
                    {it}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-jv-green/8 border border-jv-green/20 p-5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-jv-green-dark">
                  Beneficios
                </h4>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-jv-ink/85">
                      <Bullet className="mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <ObraImage src={s.image} alt={`Obra · ${s.title}`} ratio="aspect-[4/5]" />
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
