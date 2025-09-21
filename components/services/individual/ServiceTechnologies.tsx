"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ServiceData {
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  timeline: string
  startingPrice: string
}

interface ServiceTechnologiesProps {
  serviceData: ServiceData
}

export default function ServiceTechnologies({ serviceData }: ServiceTechnologiesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies &{' '}
            <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We use cutting-edge technologies and industry-standard tools to deliver 
            high-quality {serviceData.title.toLowerCase()} solutions.
          </p>
        </motion.div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Technology stack details will be implemented based on specific service requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
