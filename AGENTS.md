# AGENTS.md

Instruções para agentes de código que trabalham neste repositório. O projeto é o portfólio profissional de Amanda Assumpção, engenheira de segurança do trabalho e engenheira civil. É um site de página única, em português, feito com Next.js 16, React 19 e TypeScript estrito, publicado no Netlify.

## Ambiente

- Use Node.js 24.22.1, a versão do `.nvmrc`. Rode `nvm use` antes de qualquer comando e confira com `node --version`, porque o shell pode abrir em outra versão. Se cada comando abrir um shell novo, ative o Node no mesmo comando, como em `nvm use >/dev/null && pnpm check`. O `.npmrc` tem `engine-strict=true`, então outra versão do Node faz a instalação falhar.
- Use somente pnpm 11.3.0, via Corepack. Não use npm nem yarn para instalar dependências e não crie outros lockfiles. O único lockfile é o `pnpm-lock.yaml`.
- Instale com `pnpm install --frozen-lockfile`.
- O `pnpm-workspace.yaml` libera scripts de instalação apenas para `sharp` e `unrs-resolver` e lista exceções à idade mínima de publicação de pacotes. Ele também aceita ESLint 10 nos plugins que ainda declaram suporte só até a versão 9. Mantenha essas regras ao mexer em dependências.

## Comandos

| Comando           | O que faz                                                         |
| ----------------- | ----------------------------------------------------------------- |
| `pnpm dev`        | Servidor de desenvolvimento em <http://localhost:3000>.           |
| `pnpm check`      | ESLint sem avisos, verificação de tipos e checagem do Prettier.   |
| `pnpm format:fix` | Aplica a formatação do Prettier.                                  |
| `pnpm build`      | Build de produção.                                                |
| `pnpm test:e2e`   | Testes Playwright em desktop e celular sobre o build de produção. |

`pnpm test:e2e` sobe o servidor com `pnpm start` na porta 4173, então rode `pnpm build` antes. Para instalar o navegador, use `pnpm exec playwright install chromium`. Para usar um Chromium já instalado, defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

Antes de considerar uma mudança pronta, rode `pnpm check`, `pnpm build` e `pnpm test:e2e`, e confirme que tudo passa.

## Estrutura

- `src/pages/index.tsx` monta a página, define título, descrição, Open Graph e os dados estruturados `Person` em JSON-LD. O `getStaticProps` revalida uma vez por dia para atualizar o ano do rodapé.
- `src/pages/_document.tsx` define `lang="pt-BR"`, a cor de tema e o favicon. `src/pages/_app.tsx` carrega as fontes e o CSS global.
- `src/pages/404.tsx` é a página de erro, marcada com `noindex`.
- `src/components/` tem um componente por seção. `SectionHeading` é o cabeçalho compartilhado das seções numeradas.
- `src/data/profile.ts` concentra os dados da profissional: contatos, navegação, áreas de atuação, experiências, formação e cursos.
- `src/styles/globals.css` é a única folha de estilos.
- `next.config.mjs` define os redirecionamentos permanentes das rotas antigas do template e os cabeçalhos de segurança.
- `tests/portfolio.spec.ts` contém todos os testes de navegador.
- `public/` guarda logo, imagem, favicon, `robots.txt` e o currículo em PDF.

O projeto usa o Pages Router. Não migre para o App Router sem pedido explícito.

## Conteúdo

- A fonte do conteúdo é o currículo em `public/documents/curriculo-amanda-assumpcao.pdf`. Nunca invente projetos, clientes, métricas, depoimentos, certificações ou datas. Se faltar uma informação, pergunte.
- Os dados da profissional ficam em `src/data/profile.ts`. Títulos e textos próprios de cada seção ficam no componente da seção.
- O telefone também aparece nos dados estruturados de `src/pages/index.tsx`. Ao mudar contatos, atualize os dois arquivos.
- Ao trocar o currículo, mantenha o mesmo nome de arquivo. Os testes verificam o nome do download e o conteúdo PDF.
- Os contatos abrem WhatsApp, e-mail ou telefone. Não adicione formulários, servidores de envio nem simulações de envio.
- Todo texto visível é em português do Brasil, incluindo `aria-label`, `alt` e títulos de testes.
- Ainda não há domínio próprio. Não adicione URL canônica, sitemap nem URLs absolutas de compartilhamento até que o domínio seja definido.

