/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET:"secret_key",
  },
};

module.exports = nextConfig;
