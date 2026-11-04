export const site = {
  url: 'https://arra-portfolio.netlify.app',
  shareImage: '/images/og-image.jpg',
  googleSiteVerification: 'zE-A_JWezHcTY0RPEAiraoj-ORR540i46tyJwSk0T3s',
} as const;

const phoneNumber = '5511996240704';

/** Content transcribed and adapted from Amanda's supplied résumé. */
export const profile = {
  name: 'Amanda Assumpção',
  fullName: 'Amanda Ribeiro Roque de Assumpção',
  title: 'Engenheira de Segurança do Trabalho',
  secondaryTitle: 'Engenheira Civil',
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
  { href: '#pratica', label: 'Na prática' },
  { href: '#experiencia', label: 'Trajetória' },
  { href: '#formacao', label: 'Formação' },
  { href: '#avaliacoes', label: 'Avaliações' },
] as const;

/** The disciplines annotated around the portrait on the first screen. */
export const disciplines = [
  'Segurança do trabalho',
  'Engenharia civil',
  'SSMA',
  'ESG',
] as const;

/** The spec sheet beside the introduction. */
export const facts = [
  {
    term: 'Formação',
    description:
      'Engenharia civil e pós-graduação em engenharia de segurança do trabalho',
  },
  {
    term: 'Em andamento',
    description: 'MBA em ESG e Negócios Sustentáveis na USP/Esalq',
  },
  {
    term: 'Atuação',
    description: 'SESMT, SSMA e sustentabilidade na operação',
  },
  { term: 'Ferramentas', description: 'SOC, Power BI, AutoCAD e Lean' },
  { term: 'Base', description: 'São Paulo, SP' },
] as const;

/**
 * What Amanda does, by area: the work, the tools and methods of each one, and
 * where she has done it. The titles also name the services of the review form.
 */
export const expertise = [
  {
    title: 'Segurança do trabalho e prevenção',
    summary:
      'Apoio ao SESMT no dia a dia das operações: acompanhamento de atividades de risco de prestadores de serviço, investigação de incidentes e acidentes e desenvolvimento de materiais de treinamento.',
    tools: [
      'SESMT',
      'Gestão de riscos',
      'Prestadores de serviço',
      'Treinamentos',
    ],
    where: ['Brink’s'],
  },
  {
    title: 'Gestão de SSMA e conformidade legal',
    summary:
      'Implementação e atualização de procedimentos de segurança, meio ambiente e sustentabilidade, observando os requisitos legais, e gestão da documentação técnica: GHE, cargos, setores e riscos no SOC, com emissão de PGR, CAT e PPP.',
    tools: ['SOC', 'GHE', 'PGR', 'CAT', 'PPP', 'LTCAT', 'PCMSO'],
    where: ['Brink’s'],
  },
  {
    title: 'Indicadores e melhoria contínua',
    summary:
      'Consolidação mensal de indicadores de SSMA e sustentabilidade para a liderança e o comitê responsável, com análise de dados e relatórios técnicos que apoiam as decisões.',
    tools: ['Indicadores de SSMA', 'Power BI', 'Lean'],
    where: ['Brink’s'],
  },
  {
    title: 'Engenharia civil e campo',
    summary:
      'Vivência em obras e reformas: mobilização de equipes e recursos, medições, vistorias, controle de atividades e cronogramas, e o acompanhamento de projetos, expansões e reformas.',
    tools: ['AutoCAD', 'Cronogramas', 'Vistorias e medições'],
    where: [
      'Alves Lacerda Engenharia',
      'Inside Engenharia de Combate a Incêndio',
      'Brink’s',
    ],
  },
  {
    title: 'Sustentabilidade e ESG',
    summary:
      'Indicadores de sustentabilidade e procedimentos de meio ambiente na operação, com a visão de negócios do MBA em ESG e Negócios Sustentáveis.',
    tools: ['Indicadores de sustentabilidade', 'Meio ambiente', 'ESG'],
    where: ['Brink’s', 'USP/Esalq'],
  },
] as const;

/**
 * How the day-to-day responsibilities at Brink’s unfold, step by step. Each
 * step names something the résumé describes; none adds results or numbers.
 */