## Código

- TypeScript estrito, com `noUnusedLocals` e `noUnusedParameters`. Importe de `src` pelo alias `@/`.
- Componentes usam exportação nomeada, como `export function Header()`. Exportação padrão só nas páginas.
- Dados estáticos são declarados com `as const`.
- Prettier com aspas simples e vírgula final. Indentação de dois espaços e quebras de linha LF.
- Nomes de código, classes CSS e identificadores ficam em inglês. Classes CSS usam kebab-case, e estados usam o prefixo `is-`, como `is-open` e `is-current`.
- Estilos ficam em CSS puro, em `src/styles/globals.css`. Use os tokens definidos em `:root` e não adicione frameworks de CSS nem CSS-in-JS.
- Ícones vêm do `lucide-react`. Ícones decorativos recebem `aria-hidden="true"`.
- Imagens ficam em WebP dentro de `public/` e são exibidas com `next/image`.
- Fontes são servidas pelo próprio projeto via Fontsource. Não use CDNs de fontes, estilos ou scripts.
- O projeto tem poucas dependências de produção. Evite adicionar novas e justifique no PR quando for necessário.
- Não edite `next-env.d.ts`, que é gerado pelo Next.js. Não versione `.next/`, `test-results/`, `playwright-report/` nem `tsconfig.tsbuildinfo`.

## Seções e âncoras

- As seções usam ids em português: `sobre`, `atuacao`, `experiencia`, `formacao` e `contato`. O topo usa `inicio` e o conteúdo principal usa `conteudo`, alvo do link de pular conteúdo.
- Os ids são usados pela navegação em `src/data/profile.ts`, pelos redirecionamentos em `next.config.mjs` e pelos testes. Ao mudar um id, atualize os três.
- As seções são numeradas de 01 a 05. As quatro primeiras recebem o número pela prop `number` do `SectionHeading`, e a de contato tem o número escrito no próprio componente. Ao incluir ou reordenar seções, renumere todas.

## Acessibilidade e layout

Os testes de navegador são o contrato de qualidade do site. Eles exigem:

- Nenhuma violação do axe nas regras WCAG 2.2 nível AA.
- Nenhuma rolagem horizontal, inclusive em telas de 320 px.
- Rolagem suave desativada quando o usuário prefere movimento reduzido.
- Menu móvel com `aria-expanded`, que fecha com Escape e devolve o foco ao botão.
- Experiências anteriores recolhidas em `<details>`, com a atual aberta.
- Nenhum erro de JavaScript no carregamento da página.

Os testes também procuram textos visíveis, como o título principal, o título da seção de formação e trechos das experiências. Se mudar esses textos, atualize os testes na mesma mudança. Nunca enfraqueça ou remova um teste para fazê-lo passar.

## Git, pull requests e publicação

- `main` é a única branch permanente e a branch de produção do site `arra-portfolio` no Netlify. Cada merge em `main` publica o site em <https://arra-portfolio.netlify.app>. Não crie `develop` nem outra branch permanente.
- Crie uma branch de trabalho a partir de `main` atualizada, com prefixo como `feat/`, `fix/`, `docs/` ou `chore/`.
- Mensagens de commit seguem Conventional Commits, em inglês, como `feat: add courses section`.
- Os commits precisam de assinatura verificada pelo GitHub. O hook de pre-commit roda o Prettier nos arquivos preparados. Nunca use `--no-verify` nem desative a assinatura.
- Abra o PR com destino a `main`. O título segue Conventional Commits, e título e descrição ficam em português.
- O Netlify gera um Deploy Preview para cada PR, em `https://deploy-preview-<número>--arra-portfolio.netlify.app`. A `main` exige quatro checks do Netlify: `Header rules - arra-portfolio`, `Pages changed - arra-portfolio`, `Redirect rules - arra-portfolio` e `netlify/arra-portfolio/deploy-preview`.
- A `main` exige histórico linear e PR atualizado em relação a ela. Faça merge só com **Squash and merge**, depois que os checks passarem.
- Nunca faça push direto ou force push em `main` e nunca altere as proteções da branch.
- A configuração do Netlify fica no painel do site. Não há `netlify.toml` no repositório.
