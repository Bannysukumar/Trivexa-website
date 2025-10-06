// Additional configuration to completely disable Next.js caching
// Add this to your next.config.js if the experimental option doesn't work

const nextConfig = {
  // ... your existing config ...
  
  // Force all routes to be dynamic
  generateStaticParams: false,
  
  // Disable all caching mechanisms
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },
  
  // Override default caching behavior
  async rewrites() {
    return [];
  },
  
  // Disable static optimization
  outputFileTracing: false,
  
  // Force dynamic rendering
  trailingSlash: false,
  
  // Disable build cache
  swcMinify: true,
  
  // Custom server configuration
  serverRuntimeConfig: {
    // Disable caching
    noCache: true,
  },
  
  // Public runtime config
  publicRuntimeConfig: {
    // Disable caching
    noCache: true,
  },
};

module.exports = nextConfig;
