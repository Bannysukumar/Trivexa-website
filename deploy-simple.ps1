# Simple deployment script for Windows
Write-Host "Starting Trivexa Website Zero-Cache Deployment..." -ForegroundColor Red

# Step 1: Clear all Next.js build cache
Write-Host "Clearing Next.js build cache..." -ForegroundColor Yellow
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
if (Test-Path "node_modules\.cache") { Remove-Item -Recurse -Force "node_modules\.cache" }
if (Test-Path ".vercel") { Remove-Item -Recurse -Force ".vercel" }

# Step 2: Build with fresh cache-busting ID
Write-Host "Building with fresh cache-busting ID..." -ForegroundColor Yellow
npm run build

Write-Host "Build complete! Next steps:" -ForegroundColor Green
Write-Host "1. Restart your PM2 process: pm2 restart trivexa-website --update-env" -ForegroundColor White
Write-Host "2. Reload Nginx: nginx -s reload" -ForegroundColor White
Write-Host "3. Test: curl -I https://trivexatechnologies.com" -ForegroundColor White
