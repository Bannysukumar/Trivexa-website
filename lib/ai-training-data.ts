// Trivexa AI Training Data
// This file contains structured training data extracted from the website content

export interface TrainingDocument {
  id: string
  category: string
  title: string
  content: string
  keywords: string[]
  metadata: {
    source: string
    lastUpdated: string
    priority: number
  }
}

export interface FAQItem {
  question: string
  answer: string
  category: string
  keywords: string[]
}

export interface ServiceInfo {
  name: string
  description: string
  features: string[]
  technologies: string[]
  timeline: string
  pricing: string
  useCases: string[]
}

// Company Information
export const companyInfo: TrainingDocument[] = [
  {
    id: "company-overview",
    category: "company",
    title: "Trivexa Technologies Overview",
    content: "Trivexa Technologies Pvt. Ltd. is a premier blockchain development company trusted by Fortune 500 companies and innovative startups worldwide. We deliver secure, scalable, and production-ready blockchain solutions that drive digital transformation. Founded in 2019, we have grown to become a leading provider of Layer-1 & Layer-2 blockchain solutions, smart contracts, DApps, and Web3 technologies.",
    keywords: ["trivexa", "blockchain", "company", "fortune 500", "enterprise", "web3"],
    metadata: {
      source: "hero-section",
      lastUpdated: "2024-01-01",
      priority: 10
    }
  },
  {
    id: "company-mission",
    category: "company",
    title: "Company Mission",
    content: "To democratize blockchain technology and make it accessible to businesses of all sizes, enabling them to leverage the power of decentralized systems for enhanced security, transparency, and efficiency.",
    keywords: ["mission", "blockchain", "democratize", "business", "security", "transparency"],
    metadata: {
      source: "about-story",
      lastUpdated: "2024-01-01",
      priority: 9
    }
  },
  {
    id: "company-vision",
    category: "company",
    title: "Company Vision",
    content: "To become the world's leading blockchain development company, recognized for our innovative solutions, exceptional service quality, and contribution to the global Web3 ecosystem.",
    keywords: ["vision", "leading", "blockchain", "innovative", "web3", "ecosystem"],
    metadata: {
      source: "about-story",
      lastUpdated: "2024-01-01",
      priority: 9
    }
  },
  {
    id: "company-history",
    category: "company",
    title: "Company History & Milestones",
    content: "Trivexa Technologies was founded in 2019 with a vision to revolutionize business operations through blockchain technology. Key milestones include: 2020 - First major enterprise project, 2021 - Team expansion to 20+ experts, 2022 - Global recognition and industry awards, 2023 - International expansion to 15+ countries, 2024 - AI integration and advanced Web3 technologies.",
    keywords: ["history", "milestones", "2019", "founded", "growth", "expansion"],
    metadata: {
      source: "about-story",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  }
]

// Team Information
export const teamInfo: TrainingDocument[] = [
  {
    id: "team-overview",
    category: "team",
    title: "Expert Team",
    content: "Our team consists of certified blockchain developers, architects, and consultants with years of experience in the industry. We have 20+ blockchain experts with expertise in various technologies and domains.",
    keywords: ["team", "experts", "developers", "architects", "consultants", "certified"],
    metadata: {
      source: "team-section",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  },
  {
    id: "ceo-profile",
    category: "team",
    title: "CEO & Founder - Adepu Sukumar",
    content: "Adepu Sukumar is a blockchain visionary with 8+ years of experience in fintech and enterprise solutions. He has led 50+ successful blockchain projects. His expertise includes Blockchain Strategy, Enterprise Solutions, and Team Leadership.",
    keywords: ["ceo", "founder", "adepu sukumar", "visionary", "fintech", "enterprise"],
    metadata: {
      source: "team-section",
      lastUpdated: "2024-01-01",
      priority: 9
    }
  },
  {
    id: "md-profile",
    category: "team",
    title: "Managing Director - T.Velumani",
    content: "T.Velumani is a visionary leader with 12+ years of experience in technology management, strategic planning, and business development. Expert in driving digital transformation and blockchain innovation across enterprise organizations. Expertise includes Strategic Leadership, Technology Management, Business Development, Team Building, Digital Transformation, Enterprise Solutions, Project Management, and Client Relations.",
    keywords: ["managing director", "velumani", "leader", "technology management", "strategic planning"],
    metadata: {
      source: "team-section",
      lastUpdated: "2024-01-01",
      priority: 9
    }
  }
]

// Services Information
export const servicesInfo: ServiceInfo[] = [
  {
    name: "Layer-1 Blockchain Development",
    description: "Build custom blockchain networks from scratch with advanced consensus mechanisms, smart contract capabilities, and governance systems.",
    features: [
      "Custom Consensus Algorithms",
      "Token Standards & Economics",
      "Network Architecture Design",
      "Governance Systems",
      "Security Audits",
      "Mainnet Deployment"
    ],
    technologies: ["Rust", "Go", "C++", "Solidity", "Web3.js"],
    timeline: "3-6 months",
    pricing: "Starting from $50,000",
    useCases: ["Enterprise blockchain networks", "Custom cryptocurrency", "Private blockchain solutions"]
  },
  {
    name: "Layer-2 Blockchain Solutions",
    description: "Implement scaling solutions like sidechains, state channels, and rollups to enhance blockchain performance and reduce costs.",
    features: [
      "Sidechain Development",
      "State Channel Implementation",
      "Rollup Solutions",
      "Cross-chain Bridges",
      "Optimistic & ZK Rollups",
      "Performance Optimization"
    ],
    technologies: ["Solidity", "Web3.js", "Ethers.js", "Polygon", "Arbitrum"],
    timeline: "2-4 months",
    pricing: "Starting from $30,000",
    useCases: ["Scalable DApps", "Cross-chain applications", "High-throughput solutions"]
  },
  {
    name: "Smart Contract Development",
    description: "Create secure, audited smart contracts for DeFi, NFTs, DAOs, and other blockchain applications with comprehensive testing.",
    features: [
      "DeFi Protocol Development",
      "NFT Smart Contracts",
      "DAO Governance Contracts",
      "Multi-signature Wallets",
      "Security Audits",
      "Gas Optimization"
    ],
    technologies: ["Solidity", "Vyper", "Hardhat", "Truffle", "OpenZeppelin"],
    timeline: "1-3 months",
    pricing: "Starting from $5,000",
    useCases: ["DeFi protocols", "NFT marketplaces", "DAO governance", "Token contracts"]
  },
  {
    name: "DApp Development",
    description: "Build decentralized applications with intuitive user interfaces, seamless blockchain integration, and optimal user experience.",
    features: [
      "Frontend Development",
      "Blockchain Integration",
      "Wallet Connectivity",
      "User Experience Design",
      "Performance Optimization",
      "Mobile Responsiveness"
    ],
    technologies: ["React", "Next.js", "Web3.js", "Ethers.js", "MetaMask"],
    timeline: "2-5 months",
    pricing: "Starting from $15,000",
    useCases: ["DeFi applications", "NFT platforms", "Gaming DApps", "Social platforms"]
  },
  {
    name: "Web & Mobile Development",
    description: "Develop responsive web applications and native mobile apps for iOS and Android with modern frameworks and technologies.",
    features: [
      "React/Next.js Applications",
      "React Native Development",
      "iOS Native Development",
      "Android Native Development",
      "Progressive Web Apps",
      "Cross-platform Solutions"
    ],
    technologies: ["React", "Next.js", "React Native", "Swift", "Kotlin"],
    timeline: "2-6 months",
    pricing: "Starting from $10,000",
    useCases: ["Enterprise web apps", "Mobile applications", "Cross-platform solutions"]
  },
  {
    name: "AI-Powered Solutions",
    description: "Integrate artificial intelligence and machine learning capabilities into your blockchain applications for enhanced functionality.",
    features: [
      "AI Integration",
      "Machine Learning Models",
      "Predictive Analytics",
      "Automated Systems",
      "Natural Language Processing",
      "Computer Vision"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Blockchain APIs"],
    timeline: "3-8 months",
    pricing: "Starting from $25,000",
    useCases: ["AI trading systems", "Predictive analytics", "Automated smart contracts"]
  }
]

// Portfolio/Projects Information
export const portfolioInfo: TrainingDocument[] = [
  {
    id: "defi-protocol",
    category: "portfolio",
    title: "Enterprise DeFi Protocol",
    content: "Developed a comprehensive DeFi lending protocol for enterprise clients with advanced risk management, multi-asset support, and institutional-grade security features. Results: $25M+ TVL, 5K+ Active Users, A+ Security Score. Technologies: Solidity, React, Web3.js, Chainlink, OpenZeppelin. Client: Fortune 500 Financial Services. Status: CertiK Audited.",
    keywords: ["defi", "lending", "protocol", "enterprise", "tvl", "security"],
    metadata: {
      source: "portfolio-grid",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  },
  {
    id: "nft-platform",
    category: "portfolio",
    title: "Enterprise NFT Platform",
    content: "Built a white-label NFT marketplace solution for enterprise clients with custom branding, advanced analytics, and compliance features. Results: 50K+ NFTs Minted, $2.5M+ Trading Volume, 98% Client Satisfaction. Technologies: Ethereum, Next.js, IPFS, MetaMask, OpenSea SDK. Client: Global Media Company. Status: OpenZeppelin Audited.",
    keywords: ["nft", "marketplace", "enterprise", "white-label", "analytics"],
    metadata: {
      source: "portfolio-grid",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  },
  {
    id: "supply-chain",
    category: "portfolio",
    title: "Pharmaceutical Supply Chain",
    content: "Implemented a blockchain-based supply chain tracking system for pharmaceutical companies ensuring product authenticity and regulatory compliance. Results: 500K+ Products Tracked, 99.8% Traceability, 100% Compliance Rate. Technologies: Hyperledger Fabric, React, Node.js, MongoDB, IoT. Client: Leading Pharma Company. Status: ConsenSys Audited.",
    keywords: ["supply chain", "pharmaceutical", "tracking", "compliance", "iot"],
    metadata: {
      source: "portfolio-grid",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  },
  {
    id: "gaming-platform",
    category: "portfolio",
    title: "Enterprise Gaming Platform",
    content: "Created a play-to-earn gaming platform with enterprise features including tournament management, reward distribution, and analytics dashboard. Results: 15K+ Active Players, 500+ Tournaments, 85% User Retention. Technologies: Unity, Web3.js, Solidity, IPFS, Chainlink VRF. Client: Gaming Studio Partner. Status: CertiK Audited.",
    keywords: ["gaming", "play-to-earn", "tournaments", "web3", "unity"],
    metadata: {
      source: "portfolio-grid",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  },
  {
    id: "ai-trading",
    category: "portfolio",
    title: "AI-Powered Trading System",
    content: "Developed an institutional-grade AI trading system with machine learning algorithms for automated cryptocurrency portfolio management. Results: 120% Average ROI, 8K+ Successful Trades, Low Risk Score. Technologies: Python, TensorFlow, Web3.js, APIs, Machine Learning. Client: Investment Firm. Status: Internal Security Review.",
    keywords: ["ai", "trading", "machine learning", "cryptocurrency", "portfolio"],
    metadata: {
      source: "portfolio-grid",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  },
  {
    id: "healthcare-records",
    category: "portfolio",
    title: "Healthcare Data Platform",
    content: "Built a HIPAA-compliant healthcare records management system using blockchain for secure patient data sharing and interoperability. Results: 250K+ Patient Records, 15+ Healthcare Providers, 100% Data Security. Technologies: Ethereum, React, IPFS, Zero-Knowledge Proofs, Encryption. Client: Healthcare Network. Status: HIPAA Compliant.",
    keywords: ["healthcare", "records", "hipaa", "patient data", "security"],
    metadata: {
      source: "portfolio-grid",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  }
]

// Industries Information
export const industriesInfo: TrainingDocument[] = [
  {
    id: "fintech-industry",
    category: "industries",
    title: "Fintech & DeFi",
    content: "We provide blockchain solutions for financial services including DeFi protocols, payment systems, lending platforms, and digital asset management. Our solutions ensure regulatory compliance, security, and scalability for financial institutions.",
    keywords: ["fintech", "defi", "payments", "lending", "digital assets", "compliance"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  },
  {
    id: "healthcare-industry",
    category: "industries",
    title: "Healthcare",
    content: "Blockchain solutions for healthcare include patient data management, drug traceability, medical records sharing, and clinical trial management. We ensure HIPAA compliance and data security for healthcare organizations.",
    keywords: ["healthcare", "patient data", "drug traceability", "medical records", "hipaa"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  },
  {
    id: "supply-chain-industry",
    category: "industries",
    title: "Supply Chain",
    content: "Supply chain blockchain solutions provide end-to-end traceability, authenticity verification, and automated compliance. We help companies track products from origin to consumer with immutable records.",
    keywords: ["supply chain", "traceability", "authenticity", "compliance", "tracking"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  },
  {
    id: "real-estate-industry",
    category: "industries",
    title: "Real Estate",
    content: "Real estate blockchain solutions include property tokenization, smart contracts for transactions, title management, and fractional ownership. We enable transparent and efficient real estate transactions.",
    keywords: ["real estate", "tokenization", "property", "transactions", "ownership"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  },
  {
    id: "gaming-industry",
    category: "industries",
    title: "Gaming & NFT",
    content: "Gaming and NFT solutions include play-to-earn platforms, NFT marketplaces, in-game asset management, and virtual economies. We create engaging Web3 gaming experiences with real-world value.",
    keywords: ["gaming", "nft", "play-to-earn", "virtual economy", "web3"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  },
  {
    id: "ecommerce-industry",
    category: "industries",
    title: "E-commerce",
    content: "E-commerce blockchain solutions include supply chain tracking, payment processing, loyalty programs, and counterfeit prevention. We help online retailers build trust and transparency with customers.",
    keywords: ["ecommerce", "payments", "loyalty", "counterfeit", "transparency"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  },
  {
    id: "government-industry",
    category: "industries",
    title: "Government",
    content: "Government blockchain solutions include digital identity, voting systems, public records management, and transparency initiatives. We help government agencies improve efficiency and citizen trust.",
    keywords: ["government", "digital identity", "voting", "public records", "transparency"],
    metadata: {
      source: "industries-page",
      lastUpdated: "2024-01-01",
      priority: 7
    }
  }
]

// FAQ Data
export const faqData: FAQItem[] = [
  {
    question: "What is Layer-1 blockchain development?",
    answer: "Layer-1 blockchain development involves creating the foundational blockchain protocol itself, including consensus mechanisms, network architecture, and core functionality. We specialize in building custom Layer-1 solutions with features like smart contracts, token standards, and governance systems.",
    category: "services",
    keywords: ["layer-1", "blockchain", "protocol", "consensus", "architecture"]
  },
  {
    question: "How much does smart contract development cost?",
    answer: "Smart contract development costs vary based on complexity, features, and security requirements. Basic contracts start from $5,000, while complex DeFi protocols can range from $50,000 to $200,000+. We provide detailed quotes after understanding your specific requirements.",
    category: "pricing",
    keywords: ["smart contract", "cost", "pricing", "defi", "complexity"]
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including Fintech & DeFi, Healthcare, Supply Chain, Real Estate, Gaming & NFT, E-commerce, and Government sectors. Our blockchain solutions are tailored to meet specific industry requirements and compliance standards.",
    category: "industries",
    keywords: ["industries", "fintech", "healthcare", "supply chain", "gaming"]
  },
  {
    question: "Do you provide blockchain consulting?",
    answer: "Yes! We offer comprehensive blockchain consulting services including technology assessment, architecture design, tokenomics planning, security audits, and implementation strategies. Our experts help you make informed decisions about blockchain adoption.",
    category: "services",
    keywords: ["consulting", "assessment", "architecture", "tokenomics", "security"]
  },
  {
    question: "What is the development timeline for a DApp?",
    answer: "DApp development timelines typically range from 3-6 months for basic applications to 12+ months for complex DeFi protocols. Factors include smart contract complexity, frontend requirements, testing, and security audits. We provide detailed project timelines during consultation.",
    category: "timeline",
    keywords: ["dapp", "timeline", "development", "defi", "complexity"]
  },
  {
    question: "How do you ensure security in blockchain projects?",
    answer: "We implement multiple security layers including smart contract audits by certified firms like CertiK and OpenZeppelin, comprehensive testing, code reviews, and best practices. All our projects undergo rigorous security assessments before deployment.",
    category: "security",
    keywords: ["security", "audits", "testing", "certik", "openzeppelin"]
  },
  {
    question: "What technologies do you use for blockchain development?",
    answer: "We use a wide range of technologies including Solidity, Rust, Go, C++, Web3.js, React, Next.js, and various blockchain frameworks. Our technology stack is chosen based on project requirements and best practices for each specific use case.",
    category: "technology",
    keywords: ["technologies", "solidity", "rust", "web3", "react", "frameworks"]
  },
  {
    question: "Do you provide post-deployment support?",
    answer: "Yes, we offer comprehensive post-deployment support including maintenance, updates, monitoring, and technical assistance. Our support packages are tailored to your needs and can include 24/7 monitoring and emergency response.",
    category: "support",
    keywords: ["support", "maintenance", "updates", "monitoring", "assistance"]
  }
]

// Contact Information
export const contactInfo: TrainingDocument[] = [
  {
    id: "contact-details",
    category: "contact",
    title: "Contact Information",
    content: "You can reach Trivexa Technologies at trivexatechpvt@gmail.com or 6301846681. We also have a contact form on our website. Our team typically responds within 24 hours. For urgent matters, you can reach us via WhatsApp.",
    keywords: ["contact", "email", "phone", "whatsapp", "support"],
    metadata: {
      source: "contact-page",
      lastUpdated: "2024-01-01",
      priority: 10
    }
  },
  {
    id: "response-time",
    category: "contact",
    title: "Response Time",
    content: "Our team typically responds to inquiries within 24 hours. For urgent matters, we provide faster response times. We also offer scheduled consultations for detailed project discussions.",
    keywords: ["response", "time", "24 hours", "urgent", "consultation"],
    metadata: {
      source: "contact-page",
      lastUpdated: "2024-01-01",
      priority: 8
    }
  }
]

// Combine all training data
export const allTrainingData: TrainingDocument[] = [
  ...companyInfo,
  ...teamInfo,
  ...portfolioInfo,
  ...industriesInfo,
  ...contactInfo
]

// Export utility functions
export function getTrainingDataByCategory(category: string): TrainingDocument[] {
  return allTrainingData.filter(doc => doc.category === category)
}

export function searchTrainingData(query: string): TrainingDocument[] {
  const lowerQuery = query.toLowerCase()
  return allTrainingData.filter(doc => 
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.content.toLowerCase().includes(lowerQuery) ||
    doc.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  )
}

export function getFAQByCategory(category: string): FAQItem[] {
  return faqData.filter(faq => faq.category === category)
}

export function searchFAQ(query: string): FAQItem[] {
  const lowerQuery = query.toLowerCase()
  return faqData.filter(faq => 
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery) ||
    faq.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  )
}
