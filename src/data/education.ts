export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

export const education: Education[] = [
  {
    degree: 'Ingeniería Informática',
    institution: 'Instituto Tecnológico de Torreón',
    period: '2021 – 2026',
    specialization: 'Especialización en Ciencia de Datos y Aprendizaje Automático',
  },
  {
    degree: 'Carrera Técnica en Ofimática',
    institution: 'CBTa No. 1',
    period: '2018 – 2021',
  },
];
