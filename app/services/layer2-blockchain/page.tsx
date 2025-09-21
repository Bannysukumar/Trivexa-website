import { Metadata } from 'next'
import ServiceHero from '@/components/services/individual/ServiceHero'
import ServiceFeatures from '@/components/services/individual/ServiceFeatures'
import ServiceProcess from '@/components/services/individual/ServiceProcess'
import ServiceTechnologies from '@/components/services/individual/ServiceTechnologies'
import ServiceCaseStudies from '@/components/services/individual/ServiceCaseStudies'
import ServiceFAQ from '@/components/services/individual/ServiceFAQ'
import CTASection from '@/components/services/individual/CTASection'

export const metadata: Metadata = {
  title: 'Layer-2 Blockchain Solutions - Scaling & Performance Optimization',
  description: 'Expert Layer-2 blockchain development including sidechains, state channels, rollups, and cross-chain bridges for enhanced performance and reduced costs.',
  keywords: [
    'layer-2 blockchain development',
    'sidechain development',
    'state channels',
    'rollup solutions',
    'cross-chain bridges',
    'blockchain scaling',
    'optimistic rollups',
    'zk rollups',
    'polygon development',
    'arbitrum development'
  ],
  openGraph: {
    title: 'Layer-2 Blockchain Solutions - Trivexa Technologies',
    description: 'Expert Layer-2 blockchain development including sidechains, state channels, rollups, and cross-chain bridges for enhanced performance and reduced costs.',
    images: ['/og-layer2-blockchain.jpg'],
  },
}

const serviceData = {
  title: "Layer-2 Blockchain Solutions",
  subtitle: "Scaling & Performance Optimization",
  description: "Implement advanced Layer-2 scaling solutions to enhance blockchain performance, reduce transaction costs, and improve user experience while maintaining security and decentralization.",
  icon: "Globe",
  color: "from-purple-500 to-violet-600",
  timeline: "2-5 months",
  startingPrice: "$40,000"
}

export default function Layer2BlockchainPage() {
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
