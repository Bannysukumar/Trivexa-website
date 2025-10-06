import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, Building, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Government Blockchain Solutions - Trivexa Technologies',
  description: 'Enhance government services with transparent voting systems, identity verification, and public record management. Achieve 100% transparency in government operations.',
  keywords: [
    'government blockchain solutions',
    'blockchain voting systems',
    'digital identity blockchain',
    'government transparency',
    'public records blockchain',
    'blockchain government services',
    'e-governance blockchain',
    'government digital transformation'
  ],
  openGraph: {
    title: 'Government Blockchain Solutions - Trivexa Technologies',
    description: 'Enhance government services with transparent voting systems, identity verification, and public record management.',
    images: ['/og-government-industry.jpg'],
  },
}

export default function GovernmentIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white py-20">
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
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Government
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Enhance government services with transparent voting systems, identity verification, 
              and public record management that achieve 100% transparency.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">100% Transparency Achieved</span>
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
                Modernizing Government
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Government agencies are embracing blockchain technology to enhance transparency, 
                security, and efficiency in public services. Our solutions provide secure voting 
                systems, digital identity management, and transparent public records.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We help government organizations achieve 100% transparency while improving 
                citizen trust and reducing administrative costs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Transparency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">70%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "Digital Identity", description: "Secure citizen identity verification" },
                  { title: "Voting Systems", description: "Transparent and secure electronic voting" },
                  { title: "Public Records", description: "Immutable government document management" },
                  { title: "Transparency", description: "Open government and public accountability" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
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
            Government Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Voting",
                description: "Secure and transparent electronic voting systems",
                icon: Building
              },
              {
                title: "Identity Management",
                description: "Digital citizen identity and authentication",
                icon: TrendingUp
              },
              {
                title: "Public Records",
                description: "Immutable government document storage",
                icon: Shield
              },
              {
                title: "Land Registry",
                description: "Transparent property ownership records",
                icon: Zap
              },
              {
                title: "Social Services",
                description: "Efficient benefit distribution and tracking",
                icon: Users
              },
              {
                title: "Tax Collection",
                description: "Automated and transparent tax processing",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-lg flex items-center justify-center mb-4">
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
            Why Choose Blockchain for Government?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description: "Complete transparency in government operations",
                stat: "100%"
              },
              {
                title: "Security",
                description: "Enhanced security for sensitive government data",
                stat: "A+"
              },
              {
                title: "Cost Reduction",
                description: "Reduce administrative costs and inefficiencies",
                stat: "70%"
              },
              {
                title: "Citizen Trust",
                description: "Build public confidence through transparency",
                stat: "95%"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-600 mb-4">{benefit.stat}</div>
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
            Ready to Modernize Your Government Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can achieve 100% transparency and modernize your government operations.
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
