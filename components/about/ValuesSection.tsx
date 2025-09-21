"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Users, 
  Zap, 
  Award,
  Target,
  Heart,
  Lightbulb,
  Globe
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize security in every project with comprehensive audits, testing, and best practices implementation.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Our clients' success is our success. We build long-term partnerships based on trust and mutual growth.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve with cutting-edge technologies and innovative solutions for complex challenges.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver exceptional quality in every project, exceeding expectations and setting industry standards.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Target,
    title: "Transparency",
    description: "We maintain complete transparency in our processes, pricing, and project timelines with regular updates.",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and maintain integrity in all our interactions.",
    color: "from-indigo-500 to-blue-600"
  }
]

export default function ValuesSection() {
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
            Our Core{' '}
            <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            These values guide everything we do and shape our culture, 
            ensuring we deliver exceptional results while maintaining the highest standards.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
