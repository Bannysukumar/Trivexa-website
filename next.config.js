/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Generate unique build ID each deploy — breaks old cache
  generateBuildId: async () => {
    return Date.now().toString();
  },

  // ✅ Disable all static revalidation (forces rebuild for any change)
  revalidate: 0,
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },

  // ✅ Image optimization
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'trivexa.com',
      'demo.trivexa.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // ✅ Compression & performance
  compress: true,
  poweredByHeader: false,

  // ✅ Security + Cache-Control headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },

          // 🔥 Disable caching permanently (browser + proxy + Next.js)
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];
  },

  // ✅ Redirects (example: if old domain should forward)
  async redirects() {
    return [
      {
        source: '/trivexa-five.vercel.app/:path*',
        destination: 'https://trivexa.com/:path*',
        permanent: true,
      },
    ];
  },

  // ✅ Experimental features (optional optimizations)
  experimental: {
    optimizeCss: false,
    turbo: false,
  },

  // ✅ Output standalone mode (for PM2/Nginx deployments)
  output: 'standalone',
};

module.exports = nextConfig;
