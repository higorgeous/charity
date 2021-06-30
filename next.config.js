module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['s3-us-west-2.amazonaws.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
