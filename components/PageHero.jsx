export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative bg-jv-ink text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full bg-jv-green/10 blur-3xl" />
      <div className="container-jv relative py-16 lg:py-20">
        <div className="max-w-3xl reveal">
          {eyebrow && <span className="eyebrow text-jv-green-light">{eyebrow}</span>}
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          {intro && <p className="mt-5 text-lg text-white/75 leading-relaxed">{intro}</p>}
        </div>
      </div>
    </section>
  );
}
