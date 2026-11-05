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
  /** One paragraph for the résumé, from the facts below. */
  summary:
    'Engenheira civil e engenheira de segurança do trabalho. Na Brink’s desde 2021, do estágio à posição de especialista, com atuação em SSMA: procedimentos, indicadores para a liderança, investigação de incidentes, documentação técnica e legal (SOC, GHE, PGR, CAT e PPP) e acompanhamento de prestadores de serviço, projetos e obras. MBA em ESG e Negócios Sustentáveis em andamento na USP/Esalq.',
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
      'Prevenção no dia a dia das operações: apoio ao SESMT, prestadores de serviço acompanhados nas atividades de risco, incidentes e acidentes investigados e materiais de treinamento para as equipes.',
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
      'Procedimentos de segurança, meio ambiente e sustentabilidade implementados e atualizados conforme os requisitos legais, e a documentação técnica em dia: GHE, cargos, setores e riscos no SOC, PGR, CAT e PPP.',
    tools: ['SOC', 'GHE', 'PGR', 'CAT', 'PPP', 'LTCAT', 'PCMSO'],
    where: ['Brink’s'],
  },
  {
    title: 'Indicadores e melhoria contínua',
    summary:
      'Indicadores de SSMA e sustentabilidade consolidados todo mês para a liderança e o comitê responsável, com análise de dados e relatórios técnicos que apoiam as decisões.',
    tools: ['Indicadores de SSMA', 'Power BI', 'Lean'],
    where: ['Brink’s'],
  },
  {
    title: 'Engenharia civil e campo',
    summary:
      'Leitura de obra que vem da construção civil: mobilização de equipes e recursos, medições, vistorias, cronogramas e o acompanhamento de projetos, expansões e reformas.',
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
 * The day-to-day fronts at Brink’s as small experiences: the situation, her
 * part in it, how she works and what it brings. Every statement rests on a
 * sentence of the résumé; there are no results, numbers or clients.
 */
export const practice = [
  {
    title: 'Indicadores de SSMA e sustentabilidade',
    since: 'Desde o estágio, em 2021',
    context:
      'A liderança e o comitê responsável acompanham todo mês os resultados de segurança, meio ambiente e sustentabilidade das operações, e precisam deles consolidados e analisados.',
    role: 'Compilação dos indicadores de sustentabilidade ainda no estágio, suporte à consolidação como assistente e, hoje, a consolidação mensal dos indicadores de SSMA e sustentabilidade para a liderança e o comitê.',
    approach:
      'Análise de dados e relatórios técnicos, com Power BI e a visão de melhoria contínua do Lean.',
    contribution:
      'Um retrato mensal das operações, em dados consolidados e analisados, que apoia as decisões da liderança.',
    tools: ['Indicadores de SSMA e sustentabilidade', 'Power BI', 'Lean'],
    steps: [
      { label: 'Operações e filiais', detail: 'dados de SSMA' },
      { label: 'Consolidação mensal', detail: 'indicadores' },
      { label: 'Análise de dados', detail: 'relatórios' },
      { label: 'Liderança e comitê', detail: 'apoio à decisão' },
    ],
  },
  {
    title: 'Investigação de incidentes e acidentes',
    since: 'Desde o estágio, em 2021',
    context:
      'Cada incidente ou acidente precisa ser investigado e registrado, com os dados analisados e um relatório técnico que documente o ocorrido.',
    role: 'Apoio às investigações desde o estágio e, como especialista, a análise dos dados e a elaboração dos relatórios técnicos.',
    approach:
      'Investigação junto ao SESMT, análise de dados e um relatório técnico para cada ocorrência.',
    contribution:
      'Ocorrências documentadas com método, que servem de base para a prevenção.',
    tools: ['Investigação', 'Análise de dados', 'Relatórios técnicos'],
    steps: [
      { label: 'Incidente ou acidente', detail: 'ocorrência' },
      { label: 'Investigação', detail: 'apoio ao SESMT' },
      { label: 'Análise de dados' },
      { label: 'Relatório técnico', detail: 'registro' },
    ],
  },
  {
    title: 'Documentação técnica e legal',
    since: 'Desde o estágio, em 2021',
    context:
      'A documentação de segurança do trabalho precisa refletir cargos, setores e riscos atualizados e atender aos requisitos legais, filial por filial.',
    role: 'Atualização de registros no SOC no estágio, auxílio às filiais no sistema como assistente e, hoje, atualização de GHE, cargos, setores e riscos, emissão de PGR, CAT e PPP e gestão da documentação técnica e legal.',
    approach:
      'O SOC como sistema de registro; GHE, PGR, CAT, PPP, LTCAT e PCMSO; atenção aos requisitos legais e à qualidade das informações.',
    contribution:
      'Documentação organizada e em dia, que sustenta a conformidade legal da operação.',
    tools: ['SOC', 'GHE', 'PGR', 'CAT', 'PPP', 'LTCAT', 'PCMSO'],
    steps: [
      { label: 'GHE, cargos, setores e riscos', detail: 'levantamento' },
      { label: 'SOC', detail: 'atualização' },
      { label: 'PGR, CAT e PPP', detail: 'emissão' },
      { label: 'Documentação técnica e legal', detail: 'gestão' },
    ],
  },
  {
    title: 'Atividades de risco, projetos e obras',
    since: 'Desde a construção civil, em 2020',
    context:
      'Prestadores de serviço executam atividades de risco, e projetos, expansões e reformas mudam instalações que seguem em operação.',
    role: 'Acompanhamento das atividades de risco e dos prestadores de serviço desde o estágio e, como especialista, também de projetos, expansões e reformas. Antes, vivência de campo em obras: mobilização de equipes e recursos, medições, vistorias e cronogramas.',
    approach:
      'A leitura de obra da engenharia civil aplicada à segurança: acompanhamento em campo, vistorias e planejamento.',
    contribution:
      'Planejamento conectado à realidade da operação, com as atividades de risco acompanhadas de perto.',
    tools: [
      'Prestadores de serviço',
      'Vistorias',
      'Obras e reformas',
      'AutoCAD',
    ],
    steps: [
      { label: 'Projetos, expansões e reformas', detail: 'planejamento' },
      { label: 'Prestadores de serviço', detail: 'mobilização' },
      { label: 'Atividades de risco', detail: 'acompanhamento em campo' },
    ],
  },
  {
    title: 'Procedimentos, conformidade e treinamentos',
    since: 'Desde o estágio, em 2021',
    context:
      'Procedimentos de SESMT, segurança, meio ambiente e sustentabilidade precisam ser implementados e atualizados conforme os requisitos legais, e as equipes e filiais precisam conhecê-los.',
    role: 'Materiais de treinamento desde o estágio, atualização de procedimentos como assistente e, hoje, a implementação e a atualização dos procedimentos.',
    approach:
      'Requisitos legais traduzidos em procedimentos e em materiais de treinamento para as equipes e filiais.',
    contribution:
      'Procedimentos em dia e equipes apoiadas com materiais que levam a prevenção para o dia a dia.',
    tools: ['Procedimentos de SESMT', 'Treinamentos', 'Apoio às filiais'],
    steps: [
      { label: 'Requisitos legais' },
      { label: 'Procedimentos', detail: 'implementação e atualização' },
      { label: 'Materiais de treinamento', detail: 'desenvolvimento' },
      { label: 'Equipes e filiais', detail: 'apoio' },
    ],
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
    summary:
      'Procedimentos, indicadores mensais para a liderança, investigações e a documentação técnica e legal passam a ser responsabilidades diretas, somadas ao acompanhamento de projetos, expansões e reformas e aos materiais de treinamento.',
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
    summary:
      'O suporte ao SESMT se amplia: consolidação de indicadores, controle da documentação legal, atualização de procedimentos e auxílio às filiais no SOC.',
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
    summary:
      'Primeiro contato com o SESMT: apoio em indicadores, investigações, relatórios e registros no SOC, com acompanhamento de atividades de risco e treinamentos.',
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
    summary:
      'Planejamento de obras: mobilização de equipes, planilhas, cronogramas e solicitações.',
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
    summary:
      'Vivência de campo: mobilização de recursos, medições, vistorias, controle de atividades e organização documental.',
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
