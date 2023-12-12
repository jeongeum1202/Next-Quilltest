/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://localhost:8080/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
