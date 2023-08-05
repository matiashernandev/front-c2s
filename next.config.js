/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  i18n: {
    locales: ["es-ES", "de-DE"],
    defaultLocale: "es-ES",
  },
}

module.exports = nextConfig
