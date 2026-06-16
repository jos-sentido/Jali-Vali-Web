# JALIE-VALI Constructora — Sitio web

Sitio corporativo orientado a **generar confianza para licitaciones** (gobierno, organismos de agua, desarrolladores e industria). Stack: **Next.js 15 + Tailwind CSS v4**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

- `app/` — páginas: Inicio, Nosotros, Servicios, Maquinaria, Proyectos, Experiencia, Contacto
- `components/` — Header, Footer, PageHero, ContactForm, ui (componentes compartidos)
- `lib/site.js` — **fuente única de contenido**. Todos los datos viven aquí.
- `public/brand/` — logo

## Datos REALES (validados ficha técnica == PDF cliente, Año 2026)

- Monto total de obras: **$542,367,455.60 MXN** (con desglose por tipo de obra)
- Flota: **46 equipos** de maquinaria pesada propia
- 3 líneas de negocio: Protección hidráulica · Redes sanitarias y pluviales · Instalaciones eléctricas y especiales

## ⚠️ Pendientes del cliente (placeholders `[POR DEFINIR]` en `lib/site.js`)

Edita `lib/site.js` → objeto `company` y secciones marcadas:

| Categoría | Qué falta |
|---|---|
| **Contacto** | Teléfono, WhatsApp, correo comercial, dirección |
| **Empresa** | Año de fundación, RFC, organigrama |
| **Credenciales** | Certificaciones, registro de contratista, afiliaciones |
| **Proyectos** | 10 proyectos reales: fotos, cliente, ubicación, monto, año |
| **Marca** | Logo vectorial (hoy solo PNG), manual de identidad, fotos reales de obra |
| **Formulario** | Conectar `components/ContactForm.jsx` a un backend (Formspree / Resend / ruta `/api/contact`) |

Las imágenes placeholder (`components/ui.jsx` → `PlaceholderImage`) se reemplazan por fotos reales cuando el cliente las entregue.

## Deploy

Listo para **Vercel** (push del repo → import). Build estático, 8 rutas pre-renderizadas.
