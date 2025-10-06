# 🚀 Trivexa Website Zero-Cache Deploy Script (PowerShell)
# This script ensures complete cache busting and fresh deployments

Write-Host "🔥 Starting Trivexa Website Zero-Cache Deployment..." -ForegroundColor Red

# Step 1: Clear all Next.js build cache
Write-Host "🧹 Clearing Next.js build cache..." -ForegroundColor Yellow
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
if (Test-Path "node_modules\.cache") { Remove-Item -Recurse -Force "node_modules\.cache" }
if (Test-Path ".vercel") { Remove-Item -Recurse -Force ".vercel" }

# Step 2: Clear PM2 logs
Write-Host "📝 Clearing PM2 logs..." -ForegroundColor Yellow
pm2 flush trivexa-website

# Step 3: Build with fresh cache-busting ID
Write-Host "🔨 Building with fresh cache-busting ID..." -ForegroundColor Yellow
npm run build

# Step 4: Restart PM2 with fresh environment
Write-Host "🔄 Restarting PM2 with fresh environment..." -ForegroundColor Yellow
pm2 restart trivexa-website --update-env

# Step 5: Reload Nginx (if running)
Write-Host "⚡ Reloading Nginx configuration..." -ForegroundColor Yellow
nginx -t
if ($LASTEXITCODE -eq 0) {
    nginx -s reload
}

# Step 6: Verify deployment
Write-Host "✅ Verifying deployment..." -ForegroundColor Green
Start-Sleep -Seconds 3
$headers = Invoke-WebRequest -Uri "https://trivexatechnologies.com" -Method Head
$headers.Headers | Where-Object { $_.Key -match "(x-nextjs-cache|cache-control|etag)" } | ForEach-Object {
    Write-Host "$($_.Key): $($_.Value)" -ForegroundColor Cyan
}

Write-Host "🎉 Zero-cache deployment complete!" -ForegroundColor Green
Write-Host "📊 Check the headers above - you should see:" -ForegroundColor White
Write-Host "   - x-nextjs-cache: MISS" -ForegroundColor White
Write-Host "   - cache-control: no-cache, no-store, must-revalidate" -ForegroundColor White
Write-Host "   - etag: [new-timestamp]" -ForegroundColor White
