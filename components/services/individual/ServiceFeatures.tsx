"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CheckCircle, 
  Shield,
  Zap,
  Users,
  Clock,
  Award,
  Code,
  Database
} from 'lucide-react'

interface ServiceData {
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  timeline: string
  startingPrice: string
}

interface ServiceFeaturesProps {
  serviceData: ServiceData
}

const getServiceFeatures = (serviceTitle: string) => {
  const featuresMap: { [key: string]: any[] } = {
    "Layer-1 Blockchain Development": [
      {
        icon: Database,
        title: "Custom Consensus Mechanisms",
        description: "Implement Proof of Work, Proof of Stake, or custom consensus algorithms tailored to your needs."
      },
      {
        icon: Shield,
        title: "Advanced Security",
        description: "Built-in security features with comprehensive audit trails and encryption protocols."
      },
      {
        icon: Zap,
        title: "High Performance",
        description: "Optimized for speed and scalability with efficient transaction processing."
      },
      {
        icon: Users,
        title: "Governance Systems",
        description: "Decentralized governance mechanisms for community-driven decision making."
      },
      {
        icon: Code,
        title: "Smart Contract Support",
        description: "Native smart contract capabilities with custom virtual machine implementation."
      },
      {
        icon: Award,
        title: "Token Standards",
        description: "Custom token standards and economics designed for your specific use case."
      }
    ],
    "Layer-2 Blockchain Solutions": [
      {
        icon: Zap,
        title: "Scalability Solutions",
        description: "Implement sidechains, state channels, and rollups for enhanced performance."
      },
      {
        icon: Shield,
        title: "Security Guarantees",
        description: "Maintain security of the underlying Layer-1 while improving scalability."
      },
      {
        icon: Clock,
        title: "Fast Transactions",
        description: "Near-instant transaction finality with reduced confirmation times."
      },
      {
        icon: Database,
        title: "Cross-chain Bridges",
        description: "Seamless interoperability between different blockchain networks."
      },
      {
        icon: Users,
        title: "Cost Optimization",
        description: "Significantly reduced transaction fees and gas costs."
      },
      {
        icon: Code,
        title: "Developer Friendly",
        description: "Easy integration with existing applications and development tools."
      }
    ],
    "Smart Contract Development": [
      {
        icon: Shield,
        title: "Security Audits",
        description: "Comprehensive security analysis and vulnerability assessment."
      },
      {
        icon: Code,
        title: "Gas Optimization",
        description: "Efficient code that minimizes transaction costs and execution time."
      },
      {
        icon: Users,
        title: "DeFi Protocols",
        description: "Decentralized finance applications including DEXs, lending, and yield farming."
      },
      {
        icon: Award,
        title: "NFT Contracts",
        description: "Custom NFT standards and marketplace smart contracts."
      },
      {
        icon: Database,
        title: "DAO Governance",
        description: "Decentralized autonomous organization governance mechanisms."
      },
      {
        icon: Zap,
        title: "Multi-signature Wallets",
        description: "Secure multi-signature wallet implementations for enhanced security."
      }
    ],
    "DApp Development": [
      {
        icon: Code,
        title: "Frontend Development",
        description: "Modern, responsive user interfaces built with React, Vue, or Angular."
      },
      {
        icon: Database,
        title: "Blockchain Integration",
        description: "Seamless connection to blockchain networks and smart contracts."
      },
      {
        icon: Users,
        title: "Wallet Connectivity",
        description: "Integration with MetaMask, WalletConnect, and other popular wallets."
      },
      {
        icon: Shield,
        title: "Security Features",
        description: "Built-in security measures and user authentication systems."
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Fast loading times and smooth user experience across all devices."
      },
      {
        icon: Award,
        title: "Mobile Responsive",
        description: "Optimized for mobile devices with progressive web app capabilities."
      }
    ],
    "Web & Mobile Development": [
      {
        icon: Code,
        title: "Modern Frameworks",
        description: "Built with React, Next.js, React Native, and other cutting-edge technologies."
      },
      {
        icon: Shield,
        title: "Secure Architecture",
        description: "Enterprise-grade security with proper authentication and authorization."
      },
      {
        icon: Zap,
        title: "High Performance",
        description: "Optimized for speed with efficient code and modern optimization techniques."
      },
      {
        icon: Users,
        title: "User Experience",
        description: "Intuitive interfaces designed with user experience best practices."
      },
      {
        icon: Database,
        title: "Scalable Backend",
        description: "Robust backend infrastructure that can handle growing user bases."
      },
      {
        icon: Award,
        title: "Cross-platform",
        description: "Consistent experience across web, iOS, and Android platforms."
      }
    ],
    "AI-Powered Solutions": [
      {
        icon: Zap,
        title: "AI Integration",
        description: "Seamless integration of artificial intelligence into blockchain applications."
      },
      {
        icon: Database,
        title: "Machine Learning",
        description: "Custom ML models for predictive analytics and automated decision making."
      },
      {
        icon: Users,
        title: "Natural Language Processing",
        description: "Advanced NLP capabilities for chatbots and automated customer service."
      },
      {
        icon: Shield,
        title: "Computer Vision",
        description: "Image recognition and processing capabilities for various applications."
      },
      {
        icon: Code,
        title: "Automated Systems",
        description: "Intelligent automation for business processes and operations."
      },
      {
        icon: Award,
        title: "Predictive Analytics",
        description: "Data-driven insights and forecasting for better decision making."
      }
    ]
  }

  return featuresMap[serviceTitle] || featuresMap["Layer-1 Blockchain Development"]
}

export default function ServiceFeatures({ serviceData }: ServiceFeaturesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = getServiceFeatures(serviceData.title)

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Key Features &{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our {serviceData.title.toLowerCase()} services include comprehensive features 
            designed to deliver robust, scalable, and secure solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${serviceData.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${serviceData.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution 
              that meets your specific needs and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get Free Consultation
              </a>
              <a
                href="/portfolio"
                className="btn-secondary"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
