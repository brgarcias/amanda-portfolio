/** @type {import('next').NextConfig} */

const appVersion = () => {
  return Date.now();
};

const nextConfig = {
  env: {
    APP_ENV: 'development',
    API: 'http://localhost:3001/v1',
    APP_VERSION_CODE: appVersion(),
  },
  images: {
    // domains: ["assets.arra-portfolio.netlify.app", "d2r9epyceweg5n.cloudfront.net"],
    unoptimized: false,
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    staticFolder: '/public',
    assets: 'https://assets.arra-portfolio.netlify.app',
  },
  generateBuildId: async () => {
    return `webid-${appVersion()}`;
  },
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
};

export default nextConfig;
