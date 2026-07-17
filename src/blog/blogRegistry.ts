export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  category: string;
  region?: string;
  readingTime: number; // minutos
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-find-property-manager-algarve',
    title: 'How to Find a Property Manager in the Algarve',
    description: 'A practical guide for foreign property owners on finding, vetting and hiring a trusted property manager in the Algarve — including what to look for, what to avoid, and what to pay.',
    datePublished: '2026-07-17',
    dateModified: '2026-07-17',
    category: 'Guides',
    region: 'Algarve',
    readingTime: 6,
  },
  // Artigos futuros adicionados aqui
];
