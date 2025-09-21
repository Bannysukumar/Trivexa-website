import { Metadata } from 'next'
import ServiceHero from '@/components/services/individual/ServiceHero'
import ServiceFeatures from '@/components/services/individual/ServiceFeatures'
import ServiceProcess from '@/components/services/individual/ServiceProcess'
import ServiceTechnologies from '@/components/services/individual/ServiceTechnologies'
import ServiceCaseStudies from '@/components/services/individual/ServiceCaseStudies'
import ServiceFAQ from '@/components/services/individual/ServiceFAQ'
import CTASection from '@/components/services/individual/CTASection'

export const metadata: Metadata = {
  title: 'AI-Powered Solutions - Intelligent Blockchain Applications',
  description: 'Integrate artificial intelligence and machine learning capabilities into blockchain applications for enhanced functionality, automation, and intelligent decision-making.',
  keywords: [
    'ai blockchain integration',
    'machine learning blockchain',
    'artificial intelligence solutions',
    'predictive analytics blockchain',
    'automated blockchain systems',
    'nlp blockchain applications',
    'computer vision blockchain',
    'ai-powered smart contracts',
    'blockchain ai consulting',
    'intelligent dapps'
  ],
  openGraph: {
    title: 'AI-Powered Solutions - Trivexa Technologies',
    description: 'Integrate artificial intelligence and machine learning capabilities into blockchain applications for enhanced functionality, automation, and intelligent decision-making.',
    images: ['/og-ai-solutions.jpg'],
  },
}

const serviceData = {
  title: "AI-Powered Solutions",
  subtitle: "Intelligent Blockchain Applications",
  description: "Integrate artificial intelligence and machine learning capabilities into blockchain applications for enhanced functionality, automation, and intelligent decision-making.",
  icon: "Bot",
  color: "from-indigo-500 to-blue-600",
  timeline: "2-4 months",
  startingPrice: "$25,000"
}

export default function AISolutionsPage() {
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
