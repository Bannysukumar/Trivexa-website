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
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "Healthcare Tech",
    image: "/api/placeholder/80/80",
    content: "Trivexa's blockchain solution for patient data management exceeded our security requirements. The team's understanding of healthcare compliance was impressive.",
    rating: 5,
    project: "Healthcare Data Management",
    results: "100% compliance achieved"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "Gaming Studio",
    image: "/api/placeholder/80/80",
    content: "Our play-to-earn game with NFT integration was a huge success. Trivexa's innovative approach and gaming industry knowledge were key to our success.",
    rating: 5,
    project: "Play-to-Earn Game",
    results: "10x user engagement"
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Founder",
    company: "Real Estate Platform",
    image: "/api/placeholder/80/80",
    content: "Property tokenization was complex, but Trivexa made it seamless. Their blockchain expertise and real estate domain knowledge delivered exactly what we needed.",
    rating: 5,
    project: "Property Tokenization",
    results: "60% faster transactions"
  }
]

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "5.0", label: "Average Rating" },
  { icon: CheckCircle, value: "99%", label: "Project Success Rate" }
]

export default function Testimonials() {
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
            What Our Clients{' '}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Trivexa Technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Project: {testimonial.project}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      Result: {testimonial.results}
                    </div>
                  </div>

                  {/* Author */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a blockchain solution that delivers 
              exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Start Your Project
              </a>
              <a
                href="/portfolio"
                className="btn-secondary"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
