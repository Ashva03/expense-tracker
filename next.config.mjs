/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ensure you're on the correct Next.js version if using appDir
  experimental: { appDir: true },

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['firebasestorage.googleapis.com'],
  },

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
