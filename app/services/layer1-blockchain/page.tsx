import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import ServiceHero from '@/components/services/individual/ServiceHero'
import ServiceFeatures from '@/components/services/individual/ServiceFeatures'
import ServiceProcess from '@/components/services/individual/ServiceProcess'
import ServiceTechnologies from '@/components/services/individual/ServiceTechnologies'
import ServiceCaseStudies from '@/components/services/individual/ServiceCaseStudies'
import ServiceFAQ from '@/components/services/individual/ServiceFAQ'
import CTASection from '@/components/services/individual/CTASection'

export const metadata: Metadata = {
  title: 'Layer-1 Blockchain Development - Custom Blockchain Networks',
  description: 'Expert Layer-1 blockchain development services. Build custom blockchain networks with advanced consensus mechanisms, smart contracts, and governance systems.',
  keywords: [
    'layer-1 blockchain development',
    'custom blockchain development',
    'blockchain network development',
    'consensus mechanism development',
    'blockchain architecture',
    'blockchain protocol development',
    'custom blockchain solutions'
  ],
  openGraph: {
    title: 'Layer-1 Blockchain Development - Trivexa Technologies',
    description: 'Expert Layer-1 blockchain development services. Build custom blockchain networks with advanced consensus mechanisms, smart contracts, and governance systems.',
    images: ['/og-layer1-blockchain.jpg'],
  },
}

const serviceData = {
  title: "Layer-1 Blockchain Development",
  subtitle: "Build Custom Blockchain Networks from Scratch",
  description: "Create your own blockchain network with advanced consensus mechanisms, smart contract capabilities, and governance systems. Our expert team builds scalable, secure, and efficient Layer-1 blockchain solutions tailored to your specific requirements.",
  icon: "Database",
  color: "from-blue-500 to-cyan-600",
  timeline: "3-6 months",
  startingPrice: "$100,000"
}

export default function Layer1BlockchainPage() {
  return (
    <>
      <ServiceHero serviceData={serviceData} />
      <ServiceFeatures serviceData={serviceData} />
      <ServiceProcess serviceData={serviceData} />
      <ServiceTechnologies serviceData={serviceData} />
      <ServiceCaseStudies serviceData={serviceData} />
      <ServiceFAQ serviceData={serviceData} />
      <CTASection serviceData={serviceData} />
    </>
  )
}
