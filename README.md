# Amanda Assumpção — portfólio

Portfólio profissional em português para Amanda Ribeiro Roque de Assumpção, engenheira de segurança do trabalho e engenheira civil. O conteúdo foi adaptado do currículo fornecido, sem projetos, métricas ou depoimentos fictícios.

## Executar localmente

Pré-requisitos: nvm e Corepack ou pnpm 11.

```sh
nvm install
nvm use
corepack enable
corepack prepare pnpm@11.3.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Abra <http://localhost:3000>. O projeto usa Node.js 24 LTS, Next.js 16, React 19, TypeScript estrito e CSS responsivo. O pnpm é o gerenciador oficial; mantenha somente `pnpm-lock.yaml` atualizado. O npm que acompanha o Node é suficiente para instalar o pnpm, se Corepack não estiver disponível: `npm install --global pnpm@11.3.0`.

## Verificar e compilar

```sh
pnpm check
pnpm build
pnpm start
```

Os comandos de lint, tipos e formatação também podem ser executados individualmente: `pnpm lint`, `pnpm typecheck` e `pnpm format`. Para aplicar a formatação: `pnpm format:fix`.

Os testes de navegador verificam desktop e celular, navegação por teclado, expansão das experiências, download do PDF, contatos, redirecionamentos, página 404, movimento reduzido, ausência de rolagem horizontal e acessibilidade WCAG AA com axe.

```sh
pnpm exec playwright install chromium
pnpm build
pnpm test:e2e
```

Para usar um Chromium já instalado, defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` com o caminho completo do executável. Capturas de tela e rastros de falhas ficam em `test-results/`, ignorado pelo Git.

## Atualizar conteúdo

- `src/data/profile.ts`: nome, contatos, currículo, competências, cargos, formações e cursos.
- `src/components/`: seções independentes da página e navegação responsiva.
- `src/styles/globals.css`: cores, tipografia, espaçamento e regras de responsividade.
- `src/pages/index.tsx`: composição, metadados e dados estruturados da profissional.
- `public/documents/curriculo-amanda-assumpcao.pdf`: currículo original para download.

Os cargos e o MBA refletem o documento fornecido. Atualize `experience` e `education` quando houver mudanças. Os links de contato abrem WhatsApp, aplicativo de e-mail ou telefone; não dependem de servidor de formulários nem simulam o envio de mensagens.

## Publicação

Execute como uma aplicação Next.js em uma hospedagem compatível com Node 24. O comando de build é `pnpm build` e o de produção é `pnpm start`. O projeto está preparado localmente; nenhum deploy é feito pelos scripts. Depois de definir o domínio, adicione URLs absolutas de compartilhamento, a URL canônica e um sitemap para esse domínio.

As antigas rotas do template redirecionam permanentemente para as seções correspondentes. Fontes e imagens são servidas pelo próprio projeto; a página não depende de CDNs de estilos ou fontes.

## Créditos

Identidade visual fornecida pelo projeto original. Fontes: Manrope e DM Sans, distribuídas pelo Fontsource. Ícones: Lucide. Fotografia ilustrativa de arquitetura: [Unsplash](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab), sem associação a trabalhos ou clientes da profissional.
