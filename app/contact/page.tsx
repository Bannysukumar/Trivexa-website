import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'

export const dynamic = 'force-dynamic'

import ContactForm from '@/components/contact/ContactForm'
import ContactDetails from '@/components/contact/ContactDetails'

export const metadata: Metadata = {
  title: 'Contact Enterprise Blockchain Development Experts - Get Your Project Started',
  description: 'Contact Trivexa Technologies for enterprise blockchain development services. Get free consultation, expert advice, and custom blockchain solutions for your business. 24/7 support, Fortune 500 experience, and production-ready solutions.',
  keywords: [
    'contact blockchain development company',
    'enterprise blockchain consultation',
    'blockchain development quote',
    'get blockchain project started',
    'blockchain experts contact',
    'trivexa contact form',
    'blockchain development consultation',
    'enterprise blockchain services',
    'blockchain project planning',
    'blockchain development support',
    'Fortune 500 blockchain consulting',
    'blockchain technology consultation',
    'smart contract development consultation',
    'DApp development consultation',
    'Web3 development consultation',
    'blockchain architecture consultation',
    'blockchain security consultation',
    'blockchain integration consultation',
    'blockchain scaling consultation',
    'blockchain audit consultation'
  ],
  openGraph: {
    title: 'Contact Enterprise Blockchain Development Experts - Trivexa Technologies',
    description: 'Contact Trivexa Technologies for enterprise blockchain development services. Get free consultation, expert advice, and custom blockchain solutions for your business.',
    url: 'https://trivexa.com/contact',
    siteName: 'Trivexa Technologies',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Trivexa Technologies - Enterprise Blockchain Development Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Enterprise Blockchain Development Experts - Trivexa Technologies',
    description: 'Contact Trivexa Technologies for enterprise blockchain development services. Get free consultation, expert advice, and custom blockchain solutions.',
    images: ['/twitter-contact.jpg'],
  },
  alternates: {
    canonical: 'https://trivexa.com/contact',
  },
  other: {
    'article:author': 'Trivexa Technologies',
    'article:publisher': 'https://trivexa.com',
    'article:section': 'Contact',
    'article:tag': 'contact, consultation, blockchain, enterprise, support',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </>
  )
}
