import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServicePricing from '@/components/services/ServicePricing'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import CTASection from '@/components/services/CTASection'

export const metadata: Metadata = {
  title: 'Blockchain Development Services - Comprehensive Web3 Solutions',
  description: 'Expert blockchain development services including Layer-1 & Layer-2 solutions, smart contracts, DApps, Web3 development, and AI-powered blockchain solutions.',
  keywords: [
    'blockchain development services',
    'layer-1 blockchain development',
    'layer-2 blockchain solutions',
    'smart contract development',
    'dapp development',
    'web3 development',
    'blockchain consulting',
    'defi development',
    'nft development',
    'blockchain solutions'
  ],
  openGraph: {
    title: 'Blockchain Development Services - Trivexa Technologies',
    description: 'Expert blockchain development services including Layer-1 & Layer-2 solutions, smart contracts, DApps, Web3 development, and AI-powered blockchain solutions.',
    images: ['/og-services.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicePricing />
      <ServiceFAQ />
      <CTASection />
    </>
  )
}
