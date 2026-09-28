export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { category: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'SQL', 'C#'] },
  {
    category: 'Frontend',
    items: ['React', 'Astro', 'Vite', 'Tailwind', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'ASP.NET', 'REST APIs', 'Cloudflare Workers'],
  },
  {
    category: 'Bases de datos',
    items: ['PostgreSQL', 'SQL Server', 'Supabase', 'Firebase', 'MySQL'],
  },
  { category: 'Herramientas', items: ['Git', 'GitHub', 'Postman', 'Power BI'] },
  { category: 'Apps Mobile', items: ['React Native', 'Expo'] },
  {
    category: 'Soporte Técnico',
    items: [
      'Diagnóstico de hardware/software',
      'Mantenimiento preventivo y correctivo',
      'Instalación de sistemas',
    ],
  },
];
