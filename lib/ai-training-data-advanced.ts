// Advanced AI Training Data for Trivexa Technologies
// Comprehensive knowledge base for blockchain development, Layer-1/Layer-2, DApps, and more

export interface TrainingData {
  id: string
  category: string
  subcategory: string
  question: string
  answer: string
  confidence: number
  sources: string[]
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  relatedQuestions: string[]
}

export const advancedTrainingData: TrainingData[] = [
  // Company Information
  {
    id: 'company-001',
    category: 'company',
    subcategory: 'overview',
    question: 'What is Trivexa Technologies and what do you specialize in?',
    answer: 'Trivexa Technologies is a premier enterprise blockchain development company specializing in AI-powered blockchain solutions, Layer-1 and Layer-2 blockchain development, smart contracts, DApps, DeFi protocols, NFT platforms, and Web3 technologies. We serve Fortune 500 companies including TERM, Zerokost, and Thanvish AI with 100+ successful projects and 99.9% uptime SLA.',
    confidence: 1.0,
    sources: ['Company Website', 'Portfolio', 'Client Testimonials'],
    tags: ['blockchain', 'enterprise', 'AI', 'Fortune 500'],
    difficulty: 'beginner',
    relatedQuestions: [
      'What industries do you serve?',
      'What is your company history?',
      'What certifications do you have?'
    ]
  },

  // Layer-1 Blockchain Development
  {
    id: 'layer1-001',
    category: 'blockchain',
    subcategory: 'layer1',
    question: 'What is Layer-1 blockchain development and what can you build?',
    answer: 'Layer-1 blockchain development involves creating foundational blockchain networks from scratch. We develop custom Layer-1 blockchains with features like: Custom consensus mechanisms (PoS, PoW, DPoS), Native token economics, Smart contract platforms, Cross-chain interoperability, Scalability solutions, Security protocols, Governance systems, and Custom APIs. Our Layer-1 solutions support high throughput (10,000+ TPS), low latency, and enterprise-grade security.',
    confidence: 0.95,
    sources: ['Technical Documentation', 'Case Studies', 'Blockchain Expertise'],
    tags: ['layer1', 'consensus', 'scalability', 'security'],
    difficulty: 'advanced',
    relatedQuestions: [
      'What consensus mechanisms do you support?',
      'How do you ensure Layer-1 security?',
      'What is the development timeline for Layer-1?'
    ]
  },

  {
    id: 'layer1-002',
    category: 'blockchain',
    subcategory: 'layer1',
    question: 'What consensus mechanisms can you implement in Layer-1 blockchains?',
    answer: 'We implement various consensus mechanisms including: Proof of Stake (PoS) - Energy efficient, secure, and scalable; Proof of Work (PoW) - Maximum security, Bitcoin-style; Delegated Proof of Stake (DPoS) - Fast transactions, democratic governance; Practical Byzantine Fault Tolerance (PBFT) - Enterprise-grade consensus; Proof of Authority (PoA) - Private blockchain consensus; Hybrid consensus - Combining multiple mechanisms for optimal performance. Each mechanism is customized based on your specific requirements for security, speed, and decentralization.',
    confidence: 0.98,
    sources: ['Blockchain Research', 'Implementation Experience', 'Technical Papers'],
    tags: ['consensus', 'PoS', 'PoW', 'DPoS', 'PBFT'],
    difficulty: 'expert',
    relatedQuestions: [
      'Which consensus mechanism is best for my use case?',
      'How do you optimize consensus for performance?',
      'What are the security implications of different consensus?'
    ]
  },

  // Layer-2 Solutions
  {
    id: 'layer2-001',
    category: 'blockchain',
    subcategory: 'layer2',
    question: 'What Layer-2 scaling solutions do you develop?',
    answer: 'We develop comprehensive Layer-2 solutions including: State Channels - Lightning Network style for instant payments; Sidechains - Independent blockchains with custom rules; Plasma - Child chains for scalability; Optimistic Rollups - EVM-compatible scaling with fraud proofs; ZK-Rollups - Zero-knowledge proof based scaling; Validium - Off-chain data availability; Polygon SDK - Custom sidechain development; Arbitrum - Optimistic rollup implementation; StarkNet - ZK-rollup development. Our Layer-2 solutions can achieve 100,000+ TPS with minimal fees.',
    confidence: 0.97,
    sources: ['Layer-2 Research', 'Implementation Projects', 'Technical Documentation'],
    tags: ['layer2', 'scaling', 'rollups', 'sidechains', 'channels'],
    difficulty: 'expert',
    relatedQuestions: [
      'What is the difference between Optimistic and ZK rollups?',
      'How do you ensure Layer-2 security?',
      'What are the costs of Layer-2 development?'
    ]
  },

  // DApp Development
  {
    id: 'dapp-001',
    category: 'dapp',
    subcategory: 'development',
    question: 'What types of DApps can you develop?',
    answer: 'Trivexa Technologies develops comprehensive DApps including: DeFi DApps - Custom lending protocols, automated market makers, decentralized exchanges, yield farming platforms, liquidity pools, staking mechanisms; NFT DApps - Multi-chain NFT marketplaces, gaming NFT platforms, dynamic NFT systems, royalty management, batch minting; Gaming DApps - Play-to-earn games, virtual worlds, collectible games, tournament platforms, in-game economies; Social DApps - Decentralized social networks, content platforms, community governance, creator monetization; Supply Chain DApps - Product tracking, verification systems, transparency solutions, logistics management; Identity DApps - Self-sovereign identity, KYC/AML solutions, credential verification, privacy protection; Governance DApps - DAO platforms, voting systems, proposal management, treasury management; Enterprise DApps - Business process automation, data management, workflow optimization, integration solutions. We have successfully delivered 50+ DApp projects with 99.9% uptime and enterprise-grade security.',
    confidence: 0.98,
    sources: ['DApp Portfolio', 'Development Experience', 'Client Testimonials'],
    tags: ['dapp', 'defi', 'nft', 'gaming', 'enterprise'],
    difficulty: 'intermediate',
    relatedQuestions: [
      'What is the DApp development process?',
      'How do you ensure DApp security?',
      'What are the costs of DApp development?'
    ]
  },

  // Smart Contracts
  {
    id: 'smart-contract-001',
    category: 'smart-contracts',
    subcategory: 'development',
    question: 'What smart contract development services do you offer?',
    answer: 'Our smart contract services include: Custom smart contract development for any blockchain; Multi-signature wallets and governance contracts; DeFi protocols (lending, borrowing, staking, yield farming); NFT smart contracts with advanced features; Token contracts (ERC-20, ERC-721, ERC-1155, custom standards); Cross-chain smart contracts; Upgradeable smart contracts with proxy patterns; Gas-optimized contracts for cost efficiency; Security audits and testing; Formal verification of critical contracts. We support Ethereum, BSC, Polygon, Solana, and other major blockchains.',
    confidence: 0.99,
    sources: ['Smart Contract Portfolio', 'Security Audits', 'Technical Expertise'],
    tags: ['smart-contracts', 'defi', 'nft', 'security', 'audits'],
    difficulty: 'advanced',
    relatedQuestions: [
      'How do you ensure smart contract security?',
      'What is the smart contract audit process?',
      'How much does smart contract development cost?'
    ]
  },

  // AI Integration
  {
    id: 'ai-001',
    category: 'ai',
    subcategory: 'blockchain-ai',
    question: 'How do you integrate AI with blockchain technology?',
    answer: 'We integrate AI with blockchain through: AI-powered smart contracts that can adapt and learn; Machine learning models for fraud detection and risk assessment; AI-driven DeFi protocols for automated trading and yield optimization; Intelligent NFT systems with dynamic properties; AI-based consensus mechanisms for improved efficiency; Automated smart contract generation using AI; AI-powered blockchain analytics and monitoring; Intelligent cross-chain bridges with AI decision-making; AI-enhanced security protocols; Predictive analytics for blockchain data. Our AI-blockchain solutions provide intelligent automation and enhanced security.',
    confidence: 0.94,
    sources: ['AI Research', 'Blockchain Integration', 'Innovation Projects'],
    tags: ['AI', 'machine-learning', 'automation', 'intelligence', 'blockchain'],
    difficulty: 'expert',
    relatedQuestions: [
      'What AI technologies do you use?',
      'How does AI improve blockchain security?',
      'What are the benefits of AI-blockchain integration?'
    ]
  },

  // Telegram Bots
  {
    id: 'telegram-001',
    category: 'telegram',
    subcategory: 'bots',
    question: 'What Telegram bot development services do you offer?',
    answer: 'We develop comprehensive Telegram bots including: Trading bots for cryptocurrency and DeFi; Portfolio management and tracking bots; Price monitoring and alert bots; Automated trading and arbitrage bots; Community management bots; Payment processing bots; NFT marketplace bots; Staking and yield farming bots; Cross-chain bridge bots; AI-powered chatbot assistants; Multi-language support bots; Custom business automation bots. Our Telegram bots integrate seamlessly with blockchain networks and provide advanced functionality.',
    confidence: 0.93,
    sources: ['Telegram Bot Portfolio', 'Development Experience', 'User Feedback'],
    tags: ['telegram', 'bots', 'trading', 'automation', 'cryptocurrency'],
    difficulty: 'intermediate',
    relatedQuestions: [
      'How do you develop Telegram trading bots?',
      'What features can Telegram bots have?',
      'How much does Telegram bot development cost?'
    ]
  },

  // DeFi Development
  {
    id: 'defi-001',
    category: 'defi',
    subcategory: 'protocols',
    question: 'What DeFi protocols can you develop?',
    answer: 'We develop comprehensive DeFi protocols including: Automated Market Makers (AMMs) like Uniswap; Decentralized Exchanges (DEXs) with advanced features; Lending and borrowing protocols like Compound; Yield farming and liquidity mining platforms; Staking protocols with rewards; Cross-chain DeFi bridges; Synthetic asset protocols; Options and derivatives trading; Insurance protocols for DeFi risks; Governance token systems; Liquidity aggregation protocols; Flash loan protocols. All protocols are built with security, efficiency, and user experience as top priorities.',
    confidence: 0.97,
    sources: ['DeFi Portfolio', 'Protocol Development', 'Security Audits'],
    tags: ['defi', 'protocols', 'trading', 'lending', 'yield-farming'],
    difficulty: 'expert',
    relatedQuestions: [
      'How do you ensure DeFi protocol security?',
      'What is the DeFi development timeline?',
      'How do you optimize DeFi for gas efficiency?'
    ]
  },

  // NFT Development
  {
    id: 'nft-001',
    category: 'nft',
    subcategory: 'marketplace',
    question: 'What NFT marketplace and platform features can you develop?',
    answer: 'We develop advanced NFT platforms with features like: Multi-chain NFT marketplaces supporting Ethereum, Polygon, BSC; Advanced search and filtering capabilities; Auction and bidding systems; Royalty management for creators; Batch minting and lazy minting; Dynamic NFT support with metadata updates; Cross-chain NFT bridges; Gaming NFT integration; Social features and community building; Analytics and reporting dashboards; Mobile-responsive design; API integration for third-party services; Custom smart contracts for unique NFT standards. Our NFT platforms provide comprehensive solutions for creators and collectors.',
    confidence: 0.95,
    sources: ['NFT Platform Portfolio', 'Marketplace Development', 'User Experience'],
    tags: ['nft', 'marketplace', 'gaming', 'royalties', 'multi-chain'],
    difficulty: 'advanced',
    relatedQuestions: [
      'How do you develop NFT marketplaces?',
      'What are the costs of NFT platform development?',
      'How do you ensure NFT platform security?'
    ]
  },

  // Security and Audits
  {
    id: 'security-001',
    category: 'security',
    subcategory: 'audits',
    question: 'What security audit services do you provide?',
    answer: 'Our security audit services include: Smart contract security audits with comprehensive testing; Penetration testing for blockchain applications; Code review and vulnerability assessment; Formal verification of critical smart contracts; Gas optimization and efficiency analysis; Front-running and MEV attack prevention; Multi-signature wallet security audits; DeFi protocol risk assessment; Cross-chain bridge security audits; Token economics security analysis; Compliance and regulatory audit support; Post-audit monitoring and support. We use industry-standard tools and methodologies to ensure maximum security.',
    confidence: 0.98,
    sources: ['Security Audit Portfolio', 'Industry Standards', 'Client Testimonials'],
    tags: ['security', 'audits', 'testing', 'vulnerability', 'compliance'],
    difficulty: 'expert',
    relatedQuestions: [
      'What is the security audit process?',
      'How long does a security audit take?',
      'What security standards do you follow?'
    ]
  },

  // Enterprise Solutions
  {
    id: 'enterprise-001',
    category: 'enterprise',
    subcategory: 'solutions',
    question: 'What enterprise blockchain solutions do you provide?',
    answer: 'Our enterprise solutions include: Private blockchain networks for enterprise use; Supply chain tracking and transparency systems; Identity management and KYC/AML solutions; Document verification and notarization; Asset tokenization platforms; Cross-border payment systems; Healthcare data management; Real estate tokenization; Insurance claim processing; Voting and governance systems; Data privacy and compliance solutions; Integration with existing enterprise systems. We ensure enterprise-grade security, scalability, and compliance with industry regulations.',
    confidence: 0.96,
    sources: ['Enterprise Portfolio', 'Fortune 500 Clients', 'Industry Solutions'],
    tags: ['enterprise', 'private-blockchain', 'supply-chain', 'identity', 'compliance'],
    difficulty: 'expert',
    relatedQuestions: [
      'How do you ensure enterprise security?',
      'What compliance standards do you support?',
      'How do you integrate with existing systems?'
    ]
  },

  // Pricing and Timelines
  {
    id: 'pricing-001',
    category: 'pricing',
    subcategory: 'development',
    question: 'What are your development costs and timelines?',
    answer: 'Our pricing varies based on project complexity: Smart Contract Development: $5,000 - $50,000 (2-8 weeks); DApp Development: $15,000 - $150,000 (4-16 weeks); Layer-1 Blockchain: $100,000 - $500,000 (6-12 months); Layer-2 Solutions: $50,000 - $200,000 (3-8 months); DeFi Protocols: $25,000 - $100,000 (2-6 months); NFT Platforms: $10,000 - $75,000 (2-4 months); Telegram Bots: $2,000 - $15,000 (1-3 weeks); Security Audits: $3,000 - $25,000 (1-4 weeks). We provide detailed quotes based on your specific requirements and offer flexible payment terms.',
    confidence: 0.92,
    sources: ['Pricing Structure', 'Project History', 'Client Agreements'],
    tags: ['pricing', 'timeline', 'cost', 'development', 'quotes'],
    difficulty: 'beginner',
    relatedQuestions: [
      'Do you offer payment plans?',
      'What is included in the development cost?',
      'How do you handle project changes?'
    ]
  },

  // Technology Stack
  {
    id: 'tech-001',
    category: 'technology',
    subcategory: 'stack',
    question: 'What technologies and programming languages do you use?',
    answer: 'Our technology stack includes: Blockchain: Ethereum, Solana, Polygon, BSC, Avalanche, Near Protocol; Smart Contracts: Solidity, Rust, Vyper, Move; Frontend: React, Next.js, Vue.js, Angular, TypeScript; Backend: Node.js, Python, Go, Java, C++; Databases: PostgreSQL, MongoDB, Redis, IPFS; DevOps: Docker, Kubernetes, AWS, Azure, GCP; AI/ML: Python, TensorFlow, PyTorch, OpenAI; Mobile: React Native, Flutter, Swift, Kotlin; Testing: Jest, Mocha, Truffle, Hardhat; Security: OWASP, Consensys, OpenZeppelin. We stay updated with the latest technologies and best practices.',
    confidence: 0.94,
    sources: ['Technical Expertise', 'Development Experience', 'Industry Knowledge'],
    tags: ['technology', 'programming', 'blockchain', 'AI', 'development'],
    difficulty: 'intermediate',
    relatedQuestions: [
      'What blockchain networks do you support?',
      'Do you provide training for your technologies?',
      'How do you ensure code quality?'
    ]
  },

  // Support and Maintenance
  {
    id: 'support-001',
    category: 'support',
    subcategory: 'maintenance',
    question: 'What ongoing support and maintenance do you provide?',
    answer: 'Our support services include: 24/7 technical support and monitoring; Regular security updates and patches; Performance optimization and scaling; Bug fixes and issue resolution; Feature enhancements and upgrades; Smart contract upgrades and migrations; Documentation and training; Regular health checks and audits; Emergency response and incident management; Compliance monitoring and updates; Integration support for new features; Knowledge transfer and training sessions. We provide comprehensive post-launch support to ensure your blockchain solutions remain secure and efficient.',
    confidence: 0.93,
    sources: ['Support Portfolio', 'Client Testimonials', 'Service Agreements'],
    tags: ['support', 'maintenance', 'monitoring', 'updates', 'training'],
    difficulty: 'beginner',
    relatedQuestions: [
      'What is included in your support package?',
      'How do you handle emergency issues?',
      'Do you provide training for your solutions?'
    ]
  },

  // App Development Services
  {
    id: 'app-dev-001',
    category: 'app-development',
    subcategory: 'services',
    question: 'Can you develop mobile apps and web applications?',
    answer: 'Yes, Trivexa Technologies develops comprehensive mobile and web applications including: Mobile Apps - Native iOS and Android apps, React Native cross-platform apps, Flutter applications, Progressive Web Apps (PWAs); Web Applications - React.js, Next.js, Vue.js, Angular applications, Node.js backends, Full-stack solutions; Blockchain-Integrated Apps - DApps with mobile interfaces, Web3 wallet integrations, DeFi mobile apps, NFT mobile platforms; Enterprise Apps - Business process automation, CRM systems, ERP solutions, Custom business applications; E-commerce Apps - Online marketplaces, Payment processing, Inventory management, Order tracking systems. We have delivered 100+ successful app projects with modern UI/UX, scalable architecture, and enterprise-grade security.',
    confidence: 0.97,
    sources: ['App Development Portfolio', 'Client Projects', 'Technical Expertise'],
    tags: ['mobile-apps', 'web-apps', 'blockchain-apps', 'enterprise-apps'],
    difficulty: 'intermediate',
    relatedQuestions: [
      'What technologies do you use for app development?',
      'How much does app development cost?',
      'What is the app development timeline?'
    ]
  },

  // App Development Capabilities
  {
    id: 'app-dev-002',
    category: 'app-development',
    subcategory: 'capabilities',
    question: 'Does the company develop apps?',
    answer: 'Yes, Trivexa Technologies is a premier app development company that creates comprehensive mobile and web applications. We specialize in: Native Mobile Apps - iOS and Android applications with platform-specific optimizations; Cross-Platform Apps - React Native and Flutter solutions for cost-effective development; Web Applications - Modern web platforms using React.js, Next.js, Vue.js, and Angular; Progressive Web Apps - Mobile-responsive websites with app-like functionality; Blockchain-Integrated Apps - DApps, DeFi platforms, NFT marketplaces, and Web3 applications; Enterprise Applications - Custom business solutions, CRM systems, ERP platforms, and workflow automation; E-commerce Platforms - Online stores, marketplaces, and payment processing systems. With 100+ successful projects delivered to Fortune 500 companies, we ensure enterprise-grade security, scalability, and performance.',
    confidence: 0.98,
    sources: ['App Development Portfolio', 'Fortune 500 Clients', 'Technical Expertise'],
    tags: ['mobile-apps', 'web-apps', 'enterprise-apps', 'blockchain-apps'],
    difficulty: 'beginner',
    relatedQuestions: [
      'What types of apps do you develop?',
      'How much does app development cost?',
      'What is your app development process?'
    ]
  },

  // Company App Development
  {
    id: 'app-dev-003',
    category: 'app-development',
    subcategory: 'company',
    question: 'Can the company develop apps?',
    answer: 'Absolutely! Trivexa Technologies is a leading app development company with extensive experience in creating mobile and web applications. Our capabilities include: Mobile App Development - Native iOS/Android apps, cross-platform solutions, and Progressive Web Apps; Web Application Development - Full-stack web applications, e-commerce platforms, and enterprise solutions; Blockchain App Development - DApps, DeFi platforms, NFT marketplaces, and Web3 applications; Enterprise App Development - Custom business applications, CRM systems, and workflow automation. We have successfully delivered 100+ app projects to Fortune 500 companies with 99.9% uptime and enterprise-grade security. Our team of 50-100 blockchain specialists ensures cutting-edge technology and innovative solutions.',
    confidence: 0.99,
    sources: ['Company Portfolio', 'Fortune 500 Clients', 'Technical Expertise'],
    tags: ['company', 'app-development', 'capabilities', 'enterprise'],
    difficulty: 'beginner',
    relatedQuestions: [
      'What is your app development experience?',
      'Which companies have you worked with?',
      'What technologies do you use?'
    ]
  },

  // Website Development
  {
    id: 'website-dev-001',
    category: 'website-development',
    subcategory: 'services',
    question: 'Do you develop websites and web platforms?',
    answer: 'Absolutely! Trivexa Technologies specializes in comprehensive website and web platform development including: Corporate Websites - Professional business websites, Portfolio sites, Company profiles, Marketing websites; E-commerce Platforms - Online stores, Multi-vendor marketplaces, Payment gateways, Inventory management; Web Applications - SaaS platforms, Business applications, Custom web solutions, API development; Blockchain Websites - DApp interfaces, DeFi platforms, NFT marketplaces, Crypto exchanges; Enterprise Portals - Intranet systems, Employee portals, Client dashboards, Management systems; Progressive Web Apps - Mobile-responsive websites, Offline functionality, Push notifications, App-like experience. We create modern, responsive, and SEO-optimized websites with fast loading times and excellent user experience.',
    confidence: 0.96,
    sources: ['Website Portfolio', 'Development Experience', 'Client Testimonials'],
    tags: ['websites', 'web-platforms', 'e-commerce', 'blockchain-websites'],
    difficulty: 'beginner',
    relatedQuestions: [
      'What is included in website development?',
      'How do you ensure website performance?',
      'Do you provide website maintenance?'
    ]
  },

  // Blockchain App Integration
  {
    id: 'blockchain-app-001',
    category: 'blockchain-apps',
    subcategory: 'integration',
    question: 'How do you integrate blockchain with mobile and web apps?',
    answer: 'Trivexa Technologies excels in blockchain integration for mobile and web applications: Web3 Integration - MetaMask, WalletConnect, Web3.js, Ethers.js integration; Smart Contract Integration - Direct contract interaction, Event listening, Transaction management; DeFi Integration - DEX integration, Yield farming, Liquidity provision, Staking mechanisms; NFT Integration - NFT minting, Marketplace integration, Metadata handling, Royalty management; Cross-chain Integration - Multi-blockchain support, Bridge protocols, Cross-chain transactions; Security Integration - Wallet security, Transaction signing, Private key management; API Development - Custom blockchain APIs, RESTful services, GraphQL endpoints; Real-time Updates - WebSocket connections, Event streaming, Live data feeds. We ensure seamless blockchain functionality with excellent user experience.',
    confidence: 0.98,
    sources: ['Blockchain Integration Projects', 'Technical Expertise', 'Client Success Stories'],
    tags: ['blockchain-integration', 'web3', 'defi', 'nft', 'cross-chain'],
    difficulty: 'advanced',
    relatedQuestions: [
      'What blockchain networks do you support?',
      'How do you ensure blockchain app security?',
      'What are the costs of blockchain integration?'
    ]
  },

  // Development Process
  {
    id: 'dev-process-001',
    category: 'development-process',
    subcategory: 'methodology',
    question: 'What is your development process for apps and websites?',
    answer: 'Trivexa Technologies follows a comprehensive development process: Planning Phase - Requirements analysis, Technical architecture, Project roadmap, Resource allocation; Design Phase - UI/UX design, Wireframing, Prototyping, User experience optimization; Development Phase - Agile methodology, Code development, Version control, Quality assurance; Testing Phase - Unit testing, Integration testing, Security testing, Performance testing; Deployment Phase - Deployment planning, Server configuration, Domain setup, SSL certificates; Launch Phase - Go-live support, User training, Documentation, Handover; Maintenance Phase - Ongoing support, Updates, Monitoring, Performance optimization. We use modern development tools, best practices, and maintain 99.9% uptime for all projects.',
    confidence: 0.95,
    sources: ['Development Methodology', 'Project Management', 'Quality Assurance'],
    tags: ['development-process', 'methodology', 'quality-assurance', 'project-management'],
    difficulty: 'intermediate',
    relatedQuestions: [
      'How long does development take?',
      'What is included in the development cost?',
      'Do you provide project management?'
    ]
  }
]

