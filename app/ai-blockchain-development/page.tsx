import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { 
  Brain, 
  Code, 
  Zap, 
  Shield, 
  Rocket, 
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  Network
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Blockchain Development Services | AI Integration | Trivexa Technologies',
  description: 'Expert AI blockchain development services with AI integration. Automated smart contracts, AI-powered DApps, intelligent Web3 solutions, and AI blockchain consulting for enterprises.',
  keywords: [
    'AI blockchain development services',
    'AI blockchain integration',
    'AI smart contract development',
    'AI blockchain consulting',
    'automated blockchain development',
    'AI Web3 development',
    'AI blockchain programming',
    'AI blockchain automation',
    'AI for blockchain development',
    'AI blockchain solutions',
    'AI blockchain tools',
    'AI blockchain development company',
    'AI blockchain services',
    'AI blockchain development platform',
    'AI blockchain development tools'
  ],
}

export default function AIBlockchainDevelopmentPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Smart Contract Development',
      description: 'Automated smart contract generation using AI and advanced AI models for faster, more secure, and error-free development.',
      features: [
        'AI-integrated smart contract coding',
        'AI-powered code review and optimization',
        'Automated testing and security analysis',
        'Natural language to Solidity conversion'
      ]
    },
    {
      icon: Bot,
      title: 'AI Blockchain Integration',
      description: 'Seamless integration of AI technologies with blockchain networks for intelligent automation and decision-making.',
      features: [
        'AI blockchain node integration',
        'Intelligent transaction processing',
        'AI-powered consensus mechanisms',
        'Automated blockchain monitoring'
      ]
    },
    {
      icon: Code,
      title: 'AI DApp Development',
      description: 'Build intelligent decentralized applications with AI capabilities, natural language interfaces, and automated workflows.',
      features: [
        'AI-powered user interfaces',
        'Natural language DApp interactions',
        'Intelligent contract automation',
        'AI-driven user experience optimization'
      ]
    },
    {
      icon: Network,
      title: 'AI Web3 Solutions',
      description: 'Comprehensive AI-driven Web3 development including DeFi protocols, NFT platforms, and DAO governance systems.',
      features: [
        'AI-enhanced DeFi protocols',
        'Intelligent NFT marketplaces',
        'AI-powered DAO governance',
        'Automated Web3 security protocols'
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: '10x Faster Development',
      description: 'AI automation reduces development time from months to weeks'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'AI-powered security analysis and automated vulnerability detection'
    },
    {
      icon: Rocket,
      title: 'Cost Effective',
      description: 'Reduce development costs by up to 60% with AI automation'
    },
    {
      icon: Users,
      title: 'Expert AI Integration',
      description: 'Seamless AI and AI model integration for optimal performance'
    }
  ]

  const technologies = [
    'AI Integration',
    'OpenAI API',
    'Machine Learning Models',
    'Natural Language Processing',
    'AI Blockchain Analytics',
    'Automated Code Generation',
    'AI Security Protocols',
    'Intelligent Contract Testing'
  ]

  return (
    <>
      <Script
        id="ai-blockchain-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Blockchain Development Services",
            "description": "Expert AI blockchain development services with AI integration. Automated smart contracts, AI-powered DApps, intelligent Web3 solutions, and AI blockchain consulting for enterprises.",
            "provider": {
              "@type": "Organization",
              "name": "Trivexa Technologies",
              "url": "https://trivexa.com"
            },
            "offers": {
              "@type": "Offer",
              "description": "AI blockchain development services for enterprises and startups"
            }
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass-effect text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Leading AI Blockchain Development Company</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              AI-Powered{' '}
              <span className="gradient-text">Blockchain Development</span>{' '}
              with AI Integration
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Transform your blockchain development with cutting-edge AI technologies. 
              Our AI-integrated solutions deliver automated smart contracts, 
              intelligent DApps, and AI-driven Web3 platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://wa.me/6301846681?text=Hi%20Trivexa%20Technologies!%20I'm%20interested%20in%20AI%20blockchain%20development%20services.%20Can%20you%20help%20me%20get%20started?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center group text-lg font-semibold"
              >
                <span>Start AI Blockchain Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary flex items-center justify-center group text-lg font-semibold"
              >
                <span>View AI Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Blockchain Development Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered blockchain solutions that revolutionize development 
              processes and deliver intelligent, automated Web3 applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover-lift group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose AI Blockchain Development?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of blockchain development with AI-powered automation, 
              enhanced security, and intelligent optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
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

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technologies and frameworks that power our blockchain development solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl text-center hover-lift group">
                <Cpu className="w-12 h-12 text-primary-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Blockchain Development?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Join Fortune 500 companies who trust Trivexa Technologies for AI-powered 
            blockchain development. Get started with AI integration today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://wa.me/6301846681?text=Hi%20Trivexa%20Technologies!%20I'm%20interested%20in%20AI%20blockchain%20development%20services.%20Can%20you%20help%20me%20get%20started?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group"
            >
              <span>Start Your AI Blockchain Project</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
