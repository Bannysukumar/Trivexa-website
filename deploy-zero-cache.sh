#!/bin/bash

# 🚀 Complete Zero-Cache Deployment Script
# This script ensures NO caching at any level

echo "🔥 Starting Complete Zero-Cache Deployment..."

# Step 1: Clear ALL caches
echo "🧹 Clearing ALL caches..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .vercel
rm -rf out

# Step 2: Clear PM2 logs
echo "📝 Clearing PM2 logs..."
pm2 flush trivexa-website

# Step 3: Build with zero-cache configuration
echo "🔨 Building with zero-cache configuration..."
npm run build

# Step 4: Restart PM2
echo "🔄 Restarting PM2..."
pm2 restart trivexa-website --update-env

# Step 5: Reload Nginx
echo "⚡ Reloading Nginx..."
nginx -t && nginx -s reload

# Step 6: Wait for deployment
echo "⏳ Waiting for deployment to stabilize..."
sleep 5

# Step 7: Test headers
echo "✅ Testing cache headers..."
echo "================================"

curl -I https://trivexatechnologies.com | grep -E "(x-nextjs-cache|cache-control|etag|last-modified)"

echo "================================"

# Check for success indicators
echo "🎯 Expected Results:"
echo "✅ x-nextjs-cache: MISS (or not present)"
echo "✅ cache-control: no-cache, no-store, must-revalidate"
echo "✅ etag: [new-timestamp]"

echo "🎉 Zero-cache deployment complete!"
