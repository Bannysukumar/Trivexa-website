import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AIChatbot from '@/components/ai-chatbot/AIChatbot'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Trivexa Technologies - Premier Enterprise Blockchain Solutions & Web3 Development Company',
    template: '%s | Trivexa Technologies - Enterprise Blockchain Solutions'
  },
  description: 'Leading enterprise blockchain development company trusted by Fortune 500 companies worldwide. We deliver secure, scalable, and production-ready blockchain solutions including Layer-1 & Layer-2 networks, smart contracts, DApps, DeFi, NFT platforms, and Web3 technologies. Get expert blockchain consulting and development services.',
  keywords: [
    'blockchain development company',
    'enterprise blockchain solutions',
    'Layer-1 blockchain development',
    'Layer-2 blockchain scaling',
    'smart contract development',
    'DApp development services',
    'Web3 development company',
    'blockchain consulting services',
    'cryptocurrency development',
    'DeFi development platform',
    'NFT marketplace development',
    'blockchain technology solutions',
    'enterprise blockchain consulting',
    'blockchain architecture design',
    'blockchain security audit',
    'blockchain integration services',
    'Trivexa Technologies',
    'Fortune 500 blockchain',
    'production-ready blockchain',
    'scalable blockchain solutions'
  ],
  authors: [{ 
    name: 'Trivexa Technologies Pvt. Ltd.',
    url: 'https://trivexa.com'
  }],
  creator: 'Trivexa Technologies Pvt. Ltd.',
  publisher: 'Trivexa Technologies Pvt. Ltd.',
  applicationName: 'Trivexa Technologies',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trivexa.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trivexa.com',
    title: 'Trivexa Technologies - Premier Enterprise Blockchain Solutions & Web3 Development',
    description: 'Leading enterprise blockchain development company trusted by Fortune 500 companies. Expert blockchain solutions, smart contracts, DApps, DeFi, and Web3 technologies.',
    siteName: 'Trivexa Technologies',
    images: [
      {
        url: '/logo-new.jpg',
        width: 1200,
        height: 630,
        alt: 'Trivexa Technologies - Premier Enterprise Blockchain Development Company',
        type: 'image/jpeg',
      },
      {
        url: '/logo-new.jpg',
        width: 1200,
        height: 1200,
        alt: 'Trivexa Technologies Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trivexa_tech',
    creator: '@trivexa_tech',
    title: 'Trivexa Technologies - Premier Enterprise Blockchain Solutions',
    description: 'Leading enterprise blockchain development company. Expert blockchain solutions, smart contracts, DApps, DeFi, and Web3 technologies.',
    images: {
      url: '/logo-new.jpg',
      alt: 'Trivexa Technologies - Enterprise Blockchain Solutions',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Technology',
  classification: 'Blockchain Development Company',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Trivexa Technologies',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#3b82f6',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://trivexa.com/#organization",
        "name": "Trivexa Technologies Pvt. Ltd.",
        "url": "https://trivexa.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://trivexa.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Premier enterprise blockchain development company trusted by Fortune 500 companies worldwide. We deliver secure, scalable, and production-ready blockchain solutions.",
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "industry": "Blockchain Technology",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "India",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+916301846681",
          "contactType": "customer service",
          "email": "enterprise@trivexa.com",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://twitter.com/trivexa_tech",
          "https://www.linkedin.com/company/trivexa-technologies-private-limited/",
          "https://github.com/trivexa-technologies"
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 12.9716,
            "longitude": 77.5946
          },
          "geoRadius": "10000000"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "ISO/IEC 27001:2013 Certified",
            "credentialCategory": "Security Certification"
          },
          {
            "@type": "EducationalOccupationalCredential", 
            "name": "SOC 2 Type II Audited",
            "credentialCategory": "Security Audit"
          }
        ],
        "knowsAbout": [
          "Blockchain Development",
          "Smart Contract Development", 
          "DeFi Protocols",
          "NFT Marketplaces",
          "Web3 Applications",
          "Layer-1 Blockchain",
          "Layer-2 Scaling Solutions",
          "AI-Powered Blockchain Solutions"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://trivexa.com/#website",
        "url": "https://trivexa.com",
        "name": "Trivexa Technologies",
        "description": "Premier enterprise blockchain development company",
        "publisher": {
          "@id": "https://trivexa.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://trivexa.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Blockchain Development Services",
        "description": "Enterprise blockchain development, smart contracts, DApps, Web3 solutions",
        "provider": {
          "@id": "https://trivexa.com/#organization"
        },
        "serviceType": "Blockchain Technology",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Blockchain Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Layer-1 Blockchain Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Layer-2 Blockchain Scaling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Smart Contract Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DApp Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web3 Development"
              }
            }
          ]
        }
      }
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
              <Header />
              <main className="relative">
                {children}
              </main>
              <Footer />
          <AIChatbot />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
