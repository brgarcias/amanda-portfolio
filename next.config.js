/** @type {import('next').NextConfig} */

const appVersion = () => {
  return Date.now().toString();
};

const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_ENV: 'development',
    NEXT_PUBLIC_API: 'http://localhost:3001/v1',
    NEXT_PUBLIC_APP_VERSION_CODE: appVersion(),
  },
  images: {
    unoptimized: true,
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
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
