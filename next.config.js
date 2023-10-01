/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
