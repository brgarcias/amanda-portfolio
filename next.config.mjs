// Turbopack bootstraps each page with an inline script whose content
// changes on every build, so scripts need 'unsafe-inline'. Nonces would
// require rendering the page on every request. The development server
// also needs 'unsafe-eval'.
const isDevelopment = process.env.NODE_ENV === 'development';
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keeps `next dev` from appending its own agent instructions to AGENTS.md.
  agentRules: false,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/story', destination: '/#experiencia', permanent: true },
      { source: '/contact', destination: '/#contato', permanent: true },
      ...[
        'curriculo-amanda-assumpcao.pdf',
        'Amanda-Assumpcao-Curriculo.pdf',
      ].map((file) => ({
        source: `/documents/${file}`,
        destination:
          '/documents/Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf',
        permanent: true,
      })),
      { source: '/services/:path*', destination: '/#atuacao', permanent: true },
      { source: '/projects/:path*', destination: '/#atuacao', permanent: true },
      ...[2, 3, 4, 5].map((number) => ({
        source: `/projects-${number}`,
        destination: '/#atuacao',
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
      ...['/painel', '/api/:path*'].map((source) => ({
        source,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      })),
    ];
  },
};

export default nextConfig;
