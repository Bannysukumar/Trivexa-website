import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, Home, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Blockchain Solutions - Trivexa Technologies',
  description: 'Streamline property transactions, tokenization, and ownership verification with blockchain solutions. Achieve 60% faster transactions in real estate.',
  keywords: [
    'real estate blockchain',
    'property tokenization',
    'blockchain real estate',
    'smart contracts real estate',
    'property ownership blockchain',
    'real estate transactions',
    'blockchain property records',
    'real estate automation'
  ],
  openGraph: {
    title: 'Real Estate Blockchain Solutions - Trivexa Technologies',
    description: 'Streamline property transactions, tokenization, and ownership verification with blockchain solutions.',
    images: ['/og-real-estate-industry.jpg'],
  },
}

export default function RealEstateIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-20">
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
                <Home className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Real Estate
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Streamline property transactions, tokenization, and ownership verification 
              with blockchain solutions that achieve 60% faster transactions.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">60% Faster Transactions</span>
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
                Revolutionizing Real Estate
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The real estate industry is undergoing digital transformation with blockchain technology. 
                Our solutions enable property tokenization, automated transactions, and immutable 
                ownership records, making real estate more accessible and efficient.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We help real estate companies achieve 60% faster transactions while reducing 
                costs and improving transparency in property dealings.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Faster Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "Property Tokenization", description: "Fractional ownership through digital tokens" },
                  { title: "Smart Contracts", description: "Automated property transactions and agreements" },
                  { title: "Ownership Records", description: "Immutable property ownership and history" },
                  { title: "Automated Transactions", description: "Streamlined buying and selling processes" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
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
            Real Estate Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Property Tokenization",
                description: "Fractional ownership and investment opportunities",
                icon: Home
              },
              {
                title: "Smart Contracts",
                description: "Automated lease agreements and property sales",
                icon: TrendingUp
              },
              {
                title: "Title Management",
                description: "Secure and transparent property title records",
                icon: Shield
              },
              {
                title: "Rental Management",
                description: "Automated rent collection and tenant management",
                icon: Zap
              },
              {
                title: "Property Investment",
                description: "Global real estate investment opportunities",
                icon: Users
              },
              {
                title: "Compliance",
                description: "Automated regulatory compliance and reporting",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
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
            Why Choose Blockchain for Real Estate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Faster Transactions",
                description: "Reduce transaction time by up to 60%",
                stat: "60%"
              },
              {
                title: "Cost Reduction",
                description: "Eliminate intermediaries and reduce fees",
                stat: "50%"
              },
              {
                title: "Transparency",
                description: "Complete transaction history and ownership records",
                stat: "100%"
              },
              {
                title: "Accessibility",
                description: "Fractional ownership and global investment",
                stat: "24/7"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-4">{benefit.stat}</div>
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
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can streamline your real estate operations and achieve 60% faster transactions.
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
