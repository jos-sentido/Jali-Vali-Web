import Link from "next/link";
import Image from "next/image";
import {
  company,
  stats,
  services,
  machinery,
  machineryTotal,
  valueProps,
  portfolioBreakdown,
  audience,
  credentials,
  gateways,
} from "@/lib/site";
import { SectionHeading, Check, Bullet, CTASection } from "@/components/ui";
import Counter from "@/components/Counter";

const money = (n) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

export default function Home() {
  return (
    <>
      {/* ================= HERO (full-bleed) ================= */}
      <section className="relative bg-jv-ink text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/banners/hero-main.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Oscurecido para legibilidad: más denso a la izquierda y abajo */}
          <div className="absolute inset-0 bg-gradient-to-r from-jv-ink via-jv-ink/85 to-jv-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-jv-ink via-jv-ink/30 to-jv-ink/40" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full bg-jv-green/10 blur-3xl" />
        <div className="container-jv relative py-24 lg:py-32">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-jv-green-light">Empresa mexicana líder · {company.year}</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Infraestructura crítica que{" "}
              <span className="text-jv-green">protege, conecta y transforma</span> al país.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              {company.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn btn-primary">
                Solicitar propuesta
              </Link>
              <Link href="/servicios" className="btn btn-ghost">
                Conocer servicios
              </Link>
            </div>

            {/* Stats inline con count-up */}
            <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-jv-ink p-5">
                  <dt className="text-3xl md:text-4xl font-extrabold text-jv-green">
                    <Counter value={s.num} prefix={s.prefix || ""} suffix={s.suffix || ""} />
                  </dt>
                  <dd className="mt-1 text-xs text-white/60 leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ BARRA DE DIFERENCIADORES ============ */}
      <section className="bg-jv-green-dark">
        <div className="container-jv py-5 flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-2 text-white text-sm font-medium">
          {valueProps.slice(0, 5).map((v) => (
            <span key={v} className="inline-flex items-center gap-2.5">
              <Bullet tone="white" className="h-3" /> {v}
            </span>
          ))}
        </div>
      </section>

      {/* ============ CREDENCIALES / CONFIANZA ============ */}
      <section className="border-b border-jv-line">
        <div className="container-jv py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-jv-gray">
            Ingeniería con respaldo y cumplimiento
          </p>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-3 rounded-xl border border-jv-line px-4 py-3.5"
              >
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-jv-green/10 text-jv-green-dark flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-bold text-jv-ink text-sm leading-tight">{c.label}</p>
                  <p className="text-xs text-jv-gray mt-0.5 leading-snug">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ENTERPRISE GATEWAY (segmentación) ============ */}
      <section className="section bg-jv-bg">
        <div className="container-jv">
          <SectionHeading
            center
            eyebrow="¿Desde dónde nos contacta?"
            title="Una ruta clara según su perfil"
            intro="Atendemos a quienes desarrollan la infraestructura del país, con soluciones adaptadas a cada tipo de cliente."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {gateways.map((g) => (
              <article
                key={g.key}
                className="group flex flex-col rounded-card bg-white border border-jv-line p-7 hover:border-jv-green hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-jv-ink">{g.title}</h3>
                <p className="mt-2 text-sm text-jv-gray leading-relaxed">{g.desc}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {g.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-jv-ink/85">
                      <Bullet className="mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className="mt-6 inline-flex items-center justify-between gap-2 rounded-lg bg-jv-ink text-white px-4 py-3 text-sm font-semibold group-hover:bg-jv-green-dark transition-colors"
                >
                  {g.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section className="section">
        <div className="container-jv">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Líneas de negocio"
              title="Soluciones integrales de infraestructura"
              intro="Diseño, construcción, rehabilitación y ejecución de proyectos públicos y privados de alto impacto."
            />
            <Link href="/servicios" className="btn btn-dark shrink-0">
              Ver todos los servicios
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className="group rounded-card border border-jv-line bg-white overflow-hidden hover:border-jv-green hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={360}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jv-ink/40 to-transparent" />
                  <span className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-jv-ink/85 backdrop-blur text-jv-green flex items-center justify-center font-extrabold">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-jv-ink leading-snug">{s.title}</h3>
                  <p className="mt-2 text-jv-gray text-sm leading-relaxed">{s.short}</p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {s.items.slice(0, 4).map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-jv-ink/80">
                        <Bullet className="mt-0.5" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/servicios"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-jv-green-dark group-hover:gap-2.5 transition-all"
                  >
                    Más información
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAQUINARIA ================= */}
      <section className="section bg-jv-bg">
        <div className="container-jv grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Capacidad operativa"
              title="Maquinaria propia, lista para cualquier reto"
              intro="Contamos con una amplia flota de maquinaria y equipos especializados que nos permite ejecutar proyectos de infraestructura con eficiencia, seguridad y alta capacidad de respuesta."
            />
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold text-jv-green">
                <Counter value={machineryTotal} />
              </span>
              <span className="text-jv-gray font-medium leading-tight">
                equipos especializados
                <br />
                de maquinaria pesada
              </span>
            </div>
            <Link href="/maquinaria" className="btn btn-primary mt-8">
              Ver catálogo de maquinaria
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {machinery.map((m) => (
              <div
                key={m.name}
                className="relative rounded-xl overflow-hidden border border-jv-line group"
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  width={320}
                  height={220}
                  sizes="(max-width: 768px) 50vw, 18vw"
                  className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jv-ink/90 via-jv-ink/25 to-transparent" />
                <span className="absolute top-1.5 right-1.5 bg-jv-green text-jv-ink text-xs font-extrabold px-1.5 py-0.5 rounded">
                  {m.units}
                </span>
                <span className="absolute bottom-1.5 left-2 right-2 text-[11px] font-semibold text-white leading-tight">
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCIA / MONTOS ================= */}
      <section className="section bg-jv-ink text-white">
        <div className="container-jv">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-jv-green-light justify-center">Experiencia comprobada</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
              {money(portfolioBreakdown.total)} MXN en obras
            </h2>
            <p className="mt-4 text-white/65 text-lg">
              Resumen global por tipo de obra ejecutada — {company.year}.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {portfolioBreakdown.rows.map((r) => {
              const pct = (r.amount / portfolioBreakdown.total) * 100;
              return (
                <div key={r.label}>
                  <div className="flex justify-between items-baseline text-sm mb-1.5">
                    <span className="text-white/85 font-medium">{r.label}</span>
                    <span className="text-jv-green font-bold tabular-nums">{money(r.amount)}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-jv-green"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between items-baseline pt-4 mt-2 border-t border-white/15">
              <span className="font-bold text-lg">Total global</span>
              <span className="font-extrabold text-2xl text-jv-green tabular-nums">
                {portfolioBreakdown.totalLabel}
              </span>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/experiencia" className="btn btn-ghost">
              Ver experiencia y licitaciones
            </Link>
          </p>
        </div>
      </section>

      {/* ================= PÚBLICO OBJETIVO ================= */}
      <section className="section">
        <div className="container-jv">
          <SectionHeading
            center
            eyebrow="A quién servimos"
            title="Aliados del sector público y privado"
            intro="Generamos confianza y resultados para quienes desarrollan la infraestructura del país."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { title: "Sector Gobierno", img: "/brand/audiencia/gobierno.jpg", list: audience.gobierno },
              { title: "Sector Privado", img: "/brand/audiencia/privado.jpg", list: audience.privado },
            ].map((col) => (
              <div key={col.title} className="rounded-card border border-jv-line bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image src={col.img} alt={col.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jv-ink/85 via-jv-ink/35 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-jv-green" /> {col.title}
                  </h3>
                </div>
                <ul className="p-8 grid sm:grid-cols-2 gap-3">
                  {col.list.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-jv-ink/85">
                      <Bullet className="mt-0.5" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BANDA DE IMPACTO ============ */}
      <section className="relative overflow-hidden">
        <Image
          src="/brand/banners/aerial-infra.jpg"
          alt="Obra de infraestructura de gran escala"
          width={1920}
          height={1080}
          sizes="100vw"
          className="w-full h-[340px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-jv-ink/70" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-jv">
            <p className="eyebrow text-jv-green-light">Nuestro compromiso</p>
            <h2 className="mt-3 max-w-3xl text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Infraestructura que protege hoy,{" "}
              <span className="text-jv-green">desarrollo que trasciende mañana.</span>
            </h2>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
