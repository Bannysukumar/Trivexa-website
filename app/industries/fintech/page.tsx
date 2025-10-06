import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, DollarSign, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fintech & DeFi Blockchain Solutions - Trivexa Technologies',
  description: 'Revolutionize financial services with our blockchain solutions including DeFi protocols, payment systems, digital wallets, and trading platforms. 90% cost reduction achieved.',
  keywords: [
    'fintech blockchain solutions',
    'defi development',
    'blockchain payment systems',
    'digital wallet development',
    'trading platform development',
    'blockchain finance',
    'cryptocurrency solutions',
    'decentralized finance'
  ],
  openGraph: {
    title: 'Fintech & DeFi Blockchain Solutions - Trivexa Technologies',
    description: 'Revolutionize financial services with our blockchain solutions including DeFi protocols, payment systems, digital wallets, and trading platforms.',
    images: ['/og-fintech-industry.jpg'],
  },
}

export default function FintechIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20">
        <div className="container-custom">
          <Link 
            href="/industries" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industries
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Fintech & DeFi
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Revolutionize financial services with decentralized finance solutions, payment systems, 
              and digital asset management that achieve 90% cost reduction.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">90% Cost Reduction Achieved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Transforming Financial Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The financial technology sector is experiencing unprecedented transformation through blockchain technology. 
                Our solutions enable traditional financial institutions and fintech startups to leverage decentralized 
                finance protocols, smart contracts, and digital asset management.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We help organizations reduce operational costs by up to 90% while improving security, 
                transparency, and user experience in financial services.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "DeFi Protocols", description: "Decentralized lending, borrowing, and yield farming" },
                  { title: "Payment Solutions", description: "Cross-border payments and remittances" },
                  { title: "Digital Wallets", description: "Secure multi-currency wallet solutions" },
                  { title: "Trading Platforms", description: "DEX and CEX development" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{solution.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Fintech Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Decentralized Lending",
                description: "Peer-to-peer lending platforms with automated smart contracts",
                icon: DollarSign
              },
              {
                title: "Cross-Border Payments",
                description: "Instant, low-cost international money transfers",
                icon: TrendingUp
              },
              {
                title: "Digital Asset Management",
                description: "Portfolio management and automated trading strategies",
                icon: Shield
              },
              {
                title: "Stablecoin Development",
                description: "Fiat-backed and algorithmic stablecoin solutions",
                icon: Zap
              },
              {
                title: "Insurance Protocols",
                description: "Decentralized insurance and risk management",
                icon: Users
              },
              {
                title: "Compliance & KYC",
                description: "Automated compliance and identity verification",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Blockchain for Fintech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cost Reduction",
                description: "Eliminate intermediaries and reduce transaction costs by up to 90%",
                stat: "90%"
              },
              {
                title: "Enhanced Security",
                description: "Cryptographic security and immutable transaction records",
                stat: "99.9%"
              },
              {
                title: "Global Access",
                description: "24/7 access to financial services worldwide",
                stat: "24/7"
              },
              {
                title: "Transparency",
                description: "Complete transaction transparency and audit trails",
                stat: "100%"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
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
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can revolutionize your fintech operations and reduce costs by up to 90%.
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
              href="/industries"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
