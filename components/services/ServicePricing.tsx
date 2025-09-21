"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Users,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    price: "Starting from",
    amount: "$5,000",
    duration: "2-4 weeks",
    features: [
      "Basic smart contract development",
      "Simple DApp frontend",
      "Basic security audit",
      "Documentation",
      "1 month support"
    ],
    color: "from-blue-500 to-cyan-600",
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "Starting from",
    amount: "$25,000",
    duration: "2-4 months",
    features: [
      "Advanced smart contracts",
      "Full-stack DApp development",
      "Comprehensive security audit",
      "Mobile app integration",
      "3 months support",
      "Performance optimization",
      "API development"
    ],
    color: "from-purple-500 to-violet-600",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large-scale blockchain solutions",
    price: "Starting from",
    amount: "$100,000",
    duration: "6-12 months",
    features: [
      "Custom blockchain development",
      "Layer-2 solutions",
      "Advanced security audits",
      "Multi-platform development",
      "12 months support",
      "Dedicated team",
      "Custom integrations",
      "24/7 monitoring"
    ],
    color: "from-green-500 to-emerald-600",
    popular: false
  }
]

const additionalServices = [
  {
    name: "Smart Contract Audit",
    price: "$2,000 - $10,000",
    description: "Comprehensive security audit of your smart contracts"
  },
  {
    name: "Blockchain Consulting",
    price: "$200/hour",
    description: "Expert advice on blockchain strategy and implementation"
  },
  {
    name: "Token Development",
    price: "$5,000 - $15,000",
    description: "Custom token creation with full documentation"
  },
  {
    name: "DeFi Protocol",
    price: "$50,000 - $200,000",
    description: "Complete DeFi protocol development and deployment"
  }
]

export default function ServicePricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
            Transparent{' '}
            <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that best fits your project needs. All plans include our commitment 
            to quality, security, and timely delivery.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-primary-500 dark:border-primary-400' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {plan.price}
                      </span>
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                      {plan.amount}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {plan.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={service.name} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h4>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Every project is unique. Contact us for a personalized quote based on your specific 
              requirements, timeline, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
