#!/bin/bash

# 🚀 Trivexa Website Zero-Cache Deploy Script
# This script ensures complete cache busting and fresh deployments

echo "🔥 Starting Trivexa Website Zero-Cache Deployment..."

# Step 1: Clear all Next.js build cache
echo "🧹 Clearing Next.js build cache..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .vercel

# Step 2: Clear PM2 logs
echo "📝 Clearing PM2 logs..."
pm2 flush trivexa-website

# Step 3: Build with fresh cache-busting ID
echo "🔨 Building with fresh cache-busting ID..."
npm run build

# Step 4: Restart PM2 with fresh environment
echo "🔄 Restarting PM2 with fresh environment..."
pm2 restart trivexa-website --update-env

# Step 5: Reload Nginx (if running)
echo "⚡ Reloading Nginx configuration..."
sudo nginx -t && sudo nginx -s reload

# Step 6: Verify deployment
echo "✅ Verifying deployment..."
sleep 3
curl -I https://trivexatechnologies.com | grep -E "(x-nextjs-cache|cache-control|etag)"

echo "🎉 Zero-cache deployment complete!"
echo "📊 Check the headers above - you should see:"
echo "   - x-nextjs-cache: MISS"
echo "   - cache-control: no-cache, no-store, must-revalidate"
echo "   - etag: [new-timestamp]"
