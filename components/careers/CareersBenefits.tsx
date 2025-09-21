"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Home, 
  DollarSign, 
  BookOpen, 
  Clock,
  Heart,
  Globe,
  Award,
  Users,
  Zap,
  Shield,
  Coffee,
  Gamepad2
} from 'lucide-react'

const benefits = [
  {
    icon: Home,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with flexible hours and a supportive remote environment.",
    category: "Work Life"
  },
  {
    icon: DollarSign,
    title: "Competitive Salaries",
    description: "Industry-leading compensation packages with performance bonuses and equity options.",
    category: "Compensation"
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, and access to premium courses.",
    category: "Growth"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive with flexible scheduling and unlimited PTO.",
    category: "Work Life"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs.",
    category: "Benefits"
  },
  {
    icon: Globe,
    title: "Global Team",
    description: "Work with talented professionals from around the world in a diverse environment.",
    category: "Culture"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Clear career progression paths with mentorship and leadership opportunities.",
    category: "Growth"
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team building activities, virtual events, and annual company retreats.",
    category: "Culture"
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Work with cutting-edge blockchain technologies and modern development tools.",
    category: "Technology"
  },
  {
    icon: Shield,
    title: "Job Security",
    description: "Stable company with strong financial backing and growing client base.",
    category: "Benefits"
  },
  {
    icon: Coffee,
    title: "Coffee & Snacks",
    description: "Monthly stipend for home office setup and regular coffee deliveries.",
    category: "Perks"
  },
  {
    icon: Gamepad2,
    title: "Fun Activities",
    description: "Gaming sessions, virtual happy hours, and team challenges.",
    category: "Culture"
  }
]

const categories = [
  { name: "All", count: 12, active: true },
  { name: "Work Life", count: 3, active: false },
  { name: "Compensation", count: 1, active: false },
  { name: "Growth", count: 2, active: false },
  { name: "Benefits", count: 2, active: false },
  { name: "Culture", count: 3, active: false },
  { name: "Technology", count: 1, active: false }
]

export default function CareersBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredBenefits = activeCategory === 'All' 
    ? benefits 
    : benefits.filter(benefit => benefit.category === activeCategory)

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
            Why Work at{' '}
            <span className="gradient-text">Trivexa?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe in creating an environment where our team can thrive, grow, and make a real impact. 
            Here's what makes working at Trivexa special.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {benefit.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
