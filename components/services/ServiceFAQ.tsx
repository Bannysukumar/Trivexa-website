"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Plus, 
  Minus,
  HelpCircle
} from 'lucide-react'

const faqs = [
  {
    question: "What is the typical timeline for blockchain development projects?",
    answer: "Project timelines vary based on complexity. Simple smart contracts take 2-4 weeks, while complex DApps can take 3-6 months. Custom blockchain networks typically require 6-12 months. We provide detailed project roadmaps during consultation."
  },
  {
    question: "Do you provide smart contract security audits?",
    answer: "Yes, we offer comprehensive smart contract security audits using industry-standard tools and manual review processes. Our audits include vulnerability assessment, gas optimization, and compliance checks. We also provide detailed reports with remediation recommendations."
  },
  {
    question: "What blockchain platforms do you work with?",
    answer: "We work with all major blockchain platforms including Ethereum, Binance Smart Chain, Polygon, Solana, Avalanche, and custom blockchain networks. We also develop Layer-2 solutions and cross-chain bridges."
  },
  {
    question: "Can you help with tokenomics and token development?",
    answer: "Absolutely! We provide complete tokenomics consulting, token development, and deployment services. This includes ERC-20, ERC-721, ERC-1155 tokens, and custom token standards with proper documentation and testing."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide 24/7 technical support and maintenance services for all our projects. This includes bug fixes, updates, performance monitoring, and feature enhancements. Support packages are tailored to your specific needs."
  },
  {
    question: "What is your development process?",
    answer: "We follow a systematic 6-step process: Discovery & Analysis, Strategy & Design, Development, Testing & Security, Deployment, and Support & Maintenance. Each phase includes quality checks and client communication."
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer: "We work with clients of all sizes, from startups to Fortune 500 companies. We offer flexible engagement models and pricing plans to accommodate different budgets and requirements."
  },
  {
    question: "Can you integrate blockchain with existing systems?",
    answer: "Yes, we specialize in integrating blockchain solutions with existing enterprise systems. We create APIs, middleware, and custom integrations to ensure seamless connectivity with your current infrastructure."
  },
  {
    question: "What technologies do you use for frontend development?",
    answer: "We use modern technologies including React, Next.js, Vue.js, and Angular for web development. For mobile apps, we use React Native, Flutter, and native iOS/Android development. All solutions are responsive and optimized for performance."
  },
  {
    question: "How do you ensure project security?",
    answer: "Security is our top priority. We implement security best practices throughout development, conduct regular audits, use secure coding standards, and provide comprehensive testing. All projects undergo multiple security reviews before deployment."
  }
]

export default function ServiceFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about our blockchain development services. 
            Don't see your question? Contact us for personalized assistance.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="pl-14">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our blockchain experts are here to help. Get personalized answers to your 
              specific questions and project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Contact Our Experts
              </a>
              <a
                href="#chat"
                className="btn-secondary"
              >
                Start Live Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
