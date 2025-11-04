#!/bin/bash

# Trivexa Technologies Website Installation Script
echo "🚀 Setting up Trivexa Technologies Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
echo "⚙️ Creating environment file..."
cat > .env.local << EOF
# Trivexa Technologies Website Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
CONTACT_EMAIL=customer@trivexatechnologies.com
CONTACT_PHONE=6301846681

# Add your API keys and other environment variables here
# EMAIL_SERVICE_API_KEY=your-email-service-key
# WHATSAPP_API_KEY=your-whatsapp-api-key
EOF

echo "✅ Environment file created (.env.local)"

# Create public directory structure
echo "📁 Creating public directory structure..."
mkdir -p public/images
mkdir -p public/icons

# Create placeholder images
echo "🖼️ Creating placeholder images..."
cat > public/images/placeholder.txt << EOF
# Placeholder Images
# Replace these with your actual images:
# - logo.png (your company logo)
# - hero-bg.jpg (hero section background)
# - team-member-*.jpg (team member photos)
# - case-study-*.jpg (case study images)
# - client-logo-*.png (client logos)
EOF

echo "✅ Public directory structure created"

# Run build check
echo "🔨 Running build check..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Installation completed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Update .env.local with your actual environment variables"
    echo "2. Replace placeholder images in public/images/ with your actual images"
    echo "3. Update company information in app/layout.tsx"
    echo "4. Customize content in components/"
    echo "5. Run 'npm run dev' to start development server"
    echo ""
    echo "🌐 Your website will be available at: http://localhost:3000"
    echo ""
    echo "📚 For more information, check the README.md file"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
