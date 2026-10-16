export const site = {
  name: 'Sergio Vazquez Zamora',
  shortName: 'Sergio VZ',
  tagline: 'Diseño interfaces. Desarrollo soluciones.',
  eyebrow: 'Desarrollo Web · Soporte Técnico',
  lede: 'Transformo ideas en productos digitales claros y funcionales. Combino desarrollo web, atención al detalle y soporte técnico para crear soluciones que realmente funcionen.',
  summary:
    'Ingeniero Informático con experiencia en desarrollo web y soporte técnico. Me gusta crear soluciones digitales claras, funcionales y bien pensadas.',
  metaDescription:
    'Ingeniero Informático con experiencia en desarrollo web, soporte técnico y creación de soluciones digitales. Disponible para proyectos y oportunidades laborales.',
  email: 'sergiovazquezzamora7@gmail.com',
  github: 'https://github.com/WITHERWALKER',
  githubHandle: 'WITHERWALKER',
  location: 'Torreón, Coahuila, México',
  locationShort: 'Torreón, México',
  workMode: 'Remoto',
  availability: 'Actualmente disponible',
  cv: '/cv-sergiovz.pdf',
  themeColor: '#f7f4ef',
} as const;

/** Ruta a una imagen social de 1200x630 en /public. Vacío = no se emiten
 *  los tags og:image / twitter:image. Crea el archivo y rellena la ruta.
 *  Se declara fuera de `site` para que su tipo sea `string` y no el literal
 *  `''`, que Narrowing de TypeScript colapsaría a `never`. */
export const ogImage: string = '';

export const navLinks = [
  { href: '/#projects', label: 'Proyectos' },
  { href: '/landings', label: 'Landing Pages' },
  { href: '/#about', label: 'Sobre mi' },
  { href: '/#experience', label: 'Experiencia' },
  { href: '/#skills', label: 'Habilidades' },
  { href: '/#contact', label: 'Contacto' },
] as const;

export const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    icon: 'mail',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    id: 'github',
    label: 'Github',
    icon: 'github',
    value: site.github,
    href: site.github,
    external: true,
  },
] as const;
