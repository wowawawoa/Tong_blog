/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET:"secret_key",
    // NEXTAUTH_URL:"http://localhost:3000/api/user/change-password",
  },
};

module.exports = nextConfig;
