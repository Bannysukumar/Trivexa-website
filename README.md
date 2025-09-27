# Trivexa Technologies - Enterprise Blockchain Solutions Website

A modern, professional website for Trivexa Technologies Pvt. Ltd., a leading blockchain development company specializing in Layer-1 & Layer-2 blockchain solutions, smart contracts, DApps, and Web3 technologies.

## 🚀 Features

### 🎨 Design & UI/UX
- **Modern, Premium Corporate Design** with blockchain & futuristic visuals
- **Dark/Light Mode Toggle** for enhanced user experience
- **Fully Responsive Design** (mobile, tablet, desktop)
- **Smooth Framer Motion Animations** throughout the site
- **3D Blockchain-themed Visuals** with animated elements
- **Glass Effects** and modern UI components

### 🏗️ Technical Features
- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations
- **React Hook Form** for form handling
- **Next Themes** for dark/light mode
- **React Hot Toast** for notifications
- **Lucide React** for consistent iconography

### 🤖 AI & Interactive Features
- **AI Chatbot Assistant** ("Ask Trivexa") for blockchain queries
- **Interactive 3D Hero Section** with orbiting elements
- **Animated Statistics** and counters
- **Hover Effects** and micro-interactions
- **Smooth Scrolling** and page transitions

### 📱 Pages & Sections

#### 🏠 Home Page
- Hero section with 3D blockchain visualization
- Statistics showcase
- Services overview with feature highlights
- Why choose us section with testimonials
- Industries we serve
- Case studies preview
- Client testimonials
- Blog preview
- Call-to-action sections

#### 📖 About Page
- Company story and timeline
- Team member profiles
- Mission and vision
- Company values
- Achievement statistics

#### 🛠️ Services Pages
- Layer-1 Blockchain Development
- Layer-2 Blockchain Solutions
- Smart Contract Development
- DApp Development
- Web & Mobile Development
- AI-Powered Solutions

#### 🏢 Additional Pages
- Portfolio & Case Studies
- Industries We Serve
- Blog & Insights
- Careers
- Contact Us
- Privacy Policy, Terms of Service, Cookie Policy
- Transparency & Security

### 🔍 SEO & Performance
- **Comprehensive SEO Setup** with meta tags, Open Graph, and Twitter Cards
- **Sitemap.xml** and robots.txt
- **Schema Markup** for better search visibility
- **Optimized Images** and lazy loading
- **Fast Loading Speed** with Next.js optimizations
- **Mobile-First Design** for better mobile SEO

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trivexa-technologies-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
trivexa-technologies-website/
├── app/                          # Next.js App Router
│   ├── about/                   # About page
│   ├── admin/                   # Admin dashboard
│   ├── ai-training/             # AI training system
│   ├── blog/                    # Blog pages
│   ├── careers/                 # Careers page
│   ├── contact/                 # Contact page
│   ├── industries/              # Industry pages
│   ├── portfolio/               # Portfolio pages
│   ├── services/                # Service pages
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   ├── cookies/                 # Cookie policy
│   ├── transparency/            # Security transparency
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # Robots.txt
│   └── sitemap.ts               # Sitemap
├── components/                   # React components
│   ├── about/                   # About page components
│   ├── admin/                   # Admin components
│   ├── ai-chatbot/              # AI chatbot components
│   ├── ai-demo/                 # AI demo components
│   ├── blog/                    # Blog components
│   ├── careers/                 # Careers components
│   ├── common/                  # Shared components
│   ├── contact/                 # Contact components
│   ├── home/                    # Home page components
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── portfolio/               # Portfolio components
│   ├── seo/                     # SEO components
│   ├── services/                # Service components
│   ├── ui/                      # UI components
│   └── theme-provider.tsx       # Theme provider
├── lib/                         # Utility functions
│   ├── ai-training-data.ts      # AI training data
│   ├── ai-training-system.ts    # AI training system
│   ├── ai-test-demo.ts          # AI demo utilities
│   ├── firebase.ts              # Firebase configuration
│   ├── firebase-utils.ts        # Firebase utilities
│   └── utils.ts                 # Common utilities
├── public/                      # Static assets
├── __tests__/                   # Test files
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Customization

### Colors & Branding
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Royal Blue (#3b82f6)
- **Navy**: Dark Navy (#1e3a8a)
- **Gray**: Various shades for text and backgrounds

### Content Updates
- **Company Information**: Update in `app/layout.tsx` metadata
- **Services**: Modify service data in respective components
- **Team Members**: Update in `components/about/TeamSection.tsx`
- **Case Studies**: Update in `components/portfolio/PortfolioGrid.tsx`

### SEO Configuration
- **Meta Tags**: Update in `app/layout.tsx`
- **Sitemap**: Modify `app/sitemap.ts`
- **Schema Markup**: Add to relevant pages

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
# Firebase Configuration (if using Firebase features)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Contact Form Integration
The contact forms are ready for integration with:
- **Email Services** (SendGrid, Nodemailer)
- **WhatsApp Integration**
- **Telegram Integration**
- **CRM Systems**

## 📊 Analytics & Monitoring

### Google Analytics
Add your GA4 tracking ID to the environment variables and implement tracking in the layout.

### Performance Monitoring
The site is optimized for:
- **Core Web Vitals**
- **Lighthouse Scores**
- **Mobile Performance**

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **DigitalOcean App Platform**: Simple deployment

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI
npm run test:ci
```

### Test Coverage
The project maintains a minimum test coverage of 70% for:
- Branches
- Functions
- Lines
- Statements

## 📈 Performance Optimization

- Images are automatically optimized by Next.js
- Lazy loading is implemented for images
- Animations are optimized for mobile devices
- Bundle size is minimized through code splitting

## 🛡️ Security

- Security headers are configured in `next.config.js`
- XSS protection is enabled
- Content Security Policy is implemented
- All external links use `rel="noopener noreferrer"`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary software owned by Trivexa Technologies Pvt. Ltd.

## 🤝 Support

For technical support or questions, please contact:
- **Email**: hello@trivexa.com
- **Phone**: +91-6301846681
- **Website**: https://trivexa.com

---

**Built with ❤️ by Trivexa Technologies**

*Transforming businesses with cutting-edge blockchain solutions*