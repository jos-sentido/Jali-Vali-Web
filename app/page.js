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
      {/* ================= HERO ================= */}
      <section className="relative bg-jv-ink text-white overflow-hidden">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]">
          <Image
            src="/brand/obras/desazolve-canal.jpg"
            alt=""
            fill
            priority
            sizes="58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jv-ink via-jv-ink/90 to-jv-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-jv-ink/60 to-transparent" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full bg-jv-green/10 blur-3xl" />
        <div className="container-jv relative py-20 lg:py-28">
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
                className="group rounded-card border border-jv-line bg-white p-7 hover:border-jv-green hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-jv-green/10 text-jv-green-dark flex items-center justify-center font-extrabold text-lg">
                  0{i + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold text-jv-ink leading-snug">{s.title}</h3>
                <p className="mt-2 text-jv-gray text-sm leading-relaxed">{s.short}</p>
                <ul className="mt-5 space-y-2">
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
              <div key={m.name} className="rounded-xl bg-white border border-jv-line p-4 text-center">
                <div className="text-3xl font-extrabold text-jv-ink">{m.units}</div>
                <div className="mt-1 text-[12px] text-jv-gray leading-tight">{m.name}</div>
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
            <div className="rounded-card border border-jv-line p-8">
              <h3 className="text-lg font-bold text-jv-ink flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-jv-green" /> Sector Gobierno
              </h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {audience.gobierno.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-jv-ink/85">
                    <Bullet className="mt-0.5" /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-jv-line p-8">
              <h3 className="text-lg font-bold text-jv-ink flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-jv-green" /> Sector Privado
              </h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {audience.privado.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-jv-ink/85">
                    <Bullet className="mt-0.5" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
