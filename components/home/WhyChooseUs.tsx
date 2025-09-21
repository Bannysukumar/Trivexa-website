"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award, 
  Users, 
  Shield, 
  Zap,
  Clock,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Our team consists of certified blockchain developers, architects, and consultants with years of experience in the industry.",
    stats: "5+ Years Average Experience"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize security in every project with comprehensive audits, testing, and best practices implementation.",
    stats: "100% Security Audit Coverage"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development methodology ensures faster time-to-market without compromising on quality or security.",
    stats: "30% Faster Delivery"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with 24/7 support and flexible engagement models to meet your business needs.",
    stats: "15+ Countries Served"
  },
  {
    icon: Code,
    title: "Cutting-Edge Tech",
    description: "We stay ahead of the curve with the latest blockchain technologies, frameworks, and development tools.",
    stats: "Latest Tech Stack"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Round-the-clock technical support and maintenance to ensure your blockchain solutions run smoothly.",
    stats: "24/7 Support Available"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinTech Startup",
    content: "Trivexa transformed our vision into a robust DeFi platform. Their expertise in smart contract development and security auditing was exceptional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, NFT Marketplace",
    content: "The team delivered our NFT marketplace ahead of schedule with zero security vulnerabilities. Highly recommended for blockchain projects.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, Supply Chain Co.",
    content: "Their blockchain solution streamlined our supply chain operations and increased transparency by 90%. Outstanding results!",
    rating: 5
  }
]

export default function WhyChooseUs() {
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
            Why Choose{' '}
            <span className="gradient-text">Trivexa Technologies?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We combine technical expertise, industry experience, and innovative solutions 
            to deliver blockchain projects that exceed expectations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-navy-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                {/* Main Card */}
                <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
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
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Certified Team</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Blockchain certified developers</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-blue-500 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Audited</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">100% security audit coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-purple-500 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">On-Time Delivery</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">99% on-time project delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-orange-500 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock assistance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
