import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Heart, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Blockchain Solutions - Trivexa Technologies',
  description: 'Secure patient data management, drug traceability, and medical record systems with blockchain technology. Achieve 100% data integrity in healthcare.',
  keywords: [
    'healthcare blockchain solutions',
    'patient data management',
    'drug traceability blockchain',
    'medical records blockchain',
    'healthcare data security',
    'clinical trials blockchain',
    'pharmaceutical blockchain',
    'healthcare interoperability'
  ],
  openGraph: {
    title: 'Healthcare Blockchain Solutions - Trivexa Technologies',
    description: 'Secure patient data management, drug traceability, and medical record systems with blockchain technology.',
    images: ['/og-healthcare-industry.jpg'],
  },
}

export default function HealthcareIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-20">
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Healthcare
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Secure patient data management, drug traceability, and medical record systems 
              with blockchain technology that ensures 100% data integrity.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">100% Data Integrity Achieved</span>
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
                Revolutionizing Healthcare
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Healthcare organizations face critical challenges in data security, interoperability, 
                and patient privacy. Our blockchain solutions provide immutable, secure, and 
                transparent systems for managing patient data, drug traceability, and medical records.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We ensure 100% data integrity while maintaining HIPAA compliance and enabling 
                seamless interoperability between healthcare providers.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Data Integrity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">HIPAA</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Compliant</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "Patient Records", description: "Secure, interoperable patient data management" },
                  { title: "Drug Traceability", description: "End-to-end pharmaceutical supply chain tracking" },
                  { title: "Clinical Trials", description: "Transparent and tamper-proof trial data" },
                  { title: "Data Security", description: "Encrypted, immutable medical data storage" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
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
            Healthcare Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Electronic Health Records",
                description: "Secure, interoperable patient data across healthcare providers",
                icon: Heart
              },
              {
                title: "Drug Supply Chain",
                description: "Track pharmaceuticals from manufacturer to patient",
                icon: TrendingUp
              },
              {
                title: "Clinical Trial Management",
                description: "Transparent and auditable clinical trial data",
                icon: Shield
              },
              {
                title: "Medical Device Tracking",
                description: "Monitor medical devices and equipment lifecycle",
                icon: Zap
              },
              {
                title: "Insurance Claims",
                description: "Automated, fraud-resistant insurance processing",
                icon: Users
              },
              {
                title: "Telemedicine",
                description: "Secure remote healthcare consultations",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
            Why Choose Blockchain for Healthcare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Data Integrity",
                description: "Immutable medical records with 100% data integrity",
                stat: "100%"
              },
              {
                title: "Security",
                description: "End-to-end encryption and secure data sharing",
                stat: "A+"
              },
              {
                title: "Interoperability",
                description: "Seamless data exchange between healthcare systems",
                stat: "100%"
              },
              {
                title: "Compliance",
                description: "HIPAA, GDPR, and other regulatory compliance",
                stat: "100%"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-4">{benefit.stat}</div>
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
            Ready to Secure Your Healthcare Data?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can ensure 100% data integrity and HIPAA compliance for your healthcare organization.
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
