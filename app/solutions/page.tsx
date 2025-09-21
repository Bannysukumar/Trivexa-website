import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import IndustriesWeServe from '@/components/home/IndustriesWeServe'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import StatsSection from '@/components/home/StatsSection'

export const metadata: Metadata = {
  title: 'Blockchain Solutions - Comprehensive Web3 & Blockchain Services',
  description: 'Explore our comprehensive blockchain solutions including Layer-1 & Layer-2 development, smart contracts, DApps, Web3 applications, and AI-powered blockchain solutions.',
  keywords: [
    'blockchain solutions',
    'web3 solutions',
    'blockchain consulting',
    'blockchain development services',
    'smart contract solutions',
    'dapp solutions',
    'defi solutions',
    'nft solutions',
    'blockchain integration',
    'blockchain strategy'
  ],
  openGraph: {
    title: 'Blockchain Solutions - Trivexa Technologies',
    description: 'Explore our comprehensive blockchain solutions including Layer-1 & Layer-2 development, smart contracts, DApps, Web3 applications, and AI-powered blockchain solutions.',
    images: ['/og-solutions.jpg'],
  },
}

export default function SolutionsPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesWeServe />
      <CaseStudiesPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
