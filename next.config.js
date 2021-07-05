const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
