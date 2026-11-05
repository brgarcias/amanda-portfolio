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

Antes de considerar uma mudança pronta, rode `pnpm check`, `pnpm build` e `pnpm test:e2e`, e confirme que tudo passa. O job `quality` do GitHub Actions, em `.github/workflows/ci.yml`, roda os mesmos comandos em cada PR para `main`.

## Estrutura

- `src/pages/index.tsx` monta a página, define título, descrição, Open Graph e os dados estruturados `Person` em JSON-LD. O `getStaticProps` lê os depoimentos publicados, informa o mês atual (que define a duração da função atual) e revalida a cada minuto. O painel também pede uma revalidação a cada mudança. A página chama `useReveal`, de `src/lib/use-reveal.ts`, que revela os blocos marcados com `data-reveal` conforme entram na tela.
- `src/pages/_document.tsx` define `lang="pt-BR"`, a cor de tema e os ícones: `favicon.svg`, `favicon.ico` com 16, 32 e 48 px e `apple-touch-icon.png` com 180 px. Ícones ficam em SVG, ICO ou PNG, os formatos que navegadores e sistemas aceitam. O favicon reproduz o selo do logo. `src/pages/_app.tsx` carrega as fontes e o CSS global.
- `src/pages/404.tsx` e `src/pages/500.tsx` são as páginas de erro, marcadas com `noindex`, sobre a mesma prancha de desenho da primeira tela.
- `src/pages/avaliar.tsx` é a página de avaliação, marcada com `noindex`. A Amanda envia o link para clientes, e a página também é acessível pelo botão da seção de avaliações.
- `src/pages/painel.tsx` é o painel de avaliações, protegido por usuário e senha e marcado com `noindex`. As rotas de login, saída e ações ficam em `src/pages/api/panel/`.
- `src/components/` tem um componente por seção. `SectionHeading` é o cabeçalho compartilhado das seções numeradas (índice, régua e rótulo em monoespaçada, título e descrição ao lado), `Brand` é a marca usada nos cabeçalhos, `SocialLinks` são os canais de contato em ícones, usados no topo e no rodapé, `Flow` desenha um processo em etapas (lista ordenada com setas) para a seção "Na prática", `ReviewForm` é o formulário de avaliação, e `PanelLogin` e `ReviewPanel` formam o painel.
- `src/lib/reviews.ts` guarda e lê as avaliações no Netlify Blobs. `src/lib/panel-auth.ts` cuida do login, da sessão e do limite de tentativas. `src/lib/dates.ts` formata meses e calcula a duração de cada função, e `src/lib/use-reveal.ts` é o hook que revela os blocos ao rolar.
- `netlify/functions/review-submitted.ts` recebe cada envio do formulário que passa pelo filtro de spam do Netlify e o guarda como avaliação pendente.
- `src/data/profile.ts` concentra os dados da profissional: contatos, navegação, as disciplinas anotadas em volta do retrato, a ficha técnica da seção "Sobre", as áreas de atuação (com ferramentas e onde foram exercidas), as frentes de trabalho da seção "Na prática" (cada etapa cita algo descrito no currículo), experiências (com `start`, `end` e `companyShort`), formação e cursos.
- `src/styles/globals.css` é a única folha de estilos. Os tokens ficam em `:root`: cores (papel quente como fundo, ferrugem do logo como destaque, verde-musgo para o que é sustentabilidade, semânticas `--moss` e `--danger`), fontes, escala tipográfica, largura do contêiner, respiro das seções e curvas de movimento.
- `next.config.mjs` desliga o `agentRules`, para que o `next dev` não acrescente instruções próprias a este arquivo, e define os redirecionamentos permanentes e os cabeçalhos de segurança, incluindo a Content Security Policy, a `Permissions-Policy` e o `X-Robots-Tag` do painel e das rotas de API. A CSP só aceita recursos do próprio site. Não carregue scripts, estilos, fontes ou imagens de outros domínios. Se isso for inevitável, ajuste a política e explique o motivo no PR.
- `tests/portfolio.spec.ts` contém todos os testes de navegador. `tests/blobs-server.mjs` sobe um Netlify Blobs local, numa pasta temporária, e `tests/panel-environment.ts` tem as credenciais usadas só nos testes.
- `public/` guarda logo, foto da profissional, imagem de compartilhamento, favicon, `robots.txt`, `sitemap.xml`, o currículo em PDF, o arquivo de verificação do Google, `__forms.html`, que declara o formulário de avaliação para o Netlify Forms, e `.well-known/security.txt`, os canais de relato de vulnerabilidades no formato da RFC 9116.
- `scripts/share-image.mjs` gera `public/images/og-image.jpg` a partir de `scripts/share-image.html`, com as fontes do projeto, o retrato e os dados de `src/data/profile.ts`. Rode `node scripts/share-image.mjs` depois de mudar nome, cargo ou foto, e confira a imagem antes de versionar. Não edite o JPEG à mão.

