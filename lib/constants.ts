export const SITE = {
  name: "Confecciones Kadi SAS",
  shortName: "Kadi",
  legalName: "CONFECCIONES KADI SAS",
  nit: "901.521.683-4",
  city: "Bogotá, Colombia",
  address: "Calle 58 Sur # 97B-52, Bogotá D.C., Colombia",
  email: "gerencia@confeccioneskadi.com",
  phone: "3186521168",
  phoneDisplay: "+57 318 652 1168",
  whatsappNumber: "573186521168",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.confeccioneskadi.com",
  foundedYear: 2003, // más de 20 años de experiencia
  description:
    "Fabricante colombiano de moda íntima y confección textil para marcas, con más de 20 años de experiencia en diseño, patronaje, corte, bordado y estampado. Producción nacional de calidad premium en Bogotá.",
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proceso", label: "Proceso" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/clientes", label: "Clientes" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export const SERVICES = [
  {
    slug: "diseno",
    title: "Diseño de colección",
    summary:
      "Desarrollo de moldes y fichas técnicas a partir de tu idea, referencia o tendencia de mercado.",
  },
  {
    slug: "patronaje",
    title: "Patronaje industrial",
    summary:
      "Patronaje digital y físico con escalado por tallas, listo para producción en serie.",
  },
  {
    slug: "confeccion",
    title: "Confección para marcas",
    summary:
      "Producción privada (private label) con control de calidad en cada lote, para marcas propias y de terceros.",
  },
  {
    slug: "bordado",
    title: "Bordado",
    summary:
      "Bordado industrial de precisión para etiquetas, logos y detalles decorativos.",
  },
  {
    slug: "estampado",
    title: "Estampado",
    summary:
      "Estampación textil con acabados durables, en pequeño y gran formato.",
  },
  {
    slug: "moda-intima",
    title: "Moda íntima",
    summary:
      "Especialistas en ropa interior y moda íntima femenina: tejidos técnicos, encajes y terminaciones finas.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Diseño",
    description:
      "Traducimos tu idea o referencia en fichas técnicas y moldes base listos para desarrollo.",
  },
  {
    number: "02",
    title: "Patronaje",
    description:
      "Escalado de tallas y ajuste de patrones para garantizar consistencia en toda la producción.",
  },
  {
    number: "03",
    title: "Corte",
    description:
      "Corte de tela por lotes con control de consumo y aprovechamiento del material.",
  },
  {
    number: "04",
    title: "Confección",
    description:
      "Ensamble en planta propia con procesos estandarizados y revisión por operario.",
  },
  {
    number: "05",
    title: "Bordado y estampado",
    description:
      "Aplicación de marca, logos y detalles decorativos según ficha técnica del cliente.",
  },
  {
    number: "06",
    title: "Control de calidad y entrega",
    description:
      "Inspección final pieza a pieza, empaque y despacho a nivel nacional.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Cuál es el pedido mínimo de producción?",
    answer:
      "Trabajamos con lotes mínimos pensados para marcas emergentes y establecidas. El volumen exacto depende de la prenda y del proceso (confección simple, bordado o estampado); lo definimos contigo en la cotización.",
  },
  {
    question: "¿Fabrican con diseños propios o solo con moldes del cliente?",
    answer:
      "Ambas opciones. Podemos desarrollar el diseño y patronaje desde cero a partir de tu idea, o confeccionar directamente sobre moldes y fichas técnicas que ya tengas.",
  },
  {
    question: "¿Hacen producción de marca privada (private label)?",
    answer:
      "Sí, es una de nuestras líneas principales. Confeccionamos bajo tu marca, con tus etiquetas, empaques y especificaciones, manteniendo confidencialidad sobre tus diseños.",
  },
  {
    question: "¿En cuánto tiempo entregan un pedido?",
    answer:
      "Los tiempos varían según volumen y complejidad. En la cotización inicial te damos una fecha estimada de entrega y mantenemos comunicación durante todo el proceso.",
  },
  {
    question: "¿Dónde están ubicados y hacen envíos a otras ciudades?",
    answer:
      "Nuestra planta está en Bogotá y despachamos a nivel nacional a través de transportadoras aliadas.",
  },
  {
    question: "¿Qué tipo de telas manejan?",
    answer:
      "Trabajamos principalmente tejidos para moda íntima y prendas femeninas (algodón, licra, encajes y tejidos técnicos), y podemos evaluar telas específicas que el cliente quiera usar.",
  },
] as const;
