import { Metadata } from 'next'
import HomeWithSplash from '@/components/home/HomeWithSplash'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'AI Blockchain Development Company | AI for Blockchain | Trivexa Technologies',
  description: 'Leading AI blockchain development company offering AI-powered blockchain solutions, AI smart contracts, automated DApp development, and AI-driven Web3 technologies. Trusted by Fortune 500 companies.',
  keywords: [
    'AI blockchain development',
    'AI blockchain development',
    'AI smart contracts',
    'AI blockchain solutions',
    'AI Web3 development',
    'AI DApp development',
    'blockchain AI integration',
    'AI blockchain consulting',
    'automated blockchain development',
    'AI blockchain tools',
    'AI for blockchain',
    'AI blockchain programming',
    'AI blockchain automation',
    'AI blockchain services',
    'AI blockchain development company'
  ],
}

export default function HomePage() {
  return <HomeWithSplash />
}