@echo off
echo 🔥 Starting Trivexa Website Zero-Cache Deployment...

echo 🧹 Clearing Next.js build cache...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"
if exist ".vercel" rmdir /s /q ".vercel"

echo 📝 Clearing PM2 logs...
pm2 flush trivexa-website

echo 🔨 Building with fresh cache-busting ID...
npm run build

echo 🔄 Restarting PM2 with fresh environment...
pm2 restart trivexa-website --update-env

echo ⚡ Reloading Nginx configuration...
nginx -t
if %errorlevel% equ 0 (
    nginx -s reload
)

echo ✅ Verifying deployment...
timeout /t 3 /nobreak >nul
curl -I https://trivexatechnologies.com

echo 🎉 Zero-cache deployment complete!
echo 📊 Check the headers above - you should see:
echo    - x-nextjs-cache: MISS
echo    - cache-control: no-cache, no-store, must-revalidate
echo    - etag: [new-timestamp]
pause
