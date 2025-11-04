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
  title: 'AI Automation Services - Intelligent Automation Solutions',
  description: 'Expert AI automation services including workflow automation, intelligent document processing, customer service automation, and AI-powered business process optimization.',
  keywords: [
    'ai automation services',
    'workflow automation',
    'intelligent automation',
    'ai process automation',
    'robotic process automation',
    'ai document processing',
    'customer service automation',
    'business process automation',
    'ai integration services',
    'automated systems'
  ],
  openGraph: {
    title: 'AI Automation Services - Trivexa Technologies',
    description: 'Expert AI automation services including workflow automation, intelligent document processing, customer service automation, and AI-powered business process optimization.',
    images: ['/og-ai-automation.jpg'],
  },
}

const serviceData = {
  title: "AI Automation Services",
  subtitle: "Intelligent Automation Solutions",
  description: "Transform your business operations with AI-powered automation. We build intelligent systems that automate workflows, process documents, handle customer interactions, and optimize business processes.",
  icon: "Zap",
  color: "from-violet-500 to-purple-600",
  timeline: "1-3 months",
  startingPrice: "$15,000"
}

export default function AIAutomationPage() {
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

