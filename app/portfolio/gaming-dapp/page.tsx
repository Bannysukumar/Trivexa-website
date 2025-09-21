import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Globe, Users, DollarSign, TrendingUp, Shield, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gaming DApp Case Study - Trivexa Technologies',
  description: 'Explore how we created a play-to-earn gaming DApp with NFT integration, token rewards, and multiplayer functionality that achieved 25K+ players and $2M+ rewards.',
  keywords: [
    'gaming dapp development',
    'play to earn game',
    'nft gaming platform',
    'blockchain game development',
    'web3 gaming',
    'token rewards gaming'
  ],
  openGraph: {
    title: 'Gaming DApp Case Study - Trivexa Technologies',
    description: 'Explore how we created a play-to-earn gaming DApp with NFT integration, token rewards, and multiplayer functionality.',
    images: ['/og-gaming-dapp-case-study.jpg'],
  },
}

export default function GamingDAppCaseStudy() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
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
              Gaming DApp
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A play-to-earn gaming DApp with NFT integration, token rewards, and multiplayer 
              functionality that achieved 25K+ players and $2M+ in rewards distributed.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Gaming
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                DApp
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Play-to-Earn
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                NFT Integration
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
                We developed an innovative play-to-earn gaming DApp that combines traditional gaming 
                mechanics with blockchain technology. Players can earn tokens, collect NFTs, and 
                participate in multiplayer battles while building their digital asset portfolio.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The game has successfully attracted over 25,000 active players and distributed 
                more than $2 million in token rewards, with 10x engagement rates compared to 
                traditional mobile games.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Play Game
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
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Active Players</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">25K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Rewards Distributed</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">$2M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Engagement Rate</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">10x</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Game Rating</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">4.8/5</span>
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
            {['Unity', 'Web3.js', 'Solidity', 'IPFS', 'React', 'Node.js', 'MongoDB', 'AWS'].map((tech) => (
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
                title: "Play-to-Earn Mechanics",
                description: "Players earn tokens and NFTs through gameplay achievements and battles"
              },
              {
                title: "NFT Integration",
                description: "Collectible characters, weapons, and items as tradeable NFTs"
              },
              {
                title: "Multiplayer Battles",
                description: "Real-time PvP battles with blockchain-based rewards and rankings"
              },
              {
                title: "Token Economy",
                description: "Dual-token system with utility and governance tokens"
              },
              {
                title: "Cross-Platform",
                description: "Available on web, mobile, and desktop with seamless progression"
              },
              {
                title: "Marketplace",
                description: "Built-in marketplace for trading NFTs and in-game assets"
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
            Ready to Build Your Gaming DApp?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create an engaging play-to-earn gaming experience that drives user engagement and revenue.
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
