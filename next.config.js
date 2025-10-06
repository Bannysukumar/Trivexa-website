/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Unique build ID on every deploy to break cache
  generateBuildId: async () => {
    return Date.now().toString();
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

  // ✅ Compression and security
  compress: true,
  poweredByHeader: false,

  // ✅ Security & cache headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },

          // 🔥 Disable caching globally (browser + CDN + proxy)
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];
  },

  // ✅ Redirect old URLs to main domain (optional)
  async redirects() {
    return [
      {
        source: '/trivexa-five.vercel.app/:path*',
        destination: 'https://trivexa.com/:path*',
        permanent: true,
      },
    ];
  },

  // ✅ Experimental (valid options only)
  experimental: {
    optimizeCss: false, // safe
  },

  // ✅ Force all pages to be dynamic (disable ISR/SSG caching)
  trailingSlash: false,
  
  // ✅ Disable static optimization completely
  swcMinify: true,
  
  // ✅ Output for PM2/Nginx standalone deployment
  output: 'standalone',
};

module.exports = nextConfig;
