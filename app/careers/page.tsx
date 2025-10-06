import { Metadata } from 'next'
import CareersHero from '@/components/careers/CareersHero'

export const dynamic = 'force-dynamic'

import CareersBenefits from '@/components/careers/CareersBenefits'
import CareersOpenings from '@/components/careers/CareersOpenings'
import CareersCulture from '@/components/careers/CareersCulture'
import CareersApplication from '@/components/careers/CareersApplication'

export const metadata: Metadata = {
  title: 'Careers - Join Our Blockchain Development Team',
  description: 'Join Trivexa Technologies and be part of the blockchain revolution. Explore career opportunities in blockchain development, smart contracts, and Web3 technologies.',
  keywords: [
    'blockchain careers',
    'blockchain developer jobs',
    'smart contract developer',
    'web3 developer jobs',
    'blockchain engineer',
    'defi developer',
    'nft developer',
    'blockchain jobs india'
  ],
  openGraph: {
    title: 'Careers - Join Trivexa Technologies Blockchain Team',
    description: 'Join Trivexa Technologies and be part of the blockchain revolution. Explore career opportunities in blockchain development, smart contracts, and Web3 technologies.',
    images: ['/og-careers.jpg'],
  },
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersBenefits />
      <CareersOpenings />
      <CareersCulture />
      <CareersApplication />
    </>
  )
}
