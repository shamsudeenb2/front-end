/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    // async rewrites() {
    //     return [
    //       {
    //         source: "/account/register",
    //         destination: "http://localhost:8000/account/register",
    //       },
    //     ];
    //   },
        images: {
          domains: ['localhost'], // Add the domain(s) of your Django server here
        },
}

module.exports = nextConfig
