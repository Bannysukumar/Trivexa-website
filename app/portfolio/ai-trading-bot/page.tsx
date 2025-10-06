import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Globe, Users, DollarSign, TrendingUp, Shield, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Trading Bot Case Study - Trivexa Technologies',
  description: 'Explore how we developed an AI-powered trading bot with machine learning algorithms for automated cryptocurrency trading that achieved 150% ROI and 85% accuracy.',
  keywords: [
    'ai trading bot development',
    'machine learning trading',
    'cryptocurrency trading bot',
    'automated trading system',
    'ai financial technology',
    'algorithmic trading'
  ],
  openGraph: {
    title: 'AI Trading Bot Case Study - Trivexa Technologies',
    description: 'Explore how we developed an AI-powered trading bot with machine learning algorithms for automated cryptocurrency trading.',
    images: ['/og-ai-trading-bot-case-study.jpg'],
  },
}

export default function AITradingBotCaseStudy() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20">
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
              AI Trading Bot
            </h1>
            <p className="text-xl text-white/90 mb-8">
              An AI-powered trading bot with machine learning algorithms for automated 
              cryptocurrency trading that achieved 150% ROI and 85% accuracy across 10K+ trades.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                AI/ML
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Trading Bot
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Cryptocurrency
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Automation
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
                We developed an advanced AI-powered trading bot that uses machine learning algorithms 
                to analyze market data, predict price movements, and execute automated trades. The bot 
                combines technical analysis, sentiment analysis, and deep learning models for optimal performance.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The trading bot has successfully executed over 10,000 trades with an 85% accuracy rate 
                and generated 150% ROI for users, outperforming traditional trading strategies.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  View Dashboard
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
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">ROI</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">150%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Accuracy Rate</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Trades Executed</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">10K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Uptime</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">99.9%</span>
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
            {['Python', 'TensorFlow', 'Web3.js', 'APIs', 'Pandas', 'NumPy', 'Docker', 'AWS'].map((tech) => (
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
                title: "Machine Learning Models",
                description: "Advanced ML algorithms for price prediction and market analysis"
              },
              {
                title: "Real-time Trading",
                description: "Automated trade execution with sub-second response times"
              },
              {
                title: "Risk Management",
                description: "Built-in risk controls and portfolio diversification strategies"
              },
              {
                title: "Multi-Exchange Support",
                description: "Integration with major cryptocurrency exchanges"
              },
              {
                title: "Sentiment Analysis",
                description: "Social media and news sentiment analysis for market insights"
              },
              {
                title: "Performance Analytics",
                description: "Comprehensive dashboard with trading performance metrics"
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
            Ready to Build Your AI Trading Solution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create an AI-powered trading system that maximizes your investment returns.
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
