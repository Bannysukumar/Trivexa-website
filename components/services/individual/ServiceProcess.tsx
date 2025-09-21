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
  CheckCircle
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

interface ServiceProcessProps {
  serviceData: ServiceData
}

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Analysis",
    description: "We analyze your requirements and understand your business goals to identify the best approach."
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description: "We create a comprehensive strategy and design the technical architecture for your solution."
  },
  {
    step: "03",
    icon: Code,
    title: "Development",
    description: "Our expert developers build your solution using cutting-edge technologies and best practices."
  },
  {
    step: "04",
    icon: TestTube,
    title: "Testing & Security",
    description: "Comprehensive testing and security audits ensure your solution is robust and secure."
  },
  {
    step: "05",
    icon: Rocket,
    title: "Deployment",
    description: "We deploy your solution to production with proper monitoring and documentation."
  },
  {
    step: "06",
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to ensure your solution continues to perform optimally."
  }
]

export default function ServiceProcess({ serviceData }: ServiceProcessProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Development{' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We follow a systematic approach to ensure your {serviceData.title.toLowerCase()} 
            project is delivered on time, within budget, and exceeds your expectations.
          </p>
        </motion.div>

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
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${serviceData.color} rounded-xl flex items-center justify-center mr-4`}>
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
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 bg-gradient-to-br ${serviceData.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <step.icon className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
