import { Metadata } from 'next'
import ServiceHero from '@/components/services/individual/ServiceHero'
import ServiceFeatures from '@/components/services/individual/ServiceFeatures'
import ServiceProcess from '@/components/services/individual/ServiceProcess'
import ServiceTechnologies from '@/components/services/individual/ServiceTechnologies'
import ServiceCaseStudies from '@/components/services/individual/ServiceCaseStudies'
import ServiceFAQ from '@/components/services/individual/ServiceFAQ'
import CTASection from '@/components/services/individual/CTASection'

export const metadata: Metadata = {
  title: 'DApp Development - Decentralized Applications with Seamless UX',
  description: 'Build intuitive decentralized applications with seamless blockchain integration, wallet connectivity, and optimal user experience for Web3 applications.',
  keywords: [
    'dapp development',
    'decentralized applications',
    'web3 frontend development',
    'blockchain integration',
    'wallet connectivity',
    'metamask integration',
    'react dapp development',
    'next.js dapp',
    'web3 user experience',
    'dapp ui/ux design'
  ],
  openGraph: {
    title: 'DApp Development - Trivexa Technologies',
    description: 'Build intuitive decentralized applications with seamless blockchain integration, wallet connectivity, and optimal user experience for Web3 applications.',
    images: ['/og-dapp-development.jpg'],
  },
}

const serviceData = {
  title: "DApp Development",
  subtitle: "Decentralized Applications with Seamless UX",
  description: "Build intuitive decentralized applications with seamless blockchain integration, wallet connectivity, and optimal user experience for Web3 applications.",
  icon: "Smartphone",
  color: "from-orange-500 to-red-600",
  timeline: "3-6 months",
  startingPrice: "$30,000"
}

export default function DAppDevelopmentPage() {
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
