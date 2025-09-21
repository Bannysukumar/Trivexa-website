"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Star, 
  Quote,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "FinTech Startup",
    image: "/api/placeholder/80/80",
    content: "Trivexa transformed our vision into a robust DeFi platform. Their expertise in smart contract development and security auditing was exceptional. The team delivered beyond our expectations.",
    rating: 5,
    project: "DeFi Lending Platform",
    results: "300% user growth in 6 months"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "NFT Marketplace",
    image: "/api/placeholder/80/80",
    content: "The team delivered our NFT marketplace ahead of schedule with zero security vulnerabilities. Their attention to detail and technical expertise made all the difference.",
    rating: 5,
    project: "NFT Marketplace",
    results: "$5M+ trading volume"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Supply Chain Co.",
    image: "/api/placeholder/80/80",
    content: "Their blockchain solution streamlined our supply chain operations and increased transparency by 90%. Outstanding results and excellent communication throughout the project.",
    rating: 5,
    project: "Supply Chain Tracking",
    results: "90% transparency increase"
  }
]

export default function PortfolioTestimonials() {
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
            What Our Clients{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Trivexa Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Project: {testimonial.project}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      Result: {testimonial.results}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
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
