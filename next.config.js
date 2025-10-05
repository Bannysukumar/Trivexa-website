/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'trivexa.com', 'demo.trivexa.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  poweredByHeader: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Redirects for domain migration
  async redirects() {
    return [
      {
        source: '/trivexa-five.vercel.app/:path*',
        destination: 'https://trivexa.com/:path*',
        permanent: true,
      },
    ]
  },
  
  // Experimental features
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig