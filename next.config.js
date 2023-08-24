/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "secret_key",
    // NEXTAUTH_URL:"http://localhost:3000/api/user/change-password",
    GOOGLE_CLIENT_ID:
      "959117838915-21cgqgr34erj1aoks002nsgjbh9eafa0.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
