import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'

export const metadata: Metadata = {
  title: 'Trivexa Technologies - Enterprise Blockchain Solutions & Web3 Development Company',
  description: 'Leading enterprise blockchain development company trusted by Fortune 500 companies worldwide. Expert blockchain solutions, smart contracts, DApps, DeFi, NFT platforms, and Web3 technologies.',
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