// Advanced AI response generation
export function generateAdvancedAIResponse(question: string, language: string = 'en'): {
  answer: string
  confidence: number
  sources: string[]
  category: string
  relatedQuestions: string[]
} {
  const normalizedQuestion = question.toLowerCase().trim()
  
  // Find the best matching training data
  let bestMatch = null
  let bestScore = 0
  
  for (const data of advancedTrainingData) {
    const questionWords = data.question.toLowerCase().split(' ')
    const questionWordsInInput = questionWords.filter(word => 
      normalizedQuestion.includes(word)
    )
    let score = questionWordsInInput.length / questionWords.length
    
    // Also check if the input contains key words from the question
    const inputWords = normalizedQuestion.split(' ')
    const inputWordsInQuestion = inputWords.filter(word => 
      data.question.toLowerCase().includes(word)
    )
    const reverseScore = inputWordsInQuestion.length / inputWords.length
    score = Math.max(score, reverseScore)
    
    // Boost score for specific keywords
    const keywords = ['app', 'application', 'mobile', 'website', 'web', 'dapp', 'defi', 'nft', 'blockchain', 'smart contract', 'development', 'develop', 'company', 'can', 'does']
    const matchingKeywords = keywords.filter(keyword => normalizedQuestion.includes(keyword))
    if (matchingKeywords.length > 0) {
      score += matchingKeywords.length * 0.3
    }
    
    // Boost score for category-specific terms
    if (data.category === 'app-development' && (normalizedQuestion.includes('app') || normalizedQuestion.includes('mobile') || normalizedQuestion.includes('web') || normalizedQuestion.includes('develop'))) {
      score += 0.4
    }
    
    if (data.category === 'website-development' && (normalizedQuestion.includes('website') || normalizedQuestion.includes('web') || normalizedQuestion.includes('platform'))) {
      score += 0.3
    }
    
    if (data.category === 'dapp' && (normalizedQuestion.includes('dapp') || normalizedQuestion.includes('defi') || normalizedQuestion.includes('nft'))) {
      score += 0.3
    }
    
    // Special boost for company + develop questions
    if (normalizedQuestion.includes('company') && normalizedQuestion.includes('develop')) {
      score += 0.5
    }
    
    if (score > bestScore) {
      bestScore = score
      bestMatch = data
    }
  }
  
  // If no good match found, provide a comprehensive response based on keywords
  if (!bestMatch || bestScore < 0.3) {
    const questionLower = normalizedQuestion
    
    // Check for specific keywords and provide targeted responses
    if (questionLower.includes('app') || questionLower.includes('application') || questionLower.includes('mobile') || questionLower.includes('website') || questionLower.includes('develop') || questionLower.includes('company')) {
      return {
        answer: language === 'en' 
          ? "Yes, Trivexa Technologies develops comprehensive mobile and web applications including native iOS/Android apps, React Native cross-platform apps, Progressive Web Apps, corporate websites, e-commerce platforms, and blockchain-integrated applications. We have delivered 100+ successful app projects with modern UI/UX, scalable architecture, and enterprise-grade security. Our development services include full-stack solutions, API development, and ongoing maintenance support."
          : "हां, Trivexa Technologies comprehensive mobile और web applications develop करती है जिसमें native iOS/Android apps, React Native cross-platform apps, Progressive Web Apps, corporate websites, e-commerce platforms, और blockchain-integrated applications शामिल हैं। हमने 100+ सफल app projects deliver किए हैं modern UI/UX, scalable architecture, और enterprise-grade security के साथ।",
        confidence: 0.8,
        sources: ['App Development Portfolio', 'Technical Expertise', 'Client Success Stories'],
        category: 'app-development',
        relatedQuestions: [
          'What technologies do you use for app development?',
          'How much does app development cost?',
          'What is the development timeline?'
        ]
      }
    }
    
    if (questionLower.includes('dapp') || questionLower.includes('defi') || questionLower.includes('nft') || questionLower.includes('blockchain')) {
      return {
        answer: language === 'en' 
          ? "Trivexa Technologies specializes in comprehensive blockchain development including Layer-1/Layer-2 blockchains, DApps, smart contracts, DeFi protocols, NFT platforms, and Web3 solutions. We have successfully delivered 50+ blockchain projects for Fortune 500 companies with 99.9% uptime and enterprise-grade security. Our services include custom blockchain development, smart contract auditing, and ongoing technical support."
          : "Trivexa Technologies comprehensive blockchain development में specialize करती है जिसमें Layer-1/Layer-2 blockchains, DApps, smart contracts, DeFi protocols, NFT platforms, और Web3 solutions शामिल हैं। हमने Fortune 500 companies के लिए 50+ blockchain projects successfully deliver किए हैं 99.9% uptime और enterprise-grade security के साथ।",
        confidence: 0.9,
        sources: ['Blockchain Portfolio', 'Fortune 500 Clients', 'Technical Expertise'],
        category: 'blockchain',
        relatedQuestions: [
          'What blockchain services do you offer?',
          'How do you ensure blockchain security?',
          'What are your development costs?'
        ]
      }
    }
    
    // Default comprehensive response
    return {
      answer: language === 'en' 
        ? "Trivexa Technologies is a premier enterprise blockchain development company offering comprehensive development services including: Mobile & Web Apps - Native and cross-platform applications, corporate websites, e-commerce platforms; Blockchain Development - Layer-1/Layer-2 blockchains, DApps, smart contracts, DeFi protocols, NFT platforms; AI Integration - AI-powered smart contracts, machine learning models, automated systems; Enterprise Solutions - Private blockchains, supply chain tracking, identity management. We serve Fortune 500 companies with 100+ successful projects and 99.9% uptime SLA. Contact us at trivexatechpvt@gmail.com or WhatsApp: +91-6301846681 for a free consultation."
        : "Trivexa Technologies एक premier enterprise blockchain development company है जो comprehensive development services offer करती है जिसमें शामिल हैं: Mobile & Web Apps - Native और cross-platform applications, corporate websites, e-commerce platforms; Blockchain Development - Layer-1/Layer-2 blockchains, DApps, smart contracts, DeFi protocols, NFT platforms; AI Integration - AI-powered smart contracts, machine learning models, automated systems; Enterprise Solutions - Private blockchains, supply chain tracking, identity management। हम Fortune 500 companies को serve करते हैं 100+ successful projects और 99.9% uptime SLA के साथ।",
      confidence: 0.7,
      sources: ['Company Overview', 'Service Portfolio', 'Client Testimonials'],
      category: 'company',
      relatedQuestions: [
        'What services do you offer?',
        'How can I get started?',
        'What are your development costs?'
      ]
    }
  }
  
  return {
    answer: bestMatch.answer,
    confidence: bestMatch.confidence,
    sources: bestMatch.sources,
    category: bestMatch.category,
    relatedQuestions: bestMatch.relatedQuestions
  }
}

// Get training statistics
export function getAdvancedTrainingStats() {
  const categories = Array.from(new Set(advancedTrainingData.map(item => item.category)))
  const difficulties = Array.from(new Set(advancedTrainingData.map(item => item.difficulty)))
  
  return {
    totalQuestions: advancedTrainingData.length,
    categories: categories.length,
    difficulties: difficulties.length,
    averageConfidence: advancedTrainingData.reduce((sum, item) => sum + item.confidence, 0) / advancedTrainingData.length,
    categoryBreakdown: categories.map(category => ({
      category,
      count: advancedTrainingData.filter(item => item.category === category).length
    }))
  }
}
