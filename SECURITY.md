# Política de segurança

Este repositório contém o portfólio profissional de Amanda Assumpção, publicado em <https://arra-portfolio.netlify.app>. Obrigado por ajudar a mantê-lo seguro.

## Escopo

A política cobre o site publicado e o código deste repositório:

- a página inicial e as páginas `/avaliar`, `/painel`, 404 e 500;
- as rotas de API em `src/pages/api/panel/` e a função `netlify/functions/review-submitted.ts`;
- o formulário de avaliação, o painel de avaliações e as avaliações guardadas no Netlify Blobs;
- os cabeçalhos de segurança e a Content Security Policy definidos em `next.config.mjs`;
- a configuração de build, as dependências e o fluxo de publicação.

Ficam fora do escopo as plataformas GitHub e Netlify em si (relate a elas), ataques que exijam acesso físico ou às contas de quem mantém o site, engenharia social, ataques volumétricos de negação de serviço e relatórios de ferramentas automáticas sem demonstração de impacto.

## Versões com suporte

Só a versão publicada recebe correções: a branch `main`, que o Netlify publica a cada merge. Não há versões anteriores mantidas.

## Como relatar uma vulnerabilidade

Não abra uma issue pública. Use um dos canais privados:

1. **Relato privado no GitHub**, o canal preferido: <https://github.com/brgarcias/amanda-portfolio/security/advisories/new>.
2. **E-mail** ao responsável pelo projeto: <bruno-151299@hotmail.com>, com "Segurança: arra-portfolio" no assunto.

O site publica os mesmos canais em <https://arra-portfolio.netlify.app/.well-known/security.txt>, no formato da RFC 9116.

Inclua, se puder: a página ou rota afetada, os passos para reproduzir, o impacto que você identificou e, se houver, uma prova de conceito. Escreva em português ou inglês.

## O que esperar

- Confirmação de recebimento em até 7 dias.
- Avaliação do impacto e um prazo estimado de correção em até 14 dias.
- Correção publicada em `main` pelo fluxo normal de pull request, com os testes e a revisão de dependências do repositório.
- Aviso quando a correção estiver no ar e, se você quiser, crédito no advisory.

Peço que a divulgação pública espere a correção estar publicada. Este é um projeto pessoal, sem programa de recompensas.

## Regras para quem pesquisa

- Não acesse, altere nem apague dados de terceiros. As avaliações guardadas no Netlify Blobs contêm nomes e e-mails de pessoas reais; se encontrar um caminho até elas, pare e relate.
- Não tente adivinhar a senha do painel além do que o limite de tentativas permite, nem contorne esse limite.
- Não envie avaliações falsas pelo formulário em produção. Se precisar testar o fluxo, use um Deploy Preview ou avise antes.
- Não cause indisponibilidade.
- Aja de boa-fé e dentro da lei. Relatos feitos assim não serão tratados como má-fé.

## Medidas em vigor

Para orientar a pesquisa, o que o projeto já faz:

- Content Security Policy restrita ao próprio domínio, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy` em todas as respostas.
- Painel protegido por usuário e senha guardados só nas variáveis de ambiente do Netlify, com sessão assinada por HMAC em cookie `HttpOnly`, `Secure` e `SameSite=Strict`, limite de 5 tentativas por usuário a cada 15 minutos e de 100 por hora no site inteiro, e ações aceitas só em pedidos JSON vindos da própria origem.
- Formulário de avaliação com campo-armadilha, filtro de spam do Netlify Forms, validação no navegador e no servidor, consentimento registrado e e-mail de quem avaliou visível só no painel.
- Nenhum script, estilo, fonte ou imagem de terceiros, e nenhum rastreador.
- Commits assinados, branch `main` protegida, CI com lint, tipos, build e testes de navegador, Dependabot e CodeQL.

## Dados pessoais

Quem enviou uma avaliação pode pedir a remoção a qualquer momento pelo e-mail que aparece na página de avaliação. Esse pedido não é um relato de segurança e vai direto à Amanda.
