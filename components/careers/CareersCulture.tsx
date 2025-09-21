"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Heart, 
  Lightbulb,
  Globe,
  Award,
  Coffee,
  Gamepad2,
  BookOpen,
  Zap,
  Shield
} from 'lucide-react'

const cultureValues = [
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe in the power of teamwork and open communication across all levels.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Heart,
    title: "Inclusive",
    description: "We celebrate diversity and create an environment where everyone can thrive.",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "We encourage creative thinking and embrace new ideas and technologies.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Globe,
    title: "Global",
    description: "We work with talented professionals from around the world.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We build trust through transparency, integrity, and reliability.",
    color: "from-red-500 to-pink-600"
  }
]

const teamActivities = [
  {
    icon: Coffee,
    title: "Virtual Coffee Chats",
    description: "Regular informal meetings to connect and share ideas"
  },
  {
    icon: Gamepad2,
    title: "Gaming Sessions",
    description: "Weekly gaming sessions and team challenges"
  },
  {
    icon: BookOpen,
    title: "Learning Groups",
    description: "Study groups and knowledge sharing sessions"
  },
  {
    icon: Zap,
    title: "Hackathons",
    description: "Internal hackathons and innovation challenges"
  }
]

export default function CareersCulture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="culture">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{' '}
            <span className="gradient-text">Culture</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Trivexa, we believe that great culture leads to great results. 
            We've built an environment where innovation, collaboration, and growth thrive.
          </p>
        </motion.div>

        {/* Culture Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
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

        {/* Team Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-primary-900/20 dark:to-navy-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Team Activities & Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamActivities.map((activity, index) => (
              <div key={activity.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {activity.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
