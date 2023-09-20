/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_API: "https://apidefischool.atitude247.com.br",
        SOCKET_API: "https://socketdefischool.atitude247.com.br"
    },
    experimental: {
      serverActions: true,
    },
}

module.exports = nextConfig
