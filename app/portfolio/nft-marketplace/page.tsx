import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Globe, Users, DollarSign, TrendingUp, Shield, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'NFT Marketplace Case Study - Trivexa Technologies',
  description: 'Explore how we developed a full-featured NFT marketplace with minting, trading, and auction capabilities that achieved 100K+ NFTs and $5M+ trading volume.',
  keywords: [
    'nft marketplace development',
    'nft platform case study',
    'digital art marketplace',
    'nft minting platform',
    'blockchain marketplace',
    'nft trading platform'
  ],
  openGraph: {
    title: 'NFT Marketplace Case Study - Trivexa Technologies',
    description: 'Explore how we developed a full-featured NFT marketplace with minting, trading, and auction capabilities.',
    images: ['/og-nft-case-study.jpg'],
  },
}

export default function NFTMarketplaceCaseStudy() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-20">
        <div className="container-custom">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NFT Marketplace
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A full-featured NFT marketplace with minting, trading, and auction capabilities 
              for digital art and collectibles that achieved 100K+ NFTs and $5M+ trading volume.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                NFT
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Marketplace
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Digital Art
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Auctions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We developed a comprehensive NFT marketplace that enables artists and collectors to 
                mint, buy, sell, and trade digital assets. The platform features advanced auction 
                mechanisms, royalty systems, and seamless wallet integration.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The marketplace has successfully facilitated over 100,000 NFT transactions with 
                a total trading volume exceeding $5 million, serving thousands of artists and collectors.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">NFTs Minted</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">100K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Trading Volume</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">$5M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Growth Rate</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">500%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Active Users</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">5K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Ethereum', 'Next.js', 'OpenSea API', 'MetaMask', 'IPFS', 'Solidity', 'Web3.js', 'Node.js'].map((tech) => (
              <div key={tech} className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm">
                <span className="font-semibold text-gray-900 dark:text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NFT Minting",
                description: "Easy-to-use interface for creating and minting NFTs with metadata"
              },
              {
                title: "Auction System",
                description: "Advanced auction mechanisms with time-based and reserve pricing"
              },
              {
                title: "Royalty System",
                description: "Automatic royalty distribution to creators on secondary sales"
              },
              {
                title: "Wallet Integration",
                description: "Seamless integration with MetaMask and other popular wallets"
              },
              {
                title: "IPFS Storage",
                description: "Decentralized storage for NFT metadata and media files"
              },
              {
                title: "Analytics Dashboard",
                description: "Comprehensive analytics for creators and collectors"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Launch Your NFT Marketplace?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create a successful NFT marketplace that stands out in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
