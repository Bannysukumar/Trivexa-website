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
  title: 'Industries We Serve - Blockchain Solutions for Every Sector',
  description: 'Discover how Trivexa Technologies provides blockchain solutions across various industries including finance, healthcare, supply chain, real estate, gaming, and more.',
  keywords: [
    'blockchain industries',
    'blockchain finance',
    'blockchain healthcare',
    'blockchain supply chain',
    'blockchain real estate',
    'blockchain gaming',
    'blockchain education',
    'blockchain government',
    'blockchain energy',
    'blockchain retail'
  ],
  openGraph: {
    title: 'Industries We Serve - Trivexa Technologies',
    description: 'Discover how Trivexa Technologies provides blockchain solutions across various industries including finance, healthcare, supply chain, real estate, gaming, and more.',
    images: ['/og-industries.jpg'],
  },
}

export default function IndustriesPage() {
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
