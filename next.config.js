module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['s3-us-west-2.amazonaws.com'],
  },
  publicRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
};
