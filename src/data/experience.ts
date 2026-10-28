export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: 'Desarrollador Web',
    company: 'Madero Fresh',
    period: '2026',
    type: 'Freelance',
    description:
      'Desarrollé una plataforma web completa para una empresa de comercialización de productos del campo. Implementé un panel administrativo para gestionar el catálogo, el flujo de solicitudes de cotización con almacenamiento seguro y el envío automático de correos. Estructuré la aplicación con una arquitectura escalable pensando en su mantenimiento y crecimiento futuro.',
  },
  {
    role: 'Desarrollador Frontend',
    company: 'Reda / SimpatIA',
    period: '2025',
    type: 'Residencias Profesionales',
    description:
      'Participé en el desarrollo de una plataforma web para la gestión de reportes ciudadanos. Implementé módulos de delegaciones, tickets y calendario, integrando la interfaz con servicios backend. Colaboré en equipo usando control de versiones y participé en pruebas funcionales para asegurar la calidad del sistema.',
  },
  {
    role: 'Soporte Técnico',
    company: 'Instituto Tecnológico de Torreón (CECOM)',
    period: '2024',
    type: 'Servicio Social',
    description:
      'Brindé soporte técnico a usuarios y equipos de cómputo. Realicé mantenimiento preventivo y correctivo, instalación y actualización de sistemas operativos y software, y diagnóstico de fallas de hardware y software. Colaboré en la administración del laboratorio de cómputo.',
  },
];
