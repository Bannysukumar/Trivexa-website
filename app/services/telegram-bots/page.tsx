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
  title: 'Telegram Bots Development - Custom Telegram Bot Solutions',
  description: 'Expert Telegram bot development services including automated workflows, payment integration, AI chatbots, and custom bot solutions for businesses.',
  keywords: [
    'telegram bot development',
    'telegram bot programming',
    'telegram bot api',
    'telegram automation',
    'telegram chatbot',
    'telegram bot integration',
    'telegram payment bot',
    'telegram crypto bot',
    'telegram bot services',
    'custom telegram bots'
  ],
  openGraph: {
    title: 'Telegram Bots Development - Trivexa Technologies',
    description: 'Expert Telegram bot development services including automated workflows, payment integration, AI chatbots, and custom bot solutions for businesses.',
    images: ['/og-telegram-bots.jpg'],
  },
}

const serviceData = {
  title: "Telegram Bots Development",
  subtitle: "Custom Telegram Bot Solutions",
  description: "Build powerful Telegram bots for automation, customer support, payments, notifications, and business workflows. Our expert team creates custom bots tailored to your specific needs.",
  icon: "MessageCircle",
  color: "from-cyan-500 to-blue-600",
  timeline: "2-4 weeks",
  startingPrice: "$5,000"
}

export default function TelegramBotsPage() {
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

