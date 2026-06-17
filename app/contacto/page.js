import { company, PLACEHOLDER } from "@/lib/site";
import { PendingTag } from "@/components/ui";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto",
  description:
    "Solicite una propuesta técnica y económica a JALIE-VALI Constructora. Atendemos proyectos de infraestructura en todo México.",
};

const channels = [
  { label: "Teléfono", value: company.phone, icon: "phone" },
  { label: "WhatsApp", value: company.whatsapp, icon: "chat" },
  { label: "Correo comercial", value: company.email, icon: "mail" },
  { label: "Ubicación", value: company.address, icon: "pin" },
];

function Icon({ name }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };
  const paths = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
    chat: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Solicite su propuesta"
        intro="Cuéntenos sobre su proyecto o licitación. Atendemos al sector público y privado en todo México."
        bg="/brand/banners/site-panorama.jpg"
      />

      <section className="section">
        <div className="container-jv grid lg:grid-cols-5 gap-10">
          {/* Datos de contacto */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <h2 className="text-2xl font-bold text-jv-ink">Canales de atención</h2>
              <PendingTag>Datos por confirmar</PendingTag>
            </div>
            <ul className="space-y-4">
              {channels.map((c) => (
                <li key={c.label} className="flex items-start gap-4 rounded-xl border border-jv-line p-4">
                  <span className="w-10 h-10 rounded-lg bg-jv-green/10 text-jv-green-dark flex items-center justify-center shrink-0">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-jv-gray">{c.label}</p>
                    <p className="font-semibold text-jv-ink">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl bg-jv-ink text-white/70 p-5 text-sm">
              <p className="font-semibold text-white mb-1">Cobertura</p>
              {company.coverage}. Capacidad para múltiples proyectos simultáneos.
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="rounded-card border border-jv-line p-6 md:p-8">
              <h2 className="text-2xl font-bold text-jv-ink">Cuéntenos sobre su proyecto</h2>
              <p className="mt-1.5 text-jv-gray text-sm">
                Responderemos con una propuesta técnica y económica a la medida.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
