/** @type {import('next').NextConfig} */
import purgecss from '@fullhuman/postcss-purgecss';

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true,
  },
  plugins: [
    purgecss({
      content: ['./**/*.html'],
    }),
  ],
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //       permanent: true,
  //       basePath: true, // set false if destination path start with http or https
  //     },
  //   ];
  // },

  async rewrites() {
    return [
      {
        source: '/example/:path*',
        destination: 'https://example.com/:path*',
      },
    ];
  },
};

export default nextConfig;
