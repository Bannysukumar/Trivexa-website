import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Globe, Users, DollarSign, TrendingUp, Shield, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DeFi Lending Platform Case Study - Trivexa Technologies',
  description: 'Explore how we built a comprehensive DeFi lending platform with smart contracts, yield farming, and automated market making capabilities that achieved $50M+ TVL.',
  keywords: [
    'defi lending platform',
    'defi development case study',
    'yield farming platform',
    'automated market making',
    'smart contract development',
    'blockchain lending solution'
  ],
  openGraph: {
    title: 'DeFi Lending Platform Case Study - Trivexa Technologies',
    description: 'Explore how we built a comprehensive DeFi lending platform with smart contracts, yield farming, and automated market making capabilities.',
    images: ['/og-defi-case-study.jpg'],
  },
}

export default function DeFiLendingPlatformCaseStudy() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20">
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
              DeFi Lending Platform
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A comprehensive DeFi lending platform with smart contracts, yield farming, 
              and automated market making capabilities that achieved $50M+ TVL.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                DeFi
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Smart Contracts
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Yield Farming
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                AMM
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
                We developed a comprehensive DeFi lending platform that allows users to lend, borrow, 
                and earn yield on their cryptocurrency assets. The platform features automated market 
                making, yield farming strategies, and advanced risk management.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The platform has successfully processed over $50M in total value locked (TVL) and 
                serves more than 10,000 active users across multiple blockchain networks.
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
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Total Value Locked</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">$50M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Active Users</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">10K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Growth Rate</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Security Score</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">A+</span>
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
            {['Solidity', 'React', 'Web3.js', 'IPFS', 'Node.js', 'MongoDB', 'Docker', 'AWS'].map((tech) => (
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
                title: "Smart Contract Lending",
                description: "Automated lending and borrowing with interest rate optimization"
              },
              {
                title: "Yield Farming",
                description: "Automated yield farming strategies across multiple protocols"
              },
              {
                title: "AMM Integration",
                description: "Automated market making for optimal liquidity provision"
              },
              {
                title: "Risk Management",
                description: "Advanced risk assessment and liquidation mechanisms"
              },
              {
                title: "Multi-Chain Support",
                description: "Support for Ethereum, Polygon, and BSC networks"
              },
              {
                title: "Governance Token",
                description: "Community governance with voting and proposal system"
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
            Ready to Build Your DeFi Platform?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create a secure, scalable, and profitable DeFi solution.
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
