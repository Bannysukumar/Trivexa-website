import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'

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
  return (
    <>
      <HeroSection />
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Trivexa Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your premier blockchain development partner
          </p>
        </div>
      </div>
    </>
  )
}