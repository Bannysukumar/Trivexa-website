import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-commerce Blockchain Solutions - Trivexa Technologies',
  description: 'Build secure, transparent e-commerce platforms with blockchain-based payment systems and loyalty programs. Achieve 80% trust increase in e-commerce.',
  keywords: [
    'ecommerce blockchain solutions',
    'blockchain ecommerce platform',
    'secure ecommerce payments',
    'blockchain loyalty programs',
    'ecommerce product authentication',
    'blockchain supply chain ecommerce',
    'decentralized ecommerce',
    'blockchain marketplace development'
  ],
  openGraph: {
    title: 'E-commerce Blockchain Solutions - Trivexa Technologies',
    description: 'Build secure, transparent e-commerce platforms with blockchain-based payment systems and loyalty programs.',
    images: ['/og-ecommerce-industry.jpg'],
  },
}

export default function EcommerceIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20">
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
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                E-commerce
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Build secure, transparent e-commerce platforms with blockchain-based payment systems 
              and loyalty programs that achieve 80% trust increase.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">80% Trust Increase</span>
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
                Transforming E-commerce
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                E-commerce businesses face challenges with trust, security, and customer loyalty. 
                Our blockchain solutions provide secure payment systems, product authentication, 
                and transparent supply chains that build customer confidence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We help e-commerce companies achieve 80% trust increase while reducing fraud 
                and improving customer satisfaction through transparent operations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Trust Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Fraud Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "Secure Payments", description: "Blockchain-based payment processing" },
                  { title: "Loyalty Programs", description: "Tokenized rewards and loyalty points" },
                  { title: "Product Authentication", description: "Verify product authenticity and origin" },
                  { title: "Supply Chain", description: "Transparent product tracking and sourcing" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
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
            E-commerce Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Payments",
                description: "Cryptocurrency and stablecoin payment processing",
                icon: ShoppingCart
              },
              {
                title: "Loyalty Programs",
                description: "Tokenized rewards and customer retention",
                icon: TrendingUp
              },
              {
                title: "Product Authentication",
                description: "Verify luxury goods and prevent counterfeiting",
                icon: Shield
              },
              {
                title: "Supply Chain Tracking",
                description: "Transparent product sourcing and delivery",
                icon: Zap
              },
              {
                title: "Marketplace Development",
                description: "Decentralized e-commerce platforms",
                icon: Users
              },
              {
                title: "Customer Reviews",
                description: "Immutable and verified customer feedback",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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
            Why Choose Blockchain for E-commerce?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trust Increase",
                description: "Build customer confidence through transparency",
                stat: "80%"
              },
              {
                title: "Fraud Reduction",
                description: "Prevent counterfeit products and payment fraud",
                stat: "90%"
              },
              {
                title: "Cost Savings",
                description: "Reduce payment processing and operational costs",
                stat: "60%"
              },
              {
                title: "Global Reach",
                description: "Accept payments from customers worldwide",
                stat: "24/7"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-4">{benefit.stat}</div>
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
            Ready to Build Trust in Your E-commerce?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can increase customer trust by 80% and reduce fraud in your e-commerce operations.
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
