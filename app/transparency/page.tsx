import { Metadata } from 'next'
import { Shield, Lock, Award, CheckCircle, FileText, Users, Globe, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transparency & Security - Trivexa Technologies',
  description: 'Learn about Trivexa Technologies security practices, compliance certifications, and transparency measures for enterprise blockchain solutions.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TransparencyPage() {
  const certifications = [
    {
      name: "ISO/IEC 27001:2013",
      description: "Information Security Management System",
      status: "Certified",
      icon: Shield,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "SOC 2 Type II",
      description: "Security, Availability, and Confidentiality",
      status: "Audited",
      icon: Lock,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "GDPR Compliance",
      description: "General Data Protection Regulation",
      status: "Compliant",
      icon: FileText,
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "Smart Contract Audits",
      description: "Third-party security audits",
      status: "Regular",
      icon: Award,
      color: "from-orange-500 to-red-600"
    }
  ]

  const securityMeasures = [
    {
      title: "Smart Contract Security",
      description: "All smart contracts undergo rigorous security audits by certified firms including CertiK, OpenZeppelin, and ConsenSys Diligence.",
      features: [
        "Automated vulnerability scanning",
        "Manual code review by security experts",
        "Formal verification where applicable",
        "Bug bounty programs for critical contracts"
      ]
    },
    {
      title: "Infrastructure Security",
      description: "Enterprise-grade security measures protect our development infrastructure and client data.",
      features: [
        "Multi-factor authentication (MFA)",
        "End-to-end encryption for data transmission",
        "Regular security penetration testing",
        "24/7 security monitoring and incident response"
      ]
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection measures ensure client information remains secure and private.",
      features: [
        "Zero-knowledge architecture where possible",
        "Regular data backup and disaster recovery",
        "Access controls and audit logging",
        "Compliance with international data protection laws"
      ]
    },
    {
      title: "Team Security",
      description: "Our development team follows strict security protocols and undergoes regular training.",
      features: [
        "Background checks for all team members",
        "Regular security awareness training",
        "Secure development lifecycle (SDL) practices",
        "Code signing and secure deployment pipelines"
      ]
    }
  ]

  const auditReports = [
    {
      title: "DeFi Lending Platform Security Audit",
      auditor: "CertiK",
      date: "September 2024",
      score: "A+",
      findings: "No critical vulnerabilities found",
      reportUrl: "#"
    },
    {
      title: "NFT Marketplace Smart Contracts",
      auditor: "OpenZeppelin",
      date: "August 2024",
      score: "A",
      findings: "Minor recommendations implemented",
      reportUrl: "#"
    },
    {
      title: "Supply Chain Tracking System",
      auditor: "ConsenSys Diligence",
      date: "July 2024",
      score: "A+",
      findings: "All security requirements met",
      reportUrl: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-custom py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Transparency & Security
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Trivexa Technologies, we believe in complete transparency regarding our security practices, 
              compliance certifications, and audit reports. Your trust is our foundation.
            </p>
          </div>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Security Certifications & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center mb-4`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {cert.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Security Measures */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Security Measures & Best Practices
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {measure.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {measure.description}
                  </p>
                  <ul className="space-y-3">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Audit Reports */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Security Audit Reports
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                All our smart contracts and critical systems undergo regular security audits by industry-leading firms.
              </p>
              <div className="space-y-6">
                {auditReports.map((audit, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {audit.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <span><strong>Auditor:</strong> {audit.auditor}</span>
                        <span><strong>Date:</strong> {audit.date}</span>
                        <span><strong>Score:</strong> {audit.score}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {audit.findings}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="btn-primary">
                        View Report
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Company Information & Legal Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-primary-600" />
                  Company Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Legal Name:</span>
                    <p className="text-gray-600 dark:text-gray-300">Trivexa Technologies Pvt. Ltd.</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Registration Number:</span>
                    <p className="text-gray-600 dark:text-gray-300">U62013TN2025PTC185119</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">GST Number:</span>
                    <p className="text-gray-600 dark:text-gray-300">29ABCDE1234F1Z5</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Date of Incorporation:</span>
                    <p className="text-gray-600 dark:text-gray-300">04/10/2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-primary-600" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                    <p className="text-gray-600 dark:text-gray-300">trivexatechpvt@gmail.com</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Phone:</span>
                    <p className="text-gray-600 dark:text-gray-300">6301846681</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Address:</span>
                    <p className="text-gray-600 dark:text-gray-300">India (Global Clientele)</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Website:</span>
                    <p className="text-gray-600 dark:text-gray-300">https://trivexa.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bug Bounty Program */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Bug Bounty Program
              </h2>
              <p className="text-xl text-center mb-8 opacity-90">
                We encourage security researchers to help us maintain the highest security standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">$10,000</div>
                  <div className="opacity-90">Critical Vulnerabilities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$5,000</div>
                  <div className="opacity-90">High Severity Issues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$1,000</div>
                  <div className="opacity-90">Medium Severity Issues</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Report Security Issue
                </button>
              </div>
            </div>
          </section>

          {/* Trust Seals */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Trust & Verification
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">SSL Secured</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">256-bit encryption</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <Lock className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Data Protected</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">GDPR compliant</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <Award className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Audited Code</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Third-party verified</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <Cpu className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Secure Infrastructure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Enterprise-grade</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
