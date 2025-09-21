"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database,
  Bot,
  Shield,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Users
} from 'lucide-react'
import Link from 'next/link'

const jobOpenings = [
  {
    id: 1,
    title: "Senior Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$80,000 - $120,000",
    description: "We're looking for an experienced blockchain developer to join our team and work on cutting-edge DeFi protocols and smart contracts.",
    requirements: [
      "3+ years of blockchain development experience",
      "Proficiency in Solidity and Web3.js",
      "Experience with DeFi protocols",
      "Strong understanding of smart contract security"
    ],
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    urgent: true
  },
  {
    id: 2,
    title: "Frontend Developer (React/Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$60,000 - $90,000",
    description: "Join our frontend team to build beautiful and intuitive user interfaces for blockchain applications.",
    requirements: [
      "2+ years of React/Next.js experience",
      "Experience with Web3 integration",
      "Strong UI/UX skills",
      "Knowledge of TypeScript"
    ],
    icon: Globe,
    color: "from-green-500 to-emerald-600",
    urgent: false
  },
  {
    id: 3,
    title: "Smart Contract Auditor",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$70,000 - $100,000",
    description: "Help secure the blockchain ecosystem by auditing smart contracts and identifying vulnerabilities.",
    requirements: [
      "2+ years of smart contract auditing experience",
      "Deep understanding of Solidity",
      "Experience with security tools",
      "Strong analytical skills"
    ],
    icon: Shield,
    color: "from-red-500 to-pink-600",
    urgent: false
  },
  {
    id: 4,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$65,000 - $95,000",
    description: "Develop mobile applications for iOS and Android with blockchain integration capabilities.",
    requirements: [
      "2+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with blockchain APIs",
      "Strong problem-solving skills"
    ],
    icon: Smartphone,
    color: "from-purple-500 to-violet-600",
    urgent: false
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$75,000 - $110,000",
    description: "Manage our blockchain infrastructure and ensure high availability of our services.",
    requirements: [
      "3+ years of DevOps experience",
      "Experience with cloud platforms (AWS/GCP)",
      "Knowledge of containerization",
      "Blockchain infrastructure experience preferred"
    ],
    icon: Database,
    color: "from-orange-500 to-yellow-600",
    urgent: false
  },
  {
    id: 6,
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$70,000 - $105,000",
    description: "Integrate AI and machine learning capabilities into our blockchain solutions.",
    requirements: [
      "2+ years of AI/ML experience",
      "Proficiency in Python and ML frameworks",
      "Experience with blockchain data",
      "Strong mathematical background"
    ],
    icon: Bot,
    color: "from-indigo-500 to-blue-600",
    urgent: false
  }
]

export default function CareersOpenings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50" id="open-positions">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Open{' '}
            <span className="gradient-text">Positions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join our growing team and help shape the future of blockchain technology. 
            We're always looking for talented individuals who share our passion for innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <job.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {job.department}
                        </p>
                      </div>
                    </div>
                    {job.urgent && (
                      <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                        Urgent
                      </span>
                    )}
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {job.salary}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/careers/apply/${job.id}`}
                    className="inline-flex items-center justify-center w-full text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Match CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See a Perfect Match?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and 
              let us know how you'd like to contribute to our mission.
            </p>
            <Link
              href="/careers/apply"
              className="btn-primary"
            >
              Send Your Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
