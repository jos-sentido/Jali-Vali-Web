// =============================================================================
// JALIE-VALI Constructora — Datos centralizados del sitio
// Datos REALES validados (ficha técnica == PDF cliente, AÑO 2026).
// Los [PLACEHOLDER] deben sustituirse con info que entregue el cliente.
// =============================================================================

export const PLACEHOLDER = "[POR DEFINIR]";

export const company = {
  name: "JALIE-VALI",
  legalName: "JALIE-VALI Constructora",
  tagline: "Infraestructura estratégica de alto impacto a nivel nacional",
  description:
    "Empresa mexicana especializada en el diseño, construcción, rehabilitación y ejecución de proyectos de infraestructura hidráulica, sanitaria, pluvial, eléctrica e instalaciones especiales.",
  coverage: "Cobertura nacional — México",
  year: "AÑO 2026",
  // --- Datos faltantes (placeholders) ---
  foundedYear: PLACEHOLDER,
  rfc: PLACEHOLDER,
  address: PLACEHOLDER,
  phone: PLACEHOLDER,
  whatsapp: PLACEHOLDER, // ej. "521XXXXXXXXXX" para wa.me
  email: PLACEHOLDER,
};

// --- Indicadores clave (REALES) ---
export const stats = [
  { num: 542, prefix: "$", suffix: "M+", label: "MXN en obras presentadas", detail: "$542,367,455.60 MXN — Año 2026" },
  { num: 46, suffix: "", label: "Equipos especializados", detail: "Flota de maquinaria pesada propia" },
  { num: 5, suffix: "", label: "Líneas de infraestructura estratégica", detail: "Hidráulica, sanitaria, pluvial, eléctrica y especial" },
  { num: 100, suffix: "%", label: "Cobertura nacional", detail: "Proyectos públicos y privados en todo México" },
];

// --- Distribución de obra (REAL) ---
export const portfolioBreakdown = {
  total: 542367455.6,
  totalLabel: "$542,367,455.60",
  rows: [
    { label: "Desazolves de canales, arroyos y presas", amount: 158084700 },
    { label: "Instalaciones", amount: 144000000 },
    { label: "Drenaje sanitario", amount: 124068716.8 },
    { label: "Drenaje pluvial", amount: 89772856 },
    { label: "Cárcamos, generador y tablero de transferencia", amount: 26441182.8 },
  ],
};

// --- Servicios (REALES, 3 líneas de negocio) ---
export const services = [
  {
    slug: "proteccion-hidraulica",
    title: "Infraestructura de Protección Hidráulica",
    short: "Desazolves, recuperación de cauces y control pluvial.",
    image: "/brand/proyectos/hidraulica.jpg",
    items: [
      "Desazolves y limpieza hidráulica",
      "Recuperación de cauces naturales",
      "Encauzamientos hidráulicos",
      "Protección de márgenes y taludes",
      "Presas y vasos reguladores",
      "Obras de control pluvial",
    ],
    benefits: [
      "Prevención de inundaciones y riesgos",
      "Recuperación de la capacidad hidráulica",
      "Protección del medio ambiente y ecosistemas",
      "Alta capacidad operativa y cumplimiento normativo",
    ],
  },
  {
    slug: "redes-sanitarias-pluviales",
    title: "Redes Sanitarias y Pluviales",
    short: "Infraestructura que protege y conecta.",
    image: "/brand/proyectos/sanitaria.jpg",
    items: [
      "Redes sanitarias y pluviales",
      "Colectores de gran diámetro",
      "Alcantarillado sanitario y pluvial",
      "Cárcamos de bombeo y líneas de impulsión",
      "Pozos de visita, bocas de tormenta y pozos de absorción",
      "Descargas domiciliarias y obras de urbanización",
    ],
    benefits: [
      "Sistemas seguros y confiables",
      "Manejo eficiente de aguas residuales y pluviales",
      "Prevención de inundaciones",
      "Durabilidad y alto desempeño",
    ],
  },
  {
    slug: "instalaciones-electricas-especiales",
    title: "Instalaciones Eléctricas y Especiales",
    short: "Soluciones integrales para infraestructura urbana, industrial e institucional.",
    image: "/brand/proyectos/electrica.jpg",
    items: [
      "Media, baja y alta tensión",
      "Subestaciones, tableros y alumbrado urbano",
      "CCTV, control de acceso y automatización",
      "Plantas de emergencia y sistemas de tierra física",
      "Sistemas contra incendio y pararrayos",
      "Aire acondicionado, climatización y ventilación",
    ],
    benefits: [
      "Ingeniería integral y personal especializado",
      "Cumplimiento NOM y CFE",
      "Integración BIM",
      "Supervisión y control de calidad",
    ],
  },
];

