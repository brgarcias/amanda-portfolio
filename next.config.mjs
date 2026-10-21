/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/story', destination: '/#experiencia', permanent: true },
      { source: '/contact', destination: '/#contato', permanent: true },
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
        ],
      },
    ];
  },
};

export default nextConfig;
