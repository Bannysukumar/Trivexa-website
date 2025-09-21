import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import TeamSection from '@/components/about/TeamSection'
import ValuesSection from '@/components/about/ValuesSection'
import StatsSection from '@/components/about/StatsSection'
import CTASection from '@/components/about/CTASection'

export const metadata: Metadata = {
  title: 'About Us - Leading Blockchain Development Company',
  description: 'Learn about Trivexa Technologies, a leading blockchain development company with expert team, innovative solutions, and proven track record in Web3 technologies.',
  keywords: [
    'about trivexa technologies',
    'blockchain development company',
    'blockchain team',
    'web3 experts',
    'blockchain consultants',
    'trivexa team',
    'blockchain company india'
  ],
  openGraph: {
    title: 'About Trivexa Technologies - Leading Blockchain Development Company',
    description: 'Learn about Trivexa Technologies, a leading blockchain development company with expert team, innovative solutions, and proven track record in Web3 technologies.',
    images: ['/og-about.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <TeamSection />
      <ValuesSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
