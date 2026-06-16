"use client";

import { useState } from "react";
import { services } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Sin backend aún: feedback inmediato. Conectar a API/email cuando el cliente
    // entregue el correo comercial (ej. Formspree, Resend o ruta /api/contact).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-jv-green/30 bg-jv-green/8 p-8 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-jv-green flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06140a" strokeWidth="3">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-jv-ink">Solicitud registrada</h3>
        <p className="mt-2 text-jv-gray text-sm">
          Gracias por su interés. Un asesor de JALIE-VALI se pondrá en contacto a la brevedad.
        </p>
        <p className="mt-4 text-xs text-jv-gray/70">
          (Demo: conectar a correo comercial / API cuando el cliente lo proporcione.)
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-jv-line bg-white px-4 py-3 text-sm text-jv-ink outline-none focus:border-jv-green focus:ring-2 focus:ring-jv-green/20 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-jv-ink mb-1.5">Nombre completo *</label>
          <input required type="text" className={field} placeholder="Su nombre" />
        </div>
        <div>
          <label className="block text-sm font-medium text-jv-ink mb-1.5">Empresa / Dependencia</label>
          <input type="text" className={field} placeholder="Organización" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-jv-ink mb-1.5">Correo *</label>
          <input required type="email" className={field} placeholder="correo@empresa.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-jv-ink mb-1.5">Teléfono</label>
          <input type="tel" className={field} placeholder="+52" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-jv-ink mb-1.5">Servicio de interés</label>
        <select className={field} defaultValue="">
          <option value="" disabled>
            Seleccione un servicio
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="licitacion">Licitación / proyecto de gran escala</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-jv-ink mb-1.5">Mensaje *</label>
        <textarea
          required
          rows={4}
          className={field}
          placeholder="Describa su proyecto, alcance o requerimiento de licitación…"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Enviar solicitud de propuesta
      </button>
    </form>
  );
}
