@echo off
echo 🚀 Setting up Trivexa Technologies Website...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create environment file
echo ⚙️ Creating environment file...
(
echo # Trivexa Technologies Website Environment Variables
echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
echo NEXT_PUBLIC_GA_ID=your-google-analytics-id
echo CONTACT_EMAIL=customer@trivexatechnologies.com
echo CONTACT_PHONE=6301846681
echo.
echo # Add your API keys and other environment variables here
echo # EMAIL_SERVICE_API_KEY=your-email-service-key
echo # WHATSAPP_API_KEY=your-whatsapp-api-key
) > .env.local

echo ✅ Environment file created (.env.local)

REM Create public directory structure
echo 📁 Creating public directory structure...
if not exist "public\images" mkdir "public\images"
if not exist "public\icons" mkdir "public\icons"

REM Create placeholder images info
echo 🖼️ Creating placeholder images info...
(
echo # Placeholder Images
echo # Replace these with your actual images:
echo # - logo.png (your company logo)
echo # - hero-bg.jpg (hero section background)
echo # - team-member-*.jpg (team member photos)
echo # - case-study-*.jpg (case study images)
echo # - client-logo-*.png (client logos)
) > "public\images\placeholder.txt"

echo ✅ Public directory structure created

REM Run build check
echo 🔨 Running build check...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🎉 Installation completed successfully!
    echo.
    echo 📋 Next steps:
    echo 1. Update .env.local with your actual environment variables
    echo 2. Replace placeholder images in public/images/ with your actual images
    echo 3. Update company information in app/layout.tsx
    echo 4. Customize content in components/
    echo 5. Run 'npm run dev' to start development server
    echo.
    echo 🌐 Your website will be available at: http://localhost:3000
    echo.
    echo 📚 For more information, check the README.md file
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

pause
