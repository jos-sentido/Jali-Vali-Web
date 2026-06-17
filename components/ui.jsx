import Link from "next/link";
import Image from "next/image";

// Foto real de obra (next/image con fill). Si no hay src, cae al placeholder.
export function ObraImage({ src, alt, ratio = "aspect-[4/3]", className = "", priority = false }) {
  if (!src) return <PlaceholderImage label={alt} ratio={ratio} className={className} />;
  return (
    <div className={`${ratio} ${className} relative overflow-hidden rounded-xl bg-jv-ink`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}

// Encabezado de sección reutilizable
export function SectionHeading({ eyebrow, title, intro, light = false, center = false }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl ${center ? "" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-3 text-3xl md:text-4xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-jv-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-jv-gray"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

// Imagen placeholder (faltan fotos reales de obra)
export function PlaceholderImage({ label = "Foto real de obra", ratio = "aspect-[4/3]", className = "" }) {
  return (
    <div
      className={`${ratio} ${className} relative overflow-hidden rounded-xl bg-jv-ink grid-pattern flex items-center justify-center border border-white/5`}
    >
      <div className="text-center px-4">
        <svg className="mx-auto mb-2 text-jv-green/70" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <p className="text-[11px] uppercase tracking-widest text-white/40 font-semibold">{label}</p>
      </div>
    </div>
  );
}

// Aviso de contenido pendiente (solo visible para el equipo / placeholders)
export function PendingTag({ children = "Pendiente de cliente" }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-jv-green-dark bg-jv-green/10 border border-jv-green/25 rounded-full px-2 py-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-jv-green animate-pulse" />
      {children}
    </span>
  );
}

export function Check({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CTASection() {
  return (
    <section className="relative bg-jv-green-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container-jv py-16 relative flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            ¿Tiene un proyecto de infraestructura o licitación en puerta?
          </h2>
          <p className="mt-3 text-white/85 text-lg">
            Reciba una propuesta técnica y económica respaldada por maquinaria propia y experiencia comprobada.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link href="/contacto" className="btn bg-jv-ink text-white hover:bg-black">
            Solicitar propuesta
          </Link>
          <Link href="/maquinaria" className="btn bg-white text-jv-ink hover:bg-white/90">
            Ver capacidad operativa
          </Link>
        </div>
      </div>
    </section>
  );
}
