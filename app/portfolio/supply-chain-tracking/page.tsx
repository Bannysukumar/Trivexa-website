import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Globe, Users, DollarSign, TrendingUp, Shield, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Supply Chain Tracking Case Study - Trivexa Technologies',
  description: 'Explore how we implemented a blockchain-based supply chain tracking system for pharmaceutical companies ensuring product authenticity with 99.9% accuracy.',
  keywords: [
    'supply chain blockchain',
    'pharmaceutical tracking',
    'blockchain supply chain',
    'product authenticity',
    'traceability solution',
    'blockchain logistics'
  ],
  openGraph: {
    title: 'Supply Chain Tracking Case Study - Trivexa Technologies',
    description: 'Explore how we implemented a blockchain-based supply chain tracking system for pharmaceutical companies.',
    images: ['/og-supply-chain-case-study.jpg'],
  },
}

export default function SupplyChainTrackingCaseStudy() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-20">
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
              Supply Chain Tracking
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A blockchain-based supply chain tracking system for pharmaceutical companies 
              ensuring product authenticity with 99.9% accuracy and 1M+ products tracked.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Supply Chain
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Pharmaceuticals
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Traceability
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Blockchain
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
                We developed a comprehensive blockchain-based supply chain tracking system 
                specifically designed for pharmaceutical companies. The system ensures complete 
                traceability from manufacturing to end consumer, preventing counterfeit products.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                The system has successfully tracked over 1 million pharmaceutical products 
                with 99.9% accuracy and serves 50+ partner organizations across the supply chain.
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
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Products Tracked</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">1M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Accuracy Rate</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Partner Organizations</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
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
            {['Hyperledger', 'React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'IoT Sensors'].map((tech) => (
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
                title: "End-to-End Tracking",
                description: "Complete visibility from manufacturing to end consumer delivery"
              },
              {
                title: "Counterfeit Prevention",
                description: "Advanced verification system to prevent counterfeit products"
              },
              {
                title: "Real-time Monitoring",
                description: "Live tracking with IoT sensors and blockchain verification"
              },
              {
                title: "Compliance Reporting",
                description: "Automated compliance reports for regulatory requirements"
              },
              {
                title: "Multi-party Access",
                description: "Secure access for all stakeholders in the supply chain"
              },
              {
                title: "Data Analytics",
                description: "Comprehensive analytics and insights for optimization"
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
            Ready to Secure Your Supply Chain?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement a secure, transparent, and efficient supply chain tracking solution.
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
