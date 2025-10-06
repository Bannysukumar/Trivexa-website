import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, Truck, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Supply Chain Blockchain Solutions - Trivexa Technologies',
  description: 'Enhance transparency and traceability across supply chains with immutable record-keeping and smart contracts. Achieve 95% transparency in supply chain operations.',
  keywords: [
    'supply chain blockchain',
    'blockchain traceability',
    'supply chain transparency',
    'product tracking blockchain',
    'blockchain logistics',
    'supply chain compliance',
    'blockchain quality assurance',
    'supply chain management'
  ],
  openGraph: {
    title: 'Supply Chain Blockchain Solutions - Trivexa Technologies',
    description: 'Enhance transparency and traceability across supply chains with immutable record-keeping and smart contracts.',
    images: ['/og-supply-chain-industry.jpg'],
  },
}

export default function SupplyChainIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-20">
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
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Supply Chain
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Enhance transparency and traceability across supply chains with immutable record-keeping 
              and smart contracts that achieve 95% transparency.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">95% Transparency Achieved</span>
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
                Transforming Supply Chains
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Modern supply chains are complex networks involving multiple stakeholders, 
                making transparency and traceability challenging. Our blockchain solutions 
                provide immutable records, real-time tracking, and automated compliance 
                across the entire supply chain.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We help organizations achieve 95% transparency while reducing fraud, 
                improving quality assurance, and ensuring regulatory compliance.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Transparency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "Product Tracking", description: "End-to-end product traceability from origin to consumer" },
                  { title: "Quality Assurance", description: "Automated quality control and compliance monitoring" },
                  { title: "Compliance", description: "Regulatory compliance and audit trail management" },
                  { title: "Transparency", description: "Real-time visibility into supply chain operations" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
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
            Supply Chain Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Food Safety",
                description: "Track food products from farm to table for safety compliance",
                icon: Truck
              },
              {
                title: "Pharmaceuticals",
                description: "Ensure drug authenticity and prevent counterfeiting",
                icon: TrendingUp
              },
              {
                title: "Luxury Goods",
                description: "Authenticate luxury items and prevent counterfeiting",
                icon: Shield
              },
              {
                title: "Automotive",
                description: "Track parts and components for quality assurance",
                icon: Zap
              },
              {
                title: "Textiles",
                description: "Ensure ethical sourcing and sustainable practices",
                icon: Users
              },
              {
                title: "Electronics",
                description: "Track components and ensure conflict-free sourcing",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
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
            Why Choose Blockchain for Supply Chain?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description: "Complete visibility into supply chain operations",
                stat: "95%"
              },
              {
                title: "Traceability",
                description: "End-to-end product tracking and provenance",
                stat: "100%"
              },
              {
                title: "Compliance",
                description: "Automated regulatory compliance and reporting",
                stat: "100%"
              },
              {
                title: "Efficiency",
                description: "Reduced manual processes and human error",
                stat: "80%"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.stat}</div>
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
            Ready to Enhance Your Supply Chain?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can provide 95% transparency and complete traceability for your supply chain operations.
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