// --- Maquinaria (REAL — 46 equipos) ---
export const machinery = [
  { name: "Excavadoras", units: 10, image: "/brand/maquinaria/excavadoras.jpg" },
  { name: "Excavadoras anfibias", units: 3, image: "/brand/maquinaria/excavadoras-anfibias.jpg" },
  { name: "Retroexcavadoras", units: 15, image: "/brand/maquinaria/retroexcavadoras.jpg" },
  { name: "Bulldozers", units: 2, image: "/brand/maquinaria/bulldozers.jpg" },
  { name: "Cargadores frontales", units: 4, image: "/brand/maquinaria/cargadores-frontales.jpg" },
  { name: "Motoniveladoras", units: 4, image: "/brand/maquinaria/motoniveladoras.jpg" },
  { name: "Vibrocompactadores", units: 4, image: "/brand/maquinaria/vibrocompactadores.jpg" },
  { name: "Compactadores terraceros", units: 4, image: "/brand/maquinaria/compactadores-terraceros.jpg" },
];
export const machineryTotal = 46;

// --- Diferenciadores (REALES) ---
export const valueProps = [
  "Maquinaria propia y equipo pesado",
  "Equipo técnico especializado",
  "Experiencia en infraestructura estratégica",
  "Capacidad para múltiples proyectos simultáneos",
  "Soluciones integrales llave en mano",
  "Cumplimiento normativo (NOM / CFE)",
  "Supervisión y control de calidad",
  "Enfoque en seguridad y eficiencia",
];

// --- Público objetivo (REAL) ---
export const audience = {
  gobierno: [
    "Municipios",
    "Organismos operadores de agua",
    "Dependencias estatales",
    "Dependencias federales",
  ],
  privado: [
    "Parques industriales",
    "Constructoras y contratistas EPC",
    "Desarrolladores inmobiliarios",
    "Empresas manufactureras",
    "Energía e infraestructura",
  ],
};

// --- Proyectos destacados (PLACEHOLDER — faltan fotos reales y nombres) ---
// Imágenes de referencia (generadas, consistentes con el PDF) — sustituibles por fotos reales.
export const featuredProjects = [
  { title: "Desazolve y encauzamiento de cauce", category: "Hidráulica", client: PLACEHOLDER, year: PLACEHOLDER, image: "/brand/proyectos/hidraulica.jpg" },
  { title: "Red de drenaje sanitario", category: "Sanitaria", client: PLACEHOLDER, year: PLACEHOLDER, image: "/brand/proyectos/sanitaria.jpg" },
  { title: "Colector pluvial de gran diámetro", category: "Pluvial", client: PLACEHOLDER, year: PLACEHOLDER, image: "/brand/proyectos/pluvial.jpg" },
  { title: "Subestación e instalaciones eléctricas", category: "Eléctrica", client: PLACEHOLDER, year: PLACEHOLDER, image: "/brand/proyectos/electrica.jpg" },
  { title: "Cárcamo de bombeo y pozos de visita", category: "Sanitaria", client: PLACEHOLDER, year: PLACEHOLDER, image: "/brand/proyectos/carcamo.jpg" },
  { title: "Obras complementarias y bocas de tormenta", category: "Especiales", client: PLACEHOLDER, year: PLACEHOLDER, image: "/brand/proyectos/especiales.jpg" },
];

// --- Credenciales / cumplimiento (REAL: mencionado en ficha/PDF) ---
export const credentials = [
  { label: "Cumplimiento NOM", detail: "Normas Oficiales Mexicanas" },
  { label: "Lineamientos CFE", detail: "Instalaciones eléctricas certificadas" },
  { label: "Integración BIM", detail: "Modelado y coordinación de obra" },
  { label: "Control de calidad", detail: "Supervisión técnica en cada etapa" },
];

// --- Enterprise Gateway: rutas por tipo de cliente ---
export const gateways = [
  {
    key: "gobierno",
    title: "Soy del sector gobierno",
    desc: "Municipios, organismos operadores de agua y dependencias estatales o federales.",
    bullets: ["Respaldo para licitaciones", "Capacidad operativa comprobada", "Cumplimiento normativo"],
    cta: "Solicitar propuesta pública",
  },
  {
    key: "privado",
    title: "Soy del sector privado",
    desc: "Parques industriales, desarrolladores, manufactura, energía e infraestructura.",
    bullets: ["Soluciones llave en mano", "Maquinaria propia disponible", "Proyectos simultáneos"],
    cta: "Cotizar mi proyecto",
  },
  {
    key: "constructora",
    title: "Soy constructora / EPC",
    desc: "Constructoras generales y contratistas EPC que requieren un aliado especializado.",
    bullets: ["Subcontratación especializada", "Alta capacidad de respuesta", "Ingeniería integral"],
    cta: "Explorar colaboración",
  },
];

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/maquinaria", label: "Maquinaria" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/contacto", label: "Contacto" },
];