O projeto usa o Pages Router. Não migre para o App Router sem pedido explícito.

## Conteúdo

- A fonte do conteúdo é `src/data/profile.ts`, transcrito do currículo que a Amanda forneceu e atualizado com o que ela confirmou depois, como o cargo de especialista (PR #32). O PDF em `public/documents/` é gerado desses dados por `node scripts/resume.mjs` e nunca é editado à mão. Nunca invente projetos, clientes, métricas, depoimentos, certificações ou datas. Se faltar uma informação, pergunte.
- Os dados da profissional ficam em `src/data/profile.ts`. Títulos e textos próprios de cada seção ficam no componente da seção.
- O número de telefone fica só em `phoneNumber`, em `src/data/profile.ts`, e gera o link de ligação, o link do WhatsApp e o telefone dos dados estruturados. O formato exibido na página fica em `profile.phone`.
- O nome do currículo segue o padrão nome e cargo, sem acentos nem espaços: `Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf`, definido em `profile.resume`. Os testes verificam o nome do download e o conteúdo PDF. Se o cargo principal mudar, renomeie o arquivo e acrescente o nome anterior à lista de redirecionamentos do currículo em `next.config.mjs`. O título do PDF, exibido na aba do navegador, vem do gerador e segue o padrão "Amanda Assumpção — Engenheira de Segurança do Trabalho".
- `scripts/resume.mjs` monta o currículo a partir de `profile`, `experience`, `education`, `courses` e `expertise`, com o modelo `scripts/resume.html`: uma coluna de texto real, que os sistemas de recrutamento leem, com as fontes do site. Depois de qualquer mudança nesses dados, rode `node scripts/resume.mjs` e versione o PDF novo. `RESUME_PREVIEW=caminho.png` também grava uma imagem da página para conferir o layout.
- Cada experiência tem um `summary`, uma frase sobre o que mudou naquele cargo, mostrada no cartão antes da lista de atividades. As frentes de "Na prática" têm `context`, `role`, `approach` e `contribution`, além das etapas: cada frase apoia-se numa frase do currículo, sem resultados, números nem clientes.
- Os contatos abrem WhatsApp, LinkedIn, e-mail ou telefone.
- O formulário de avaliação fica em `/avaliar` e envia os dados ao Netlify Forms com um `POST` para `public/__forms.html`, o arquivo estático que o Netlify lê no deploy. O Netlify só aceita campos declarados nesse arquivo, então qualquer campo novo ou renomeado em `ReviewForm` precisa ser atualizado lá também. Um teste confere isso. Além dele, só existe o login do painel. Não adicione outros formulários, servidores de envio nem simulações de envio.
- Os depoimentos ficam no Netlify Blobs, na store `reviews`. Cada envio verificado entra como pendente, e a Amanda decide em `/painel` quais aparecem no portfólio. Só avaliações com a autorização de publicação marcada podem ser publicadas. O texto nunca é editado, e o e-mail de quem avaliou nunca aparece fora do painel. Não acrescente depoimentos pelo código.
- A seção "Avaliações" aparece sempre, com o convite para avaliar. Os cartões de depoimento só aparecem quando há pelo menos um publicado, e o título da seção muda com eles. O build não lê o Blobs, então um deploy novo começa sem depoimentos e os mostra a partir da primeira revalidação.
- Todo texto visível é em português do Brasil, incluindo `aria-label`, `alt` e títulos de testes.
- O endereço oficial é <https://arra-portfolio.netlify.app>, definido em `site.url` de `src/data/profile.ts`. Ele alimenta a URL canônica, o Open Graph e os dados estruturados, e também está escrito em `public/robots.txt` e `public/sitemap.xml`. Ao trocar o domínio, atualize os três arquivos.
- O site é verificado no Google Search Console como propriedade de prefixo do URL, por dois métodos: a meta tag `google-site-verification`, com o código em `site.googleSiteVerification`, e o arquivo `public/google7cb04b6b30f7ad2f.html`, copiado sem alterações do Search Console. Não remova nenhum dos dois.

## Código

- TypeScript estrito, com `noUnusedLocals` e `noUnusedParameters`. Importe de `src` pelo alias `@/`.
- Componentes usam exportação nomeada, como `export function Header()`. Exportação padrão só nas páginas.
- Dados estáticos são declarados com `as const`.
- Prettier com aspas simples e vírgula final. Indentação de dois espaços e quebras de linha LF.
- Nomes de código, classes CSS e identificadores ficam em inglês. Classes CSS usam kebab-case, e estados usam o prefixo `is-`, como `is-open` e `is-current`.
- Estilos ficam em CSS puro, em `src/styles/globals.css`. Use os tokens definidos em `:root` e não adicione frameworks de CSS nem CSS-in-JS.
- Tamanhos de fonte usam `rem`. Para textos de até 16 px, use os tokens `--text-*` do `:root`.
- Cores vêm só dos tokens do `:root`, sem valores fixos nas regras. Para transparência, use `color-mix()` com um token.
- Rótulos em maiúsculas são escritos normalmente no JSX e recebem `text-transform: uppercase` no CSS, para que leitores de tela não soletrem as palavras como siglas.
- Ícones vêm do `lucide-react`. Ícones decorativos recebem `aria-hidden="true"`. A exceção é o ícone do LinkedIn, um SVG embutido em `SocialLinks`, porque o Lucide não distribui marcas.
- Imagens ficam em WebP dentro de `public/` e são exibidas com `next/image`. A exceção é a imagem de compartilhamento, `public/images/og-image.jpg`, que fica em JPEG com 1200 × 630 px, porque nem todas as plataformas aceitam WebP. Remova metadados, como localização, de qualquer foto antes de publicá-la.
- Fontes são servidas pelo próprio projeto via Fontsource. Não use CDNs de fontes, estilos ou scripts. São três famílias, cada uma com um papel: Fraunces (`--font-display`) para títulos e frases curtas, DM Sans (`--font-body`) para leitura e interface, e DM Mono (`--font-mono`) para as anotações técnicas: índices, datas, ferramentas, legendas e rótulos em maiúsculas. Não troque os papéis nem acrescente outra família. Cada pilha nomeia um substituto ajustado por métricas (`Fraunces Fallback`, `DM Sans Fallback`, `DM Mono Fallback`), declarado em `globals.css` com `size-adjust`, `ascent-override` e `descent-override`, para que a troca de fonte não mova o layout. Os valores vieram de medir as duas fontes no Chromium (largura média dos glifos, ascendente e descendente, com os `override` divididos pelo `size-adjust`); ao trocar uma fonte, meça de novo.
- O projeto tem poucas dependências de produção. Evite adicionar novas e justifique no PR quando for necessário.
- Não edite `next-env.d.ts`, que é gerado pelo Next.js. Não versione `.next/`, `test-results/`, `playwright-report/` nem `tsconfig.tsbuildinfo`.

## Identidade visual e movimento

- A identidade é a de uma prancha técnica editorial: fundo de papel, linhas finas no lugar de cartões, anotações em monoespaçada, uma grade de desenho sutil atrás da primeira tela e o retrato como figura numerada, com marcas de registro e chamadas ligando as quatro disciplinas a pontos da foto. Novas seções seguem o mesmo vocabulário: cabeçalho numerado, réguas, pouca cor e nenhum cartão arredondado.
- Cada seção tem uma composição própria: "Sobre" com narrativa e ficha técnica, "Atuação" como um livro-razão de linhas, "Na prática" com diagramas de etapas, "Trajetória" com trilho e nós, "Formação" com a formação ao lado dos cursos. Não repita o mesmo cartão em todas as seções.
- O movimento tem três fontes, todas em CSS: a entrada da primeira tela, os blocos com `data-reveal`, que o hook `useReveal` revela ao entrar na tela, e o trilho da trajetória, que se desenha com a rolagem onde o navegador aceita `animation-timeline`. Sem JavaScript, ou com `prefers-reduced-motion`, tudo aparece de imediato. Não acrescente bibliotecas de animação.
- O menu marca com `aria-current="location"` a seção que cruza o meio da tela, e o cabeçalho ganha a classe `is-scrolled` depois da primeira rolagem.
- Em `@media print`, a página vira um documento: sem menu, sem grade, sem chamadas nem animações, com todos os blocos visíveis e as seções escuras em tinta sobre branco. Ao criar um elemento decorativo, esconda-o ali também.

## Painel de avaliações

- O usuário, a senha e o segredo que assina a sessão ficam só nas variáveis de ambiente do Netlify: `PANEL_USERNAME`, `PANEL_PASSWORD` e `PANEL_SESSION_SECRET`. O repositório é público. Nunca escreva os valores reais no código, nos testes, em PRs ou em logs. O plano atual do Netlify não aceita variáveis secretas nem escopo restrito, então elas valem para todos os escopos e contextos. O `netlify env:set` falha sem mensagem quando pede um escopo; use `netlify api createEnvVars` sem `scopes`.
- Trocar a senha nas variáveis de ambiente encerra todas as sessões abertas, depois do próximo deploy.
- Cada cliente tem 5 tentativas de login por usuário a cada 15 minutos, e o site inteiro tem 100 por hora. Não afrouxe esses limites, porque protegem uma senha curta.
- As ações do painel exigem a sessão e um pedido JSON vindo do próprio site. O cookie é `HttpOnly` e `SameSite=Strict`.
- O build e o `next dev` não acessam o Blobs. Nos testes, o Playwright sobe o Blobs local e passa credenciais próprias ao servidor.

## Seções e âncoras

- As seções usam ids em português: `sobre`, `atuacao`, `pratica`, `experiencia`, `formacao`, `avaliacoes` e `contato`. A primeira tela usa `apresentacao`, o topo usa `inicio` e o conteúdo principal usa `conteudo`, alvo do link de pular conteúdo.
- Os ids são usados pela navegação em `src/data/profile.ts`, pelos redirecionamentos em `next.config.mjs` e pelos testes. Ao mudar um id, atualize os três.
- As seções são numeradas a partir de 01, e cada uma recebe o número pela prop `number`. Na prática é a 03, avaliações é a 06 e o contato é a 07. Ao incluir ou reordenar seções, renumere todas.

## Acessibilidade e layout

Os testes de navegador são o contrato de qualidade do site. Eles exigem:

- Nenhuma violação do axe nas regras WCAG 2.2 nível AA.
- Nenhuma rolagem horizontal, inclusive em telas de 320 px.
- Rolagem suave desativada quando o usuário prefere movimento reduzido.
- Nenhum texto visível com menos de 12 px, em qualquer largura de tela, na página inicial, em `/avaliar` e em `/painel`.
- Formulário de avaliação com campos rotulados, envio real ao Netlify Forms e mensagens de sucesso e de erro.
- Painel que só abre com login, recusa pedidos de outros sites, bloqueia tentativas repetidas e publica, retira e exclui avaliações com efeito imediato na página inicial.
- Menu móvel com `aria-expanded`, que fecha com Escape e devolve o foco ao botão. Ele aparece até 1040 px, porque seis links, a marca e dois botões não cabem numa linha abaixo disso.
- Menu que marca a seção atual, e blocos com `data-reveal` que ficam visíveis depois da rolagem e, com movimento reduzido, desde o início.
- Todas as experiências em `<details>` abertos por padrão, que continuam podendo ser recolhidos pelo clique ou pelo teclado.
- Nenhum erro de JavaScript no carregamento da página.
- Nenhuma violação da Content Security Policy.

Os testes também procuram textos visíveis, como o título principal, o título da seção de formação e trechos das experiências. Se mudar esses textos, atualize os testes na mesma mudança. Nunca enfraqueça ou remova um teste para fazê-lo passar.

## Git, pull requests e publicação

- `main` é a única branch permanente e a branch de produção do site `arra-portfolio` no Netlify. Cada merge em `main` publica o site em <https://arra-portfolio.netlify.app>. Não crie `develop` nem outra branch permanente.
- Crie uma branch de trabalho a partir de `main` atualizada, com prefixo como `feat/`, `fix/`, `docs/` ou `chore/`.
- Mensagens de commit seguem Conventional Commits, em inglês, como `feat: add courses section`.
- Os commits precisam de assinatura verificada pelo GitHub. O hook de pre-commit roda o Prettier nos arquivos preparados. Nunca use `--no-verify` nem desative a assinatura.
- Abra o PR com destino a `main`. O título segue Conventional Commits, e título e descrição ficam em português.
- O Netlify gera um Deploy Preview para cada PR, em `https://deploy-preview-<número>--arra-portfolio.netlify.app`. A `main` exige quatro checks do Netlify: `Header rules - arra-portfolio`, `Pages changed - arra-portfolio`, `Redirect rules - arra-portfolio` e `netlify/arra-portfolio/deploy-preview`.
- O job `quality` do GitHub Actions também roda em cada PR. Só faça o merge com ele aprovado.
- A `main` exige histórico linear e PR atualizado em relação a ela. Faça merge só com **Squash and merge**, depois que os checks passarem.
- Nunca faça push direto ou force push em `main` e nunca altere as proteções da branch.
- Não publique pelo Netlify CLI. A produção só muda por merge em `main`.
- A configuração do Netlify fica no painel do site. Não há `netlify.toml` no repositório.
- `SECURITY.md` é a política de segurança: escopo, canais privados de relato (o relato privado do GitHub e o e-mail do mantenedor), prazos e medidas em vigor. `public/.well-known/security.txt` repete os canais e aponta para ela; os dois precisam continuar iguais. A data em `Expires` vale um ano, e um teste falha quando ela passa, então renove os dois juntos. Ao mudar uma medida de segurança do site, atualize a lista de medidas em `SECURITY.md`.
