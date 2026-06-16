import Link from "next/link";
import Image from "next/image";
import { company, nav, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-jv-black text-white/70">
      <div className="container-jv py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="bg-white rounded-md p-2 inline-flex mb-4">
            <Image
              src="/brand/logo-jali-vali.png"
              alt="JALIE-VALI Constructora"
              width={150}
              height={64}
              className="h-11 w-auto"
            />
          </span>
          <p className="text-sm leading-relaxed text-white/55 max-w-xs">
            {company.description}
          </p>
          <p className="mt-4 text-xs font-semibold tracking-wide text-jv-green">
            {company.coverage}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Navegación
          </h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-jv-green transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Servicios
          </h4>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/servicios" className="hover:text-jv-green transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contacto
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <span className="text-white/45">Teléfono:</span> {company.phone}
            </li>
            <li>
              <span className="text-white/45">WhatsApp:</span> {company.whatsapp}
            </li>
            <li>
              <span className="text-white/45">Correo:</span> {company.email}
            </li>
            <li>
              <span className="text-white/45">Ubicación:</span> {company.address}
            </li>
          </ul>
          <Link href="/contacto" className="btn btn-primary text-sm mt-5">
            Solicitar cotización
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-jv py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            © {company.year.replace("AÑO ", "")} {company.legalName}. Todos los derechos reservados.
          </p>
          <p>Infraestructura que protege hoy, desarrollo que trasciende mañana.</p>
        </div>
      </div>
    </footer>
  );
}
