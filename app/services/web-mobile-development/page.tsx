import { Metadata } from 'next'
import ServiceHero from '@/components/services/individual/ServiceHero'
import ServiceFeatures from '@/components/services/individual/ServiceFeatures'
import ServiceProcess from '@/components/services/individual/ServiceProcess'
import ServiceTechnologies from '@/components/services/individual/ServiceTechnologies'
import ServiceCaseStudies from '@/components/services/individual/ServiceCaseStudies'
import ServiceFAQ from '@/components/services/individual/ServiceFAQ'
import CTASection from '@/components/services/individual/CTASection'

export const metadata: Metadata = {
  title: 'Web & Mobile Development - Modern Applications for All Platforms',
  description: 'Develop responsive web applications and native mobile apps for iOS and Android with modern frameworks, technologies, and cross-platform solutions.',
  keywords: [
    'web development',
    'mobile app development',
    'react development',
    'next.js development',
    'react native development',
    'ios app development',
    'android app development',
    'progressive web apps',
    'cross-platform development',
    'responsive web design'
  ],
  openGraph: {
    title: 'Web & Mobile Development - Trivexa Technologies',
    description: 'Develop responsive web applications and native mobile apps for iOS and Android with modern frameworks, technologies, and cross-platform solutions.',
    images: ['/og-web-mobile-development.jpg'],
  },
}

const serviceData = {
  title: "Web & Mobile Development",
  subtitle: "Modern Applications for All Platforms",
  description: "Develop responsive web applications and native mobile apps for iOS and Android with modern frameworks, technologies, and cross-platform solutions.",
  icon: "Globe",
  color: "from-pink-500 to-rose-600",
  timeline: "2-4 months",
  startingPrice: "$20,000"
}

export default function WebMobileDevelopmentPage() {
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
