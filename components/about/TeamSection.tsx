"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Linkedin, 
  Twitter, 
  Github,
  Mail,
  Award,
  Code,
  Users,
  Shield
} from 'lucide-react'

const teamMembers = [
  {
    name: "Adepu Sukumar",
    role: "CEO & Founder",
    image: "/api/placeholder/300/300",
    bio: "Blockchain visionary with 8+ years of experience in fintech and enterprise solutions. Led 50+ successful blockchain projects.",
    expertise: ["Blockchain Strategy", "Enterprise Solutions", "Team Leadership"],
    social: {
      linkedin: "www.linkedin.com/in/adepusukumar",
      twitter: "https://twitter.com/adepu_sukumar",
      github: "https://github.com/adepu-sukumar",
      email: "trivexatechpvt@gmail.com"
    }
  },
  {
    name: "T.Velumani",
    role: "Managing Director",
    image: "/velumani-profile.jpg",
    bio: "Visionary leader with 12+ years of experience in technology management, strategic planning, and business development. Expert in driving digital transformation and blockchain innovation across enterprise organizations.",
    expertise: [
      "Strategic Leadership", 
      "Technology Management", 
      "Business Development", 
      "Team Building",
      "Digital Transformation",
      "Enterprise Solutions",
      "Project Management",
      "Client Relations"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/velu-mani-56b49a32b/",
      //twitter: "https://twitter.com/t_velumani",
      //github: "https://github.com/t-velumani",
      email: "trivexatechpvt@gmail.com"
    }
  },
  {
    name: "MADAVAN",
    role: "Chief Technical Officer (CTO)",
    image: "/api/placeholder/300/300",
    bio: "Powerful Information Security leader with 7+ years of experience in IT & security operations, ISO 27001, SOC 2, security audits, ITGC, and cyber risk management. Expert in VAPT, application security, and ISMS implementation, with a proven track record of enhancing compliance and minimizing security incidents across financial, banking, and enterprise sector projects.",
    expertise: [
      "ISMS",
      "SOC 2 & ITGC Audits", 
      "Risk Management",
      "All Security Operations",
      "Incident Handling",
      "VAPT",
      "Application Security",
      "Infosec Trainer"
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/madavan-cto",
      email: "trivexatechpvt@gmail.com"
    }
  },
]

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Log team members to console when component mounts
  React.useEffect(() => {
    console.log('=== TEAM MEMBERS ===')
    teamMembers.forEach((member, index) => {
      console.log(`${index + 1}. ${member.name}`)
      console.log(`   Role: ${member.role}`)
      console.log(`   Image: ${member.image}`)
      console.log(`   Bio: ${member.bio}`)
      console.log(`   Expertise: ${member.expertise.join(', ')}`)
      console.log(`   Social Links:`, member.social)
      console.log('---')
    })
    console.log('==================')
  }, [])

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
            Meet Our{' '}
            <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our team consists of certified blockchain developers, architects, and consultants 
            with years of experience in the industry.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
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
                  {/* Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-2xl mx-auto overflow-hidden">
                      {member.image && member.image !== "/api/placeholder/300/300" ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-600 to-navy-600 flex items-center justify-center">
                          <Users className="w-16 h-16 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Expertise:
                      </h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-800 hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented blockchain developers, designers, and consultants 
              to join our growing team.
            </p>
            <a
              href="/careers"
              className="btn-primary"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