export const practice = [
  {
    title: 'Indicadores de SSMA para a liderança',
    summary:
      'Todo mês, os dados de segurança, meio ambiente e sustentabilidade das operações são consolidados em indicadores e apresentados à liderança e ao comitê responsável, com análise de dados para apoiar as decisões.',
    steps: [
      { label: 'Operações e filiais', detail: 'dados de SSMA' },
      { label: 'Consolidação mensal', detail: 'indicadores' },
      { label: 'Análise de dados', detail: 'relatórios' },
      { label: 'Liderança e comitê', detail: 'apoio à decisão' },
    ],
    tools: ['Indicadores de SSMA e sustentabilidade', 'Power BI'],
  },
  {
    title: 'Investigação de incidentes e acidentes',
    summary:
      'Apoio às investigações de incidentes e acidentes, com análise de dados e elaboração dos relatórios técnicos que registram cada ocorrência.',
    steps: [
      { label: 'Incidente ou acidente', detail: 'ocorrência' },
      { label: 'Investigação', detail: 'apoio ao SESMT' },
      { label: 'Análise de dados' },
      { label: 'Relatório técnico', detail: 'registro' },
    ],
    tools: ['Investigação', 'Análise de dados', 'Relatórios técnicos'],
  },
  {
    title: 'Documentação técnica e legal',
    summary:
      'Atualização de GHE, cargos, setores e riscos no SOC, emissão de PGR, CAT e PPP e gestão da documentação técnica e legal, com atenção aos requisitos legais e à qualidade das informações.',
    steps: [
      { label: 'GHE, cargos, setores e riscos', detail: 'levantamento' },
      { label: 'SOC', detail: 'atualização' },
      { label: 'PGR, CAT e PPP', detail: 'emissão' },
      { label: 'Documentação técnica e legal', detail: 'gestão' },
    ],
    tools: ['SOC', 'GHE', 'PGR', 'CAT', 'PPP'],
  },
  {
    title: 'Atividades de risco, projetos e obras',
    summary:
      'Acompanhamento das atividades de risco de prestadores de serviço e de projetos, expansões e reformas, unindo a vivência de campo em obras à gestão de segurança.',
    steps: [
      { label: 'Projetos, expansões e reformas', detail: 'planejamento' },
      { label: 'Prestadores de serviço', detail: 'mobilização' },
      { label: 'Atividades de risco', detail: 'acompanhamento em campo' },
    ],
    tools: ['Prestadores de serviço', 'Vistorias', 'Obras e reformas'],
  },
  {
    title: 'Procedimentos e treinamentos',
    summary:
      'Implementação e atualização de procedimentos de SESMT, segurança, meio ambiente e sustentabilidade, observando os requisitos legais, e desenvolvimento de materiais de treinamento para as equipes e filiais.',
    steps: [
      { label: 'Requisitos legais' },
      { label: 'Procedimentos', detail: 'implementação e atualização' },
      { label: 'Materiais de treinamento', detail: 'desenvolvimento' },
      { label: 'Equipes e filiais', detail: 'apoio' },
    ],
    tools: ['Procedimentos de SESMT', 'Treinamentos', 'Apoio às filiais'],
  },
] as const;

export const experience = [
  {
    role: 'Especialista de Segurança do Trabalho',
    company: 'Brink’s Segurança e Transporte de Valores Ltda.',
    companyShort: 'Brink’s',
    start: '2024-09',
    end: null,
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
    companyShort: 'Brink’s',
    start: '2023-01',
    end: '2024-09',
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
    companyShort: 'Brink’s',
    start: '2021-11',
    end: '2022-12',
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
    companyShort: 'Inside Engenharia',
    start: '2021-03',
    end: '2021-06',
    period: 'Mar. 2021 — jun. 2021',
    current: false,
    responsibilities: [
      'Mobilização de equipes e controle de planilhas de planejamento, cronogramas e solicitações de obras.',
    ],
  },
  {
    role: 'Estagiária de Construção Civil',
    company: 'Alves Lacerda Engenharia e Construtora Ltda.',
    companyShort: 'Alves Lacerda Engenharia',
    start: '2020-09',
    end: '2021-03',
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
