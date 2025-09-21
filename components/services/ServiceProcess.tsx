"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube,
  Rocket,
  Headphones,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Analysis",
    description: "We analyze your requirements, understand your business goals, and identify the best blockchain approach for your project.",
    details: [
      "Requirements gathering",
      "Technical feasibility analysis",
      "Blockchain architecture planning",
      "Cost and timeline estimation"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description: "We create a comprehensive strategy and design the technical architecture for your blockchain solution.",
    details: [
      "Technical architecture design",
      "Smart contract specifications",
      "UI/UX wireframing",
      "Security planning"
    ],
    color: "from-purple-500 to-violet-600"
  },
  {
    step: "03",
    icon: Code,
    title: "Development",
    description: "Our expert developers build your blockchain solution using cutting-edge technologies and best practices.",
    details: [
      "Smart contract development",
      "Frontend/backend development",
      "Blockchain integration",
      "API development"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    step: "04",
    icon: TestTube,
    title: "Testing & Security",
    description: "Comprehensive testing and security audits ensure your solution is robust, secure, and ready for production.",
    details: [
      "Unit and integration testing",
      "Security audits",
      "Performance testing",
      "Penetration testing"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    step: "05",
    icon: Rocket,
    title: "Deployment",
    description: "We deploy your blockchain solution to production with proper monitoring and documentation.",
    details: [
      "Mainnet deployment",
      "Performance monitoring",
      "Documentation delivery",
      "Team training"
    ],
    color: "from-pink-500 to-rose-600"
  },
  {
    step: "06",
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to ensure your blockchain solution continues to perform optimally.",
    details: [
      "24/7 technical support",
      "Regular updates",
      "Performance monitoring",
      "Feature enhancements"
    ],
    color: "from-indigo-500 to-blue-600"
  }
]

export default function ServiceProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Proven{' '}
            <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We follow a systematic approach to ensure your blockchain project is delivered 
            on time, within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <step.icon className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Quality Assurance
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Every step includes quality checks and validation to ensure the highest standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Transparent Communication
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Regular updates and clear communication throughout the development process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Fast Delivery
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Agile methodology ensures faster delivery without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
