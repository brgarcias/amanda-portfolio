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

Os testes de navegador verificam desktop e celular, navegação por teclado, expansão das experiências, download do PDF, contatos, redirecionamentos, página 404, movimento reduzido, ausência de rolagem horizontal, tamanho mínimo de 12 px para textos e acessibilidade WCAG AA com axe.

```sh
pnpm exec playwright install chromium
pnpm build
pnpm test:e2e
```

Para usar um Chromium já instalado, defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` com o caminho completo do executável. Capturas de tela e rastros de falhas ficam em `test-results/`, ignorado pelo Git.

O GitHub Actions roda `pnpm check`, `pnpm build` e `pnpm test:e2e` em cada pull request para `main`, no job `quality` de `.github/workflows/ci.yml`. Quando os testes falham, a pasta `test-results/` fica disponível como artefato da execução por sete dias.

## Atualizar conteúdo

- `src/data/profile.ts`: nome, contatos, currículo, competências, cargos, formações e cursos.
- `src/components/`: seções independentes da página, navegação responsiva e formulário de avaliação.
- `src/pages/avaliar.tsx`: página de avaliação para clientes.
- `src/pages/painel.tsx`: painel onde a Amanda publica as avaliações.
- `src/styles/globals.css`: cores, tipografia, espaçamento e regras de responsividade.
- `src/pages/index.tsx`: composição, metadados e dados estruturados da profissional.
- `public/documents/Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf`: currículo original para download, com nome e cargo no nome do arquivo. Os nomes anteriores do arquivo redirecionam para ele.
- `public/images/amanda-assumpcao.webp`: foto exibida no topo da página.
- `public/images/og-image.jpg`: imagem de prévia exibida quando o link é compartilhado, com 1200 × 630 px.

Os cargos e o MBA refletem o documento fornecido. Atualize `experience` e `education` quando houver mudanças. Os links de contato abrem WhatsApp, LinkedIn, aplicativo de e-mail ou telefone.

### Avaliações de clientes

Clientes avaliam o trabalho em `/avaliar`. A página não aparece nos buscadores, mas está no botão da seção "Avaliações", que também fica no menu, e pode ser enviada diretamente. Cada envio chega ao Netlify Forms, no formulário `avaliacoes`, com filtro de spam do Netlify e um campo-armadilha para robôs. Nada é publicado automaticamente:

1. A avaliação chega ao painel do Netlify, em **Forms → avaliacoes**, e também por e-mail, se a notificação estiver configurada em **Site configuration → Notifications → Emails and webhooks → Form submission notifications**. O assunto do e-mail traz a nota e o nome, como "Nova avaliação: 5 estrelas, de Maria". Ele vem do campo `subject` que o formulário envia, e esse campo tem prioridade sobre o assunto definido no painel.
2. A função `netlify/functions/review-submitted.ts` guarda a avaliação no Netlify Blobs, como pendente.
3. A Amanda entra em <https://arra-portfolio.netlify.app/painel> com usuário e senha, revisa o depoimento e clica em **Publicar no portfólio**. Ele aparece na hora em cartões na seção "Avaliações" da página inicial. Pelo mesmo painel, ela pode retirar uma avaliação do portfólio ou excluí-la.

O painel só permite publicar depoimentos com a autorização marcada e nunca mostra o e-mail fora dele. Avaliações enviadas antes do painel existir ficam só no Netlify Forms.

O usuário e a senha ficam nas variáveis de ambiente do Netlify, em **Site configuration → Environment variables**: `PANEL_USERNAME`, `PANEL_PASSWORD` e `PANEL_SESSION_SECRET`, o segredo que assina a sessão. Para trocar a senha, mude `PANEL_PASSWORD` e faça um novo deploy. Isso também encerra as sessões abertas. Depois de 5 senhas erradas seguidas, o login fica bloqueado por 15 minutos.

O formulário envia os dados para `public/__forms.html`, que declara os campos para o Netlify. Ao mudar um campo, atualize os dois arquivos. Para remover um depoimento a pedido do cliente, exclua a avaliação no painel e a submissão em **Forms**.

## Publicação

O site fica em <https://arra-portfolio.netlify.app> e é publicado pelo Netlify a cada merge em `main`, como descrito abaixo. O endereço está em `site.url`, em `src/data/profile.ts`, e alimenta a URL canônica, a imagem de prévia usada no WhatsApp e no LinkedIn e os dados estruturados. `public/robots.txt` e `public/sitemap.xml` repetem o endereço. Ao trocar o domínio, atualize os três arquivos.

As antigas rotas do template redirecionam permanentemente para as seções correspondentes. Fontes e imagens são servidas pelo próprio projeto; a página não depende de CDNs de estilos ou fontes.

### Fluxo de branches e Netlify

`main` é a única branch permanente do repositório e a branch de produção do site `arra-portfolio` no Netlify. Cada merge em `main` publica o site.

Para qualquer alteração, crie uma branch de trabalho a partir de `main` e abra um pull request com destino a `main`. O Netlify gera um Deploy Preview para cada PR, com endereço próprio, para validar a mudança antes da publicação.

```sh
git switch main && git pull
git switch -c feat/minha-alteracao
# faça commits assinados
git push -u origin feat/minha-alteracao
gh pr create --base main --fill
# após a aprovação dos checks
gh pr merge --squash --delete-branch
git switch main && git pull --prune
```

A branch `main` exige pull request, histórico linear, commits com assinatura verificada pelo GitHub, PR atualizado em relação a `main` e quatro checks do Netlify: `Header rules - arra-portfolio`, `Pages changed - arra-portfolio`, `Redirect rules - arra-portfolio` e `netlify/arra-portfolio/deploy-preview`. Antes do merge, confira os resultados no PR. Use **Squash and merge**: o GitHub assina o commit gerado, o que atende à exigência de assinatura. Se o PR ficar desatualizado, use **Update branch** ou faça rebase da branch de trabalho sobre `main`.

Não use uma segunda branch permanente, como `develop`, para promover alterações a `main`. Com histórico linear obrigatório, cada squash ou rebase cria em `main` um commit que não existe na outra branch, e as duas divergem a cada publicação. No painel do Netlify, em **Branches and deploy contexts**, somente `main` tem deploy de branch; os Deploy Previews de PRs continuam ativos.

Para assinaturas SSH, a chave pública usada pelo Git deve estar cadastrada no GitHub como **Signing Key**. Uma chave cadastrada apenas para autenticação não basta para verificar a assinatura dos commits.

### Agentes de código

As instruções para agentes de código ficam em `AGENTS.md`. O `CLAUDE.md` importa esse arquivo e acrescenta notas específicas do Claude Code. O `.claude/settings.json` bloqueia comandos destrutivos, como apagar o site no Netlify ou o repositório. Configurações pessoais do Claude Code ficam em `.claude/settings.local.json`, que não é versionado.

## Créditos

Identidade visual fornecida pelo projeto original. Fontes: Manrope e DM Sans, distribuídas pelo Fontsource. Ícones: Lucide. Fotografia fornecida pela profissional.
