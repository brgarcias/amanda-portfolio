export const site = {
  url: 'https://arra-portfolio.netlify.app',
  shareImage: '/images/og-image.jpg',
  googleSiteVerification: 'UQfTWpVprRBLVKKPX5-HYduU6JZc1pwnXqO9F9ry-QI',
} as const;

const phoneNumber = '5511996240704';

/** Content transcribed and adapted from Amanda's supplied résumé. */
export const profile = {
  name: 'Amanda Assumpção',
  fullName: 'Amanda Ribeiro Roque de Assumpção',
  title: 'Engenheira de Segurança do Trabalho',
  location: 'São Paulo, SP',
  email: 'eng.amandaassumpcao@gmail.com',
  phone: '(11) 99624-0704',
  phoneE164: `+${phoneNumber}`,
  phoneHref: `tel:+${phoneNumber}`,
  whatsapp: `https://wa.me/${phoneNumber}`,
  linkedin: 'https://www.linkedin.com/in/amanda-assump%C3%A7%C3%A3o-285922328',
  photo: '/images/amanda-assumpcao.webp',
  resume: '/documents/Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf',
} as const;

export const navigation = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#experiencia', label: 'Trajetória' },
  { href: '#formacao', label: 'Formação' },
] as const;

export const expertise = [
  {
    icon: 'shield',
    title: 'Segurança do trabalho',
    description:
      'Um olhar preventivo para as pessoas e as operações. Apoio ao SESMT, acompanhamento de atividades de risco e investigação de incidentes e acidentes.',
    tags: ['SESMT', 'Gestão de riscos', 'Prestadores de serviço'],
  },
  {
    icon: 'files',
    title: 'Gestão & conformidade',
    description:
      'Organização e atualização de procedimentos, registros e documentação de SSMA, com atenção aos requisitos legais e à qualidade das informações.',
    tags: ['SOC e GHE', 'PGR, CAT e PPP', 'LTCAT e PCMSO'],
  },
  {
    icon: 'chart',
    title: 'Indicadores & melhoria',
    description:
      'Consolidação de indicadores de segurança e sustentabilidade, análise de dados e relatórios técnicos para apoiar decisões e a melhoria contínua.',
    tags: ['Indicadores de SSMA', 'Power BI', 'Lean'],
  },
  {
    icon: 'building',
    title: 'Engenharia & campo',
    description:
      'Vivência em projetos, expansões e reformas, conectando o planejamento à realidade da operação. Experiência com vistorias, medições e mobilização de equipes.',
    tags: ['Engenharia civil', 'Obras e reformas', 'AutoCAD'],
  },
] as const;

export const experience = [
  {
    role: 'Analista de Segurança do Trabalho',
    company: 'Brink’s Segurança e Transporte de Valores Ltda.',
    start: '2024-09',
    period: 'Set. 2024 — atual',
    current: true,
    responsibilities: [
      'Implementação e atualização de procedimentos de SESMT, segurança, meio ambiente e sustentabilidade, observando os requisitos legais.',
      'Consolidação mensal de indicadores de SSMA e sustentabilidade para a liderança e o comitê responsável.',
      'Apoio às investigações de incidentes e acidentes, com análise de dados e elaboração de relatórios técnicos.',
      'Acompanhamento de atividades de risco de prestadores de serviço, projetos, expansões e reformas.',
      'Atualização de GHE, cargos, setores e riscos no SOC; emissão de PGR, CAT e PPP e gestão de documentação técnica e legal.',
      'Desenvolvimento de materiais de treinamento.',
    ],
  },
  {
    role: 'Assistente de Segurança do Trabalho e Meio Ambiente',
    company: 'Brink’s Segurança e Transporte de Valores Ltda.',
    start: '2023-01',
    period: 'Jan. 2023 — set. 2024',
    current: false,
    responsibilities: [
      'Suporte ao SESMT na consolidação de indicadores, controle de documentação legal e atualização de procedimentos.',
      'Auxílio às filiais no sistema SOC, acompanhamento de prestadores de serviço e elaboração de materiais de treinamento.',
    ],
  },
  {
    role: 'Estagiária de Segurança do Trabalho e Meio Ambiente',
    company: 'Brink’s Segurança e Transporte de Valores Ltda.',
    start: '2021-11',
    period: 'Nov. 2021 — dez. 2022',
    current: false,
    responsibilities: [
      'Apoio ao SESMT em indicadores, investigações, relatórios, documentação e atualização de registros no SOC.',
      'Acompanhamento de atividades de risco, treinamentos e compilação de indicadores de sustentabilidade.',
    ],
  },
  {
    role: 'Auxiliar de Engenharia',
    company: 'Inside Engenharia de Combate a Incêndio Ltda.',
    start: '2021-03',
    period: 'Mar. 2021 — jun. 2021',
    current: false,
    responsibilities: [
      'Mobilização de equipes e controle de planilhas de planejamento, cronogramas e solicitações de obras.',
    ],
  },
  {
    role: 'Estagiária de Construção Civil',
    company: 'Alves Lacerda Engenharia e Construtora Ltda.',
    start: '2020-09',
    period: 'Set. 2020 — mar. 2021',
    current: false,
    responsibilities: [
      'Atuação em campo com mobilização de recursos, medições, vistorias, controle de atividades e organização documental.',
    ],
  },
] as const;

export const education = [
  {
    kind: 'MBA',
    title: 'ESG e Negócios Sustentáveis',
    institution: 'USP/Esalq',
    period: 'Out. 2025 — ago. 2027',
    status: 'Em andamento',
  },
  {
    kind: 'Pós-graduação',
    title: 'Engenharia de Segurança do Trabalho',
    institution: 'Senac São Paulo',
    period: 'Jan. 2023 — jun. 2024',
    status: 'Concluída',
  },
  {
    kind: 'Graduação',
    title: 'Engenharia Civil',
    institution: 'Universidade São Judas Tadeu',
    period: 'Jan. 2018 — dez. 2022',
    status: 'Concluída',
  },
] as const;

export const courses = [
  {
    title: 'Lean — Melhoria Contínua',
    institution: 'Brink’s University Brasil',
    year: '2022',
  },
  { title: 'Power BI', institution: 'Udemy', year: '2022' },
  { title: 'AutoCAD 2D e 3D', institution: 'Arquitettar Cursos', year: '2020' },
  { title: 'Inglês intermediário', institution: 'Wizard', year: '2016 — 2020' },
] as const;

export type Testimonial = {
  name: string;
  role?: string;
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  date: string;
};

/**
 * Reviews sent through /avaliar that Amanda approved and the client
 * authorized for publication, copied as received.
 */
export const testimonials: readonly Testimonial[] = [];
