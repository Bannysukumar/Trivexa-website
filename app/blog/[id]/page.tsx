import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, BookOpen } from 'lucide-react'

// Blog posts data (should match the data in BlogGrid component)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Layer-2 Blockchain Solutions",
    excerpt: "Explore how Layer-2 solutions are revolutionizing blockchain scalability and what it means for the future of Web3 applications.",
    content: `
      <p>Layer-2 blockchain solutions represent one of the most significant advancements in blockchain technology, addressing the critical scalability challenges that have plagued first-generation blockchains like Ethereum.</p>
      
      <h2>Understanding Layer-2 Solutions</h2>
      <p>Layer-2 solutions are protocols built on top of existing blockchains (Layer-1) that process transactions off-chain while maintaining the security guarantees of the underlying blockchain. This approach allows for significantly higher throughput and lower transaction costs.</p>
      
      <h3>Types of Layer-2 Solutions</h3>
      <ul>
        <li><strong>State Channels:</strong> Enable off-chain transactions between parties with on-chain settlement</li>
        <li><strong>Sidechains:</strong> Independent blockchains that run parallel to the main chain</li>
        <li><strong>Plasma:</strong> Child chains that periodically commit to the parent chain</li>
        <li><strong>Rollups:</strong> Execute transactions off-chain but post transaction data on-chain</li>
      </ul>
      
      <h2>Benefits of Layer-2 Solutions</h2>
      <p>Layer-2 solutions offer several key advantages:</p>
      <ul>
        <li>Increased transaction throughput</li>
        <li>Reduced transaction costs</li>
        <li>Improved user experience</li>
        <li>Maintained security through Layer-1 settlement</li>
      </ul>
      
      <h2>Future Implications</h2>
      <p>As Layer-2 solutions continue to mature, we can expect to see more sophisticated applications that were previously impossible due to scalability constraints. This includes complex DeFi protocols, gaming applications, and enterprise solutions.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Blockchain",
    tags: ["Layer-2", "Scalability", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&crop=center",
    featured: true
  },
  {
    id: 2,
    title: "Smart Contract Security Best Practices",
    excerpt: "Learn essential security practices for smart contract development to protect your DeFi protocols and DApps from vulnerabilities.",
    content: `
      <p>Smart contract security is paramount in the blockchain ecosystem, especially given the immutable nature of deployed contracts and the significant financial value they often manage.</p>
      
      <h2>Common Smart Contract Vulnerabilities</h2>
      <p>Understanding common vulnerabilities is the first step in building secure smart contracts:</p>
      
      <h3>Reentrancy Attacks</h3>
      <p>Reentrancy attacks occur when a contract calls an external contract before updating its own state, allowing the external contract to call back into the original contract.</p>
      
      <h3>Integer Overflow/Underflow</h3>
      <p>While Solidity 0.8+ has built-in protection, older versions and certain operations can still be vulnerable to integer overflow and underflow attacks.</p>
      
      <h3>Access Control Issues</h3>
      <p>Improper access control can allow unauthorized users to execute privileged functions or access sensitive data.</p>
      
      <h2>Security Best Practices</h2>
      <ul>
        <li>Use the latest Solidity compiler version</li>
        <li>Implement proper access controls</li>
        <li>Follow the checks-effects-interactions pattern</li>
        <li>Use established libraries like OpenZeppelin</li>
        <li>Conduct thorough testing and audits</li>
      </ul>
      
      <h2>Testing and Auditing</h2>
      <p>Comprehensive testing and professional auditing are essential for identifying and mitigating security vulnerabilities before deployment.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Security",
    tags: ["Smart Contracts", "Security", "DeFi"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 3,
    title: "Building Scalable DApps: A Complete Guide",
    excerpt: "Discover the key strategies and technologies for building decentralized applications that can handle millions of users.",
    content: `
      <p>Building scalable decentralized applications (DApps) requires careful consideration of architecture, user experience, and blockchain limitations.</p>
      
      <h2>DApp Architecture Considerations</h2>
      <p>When designing a DApp, consider the following architectural patterns:</p>
      
      <h3>Frontend Architecture</h3>
      <p>The frontend should be designed to handle blockchain interactions gracefully, with proper error handling and user feedback.</p>
      
      <h3>Backend Services</h3>
      <p>While DApps are decentralized, many still benefit from backend services for data indexing, caching, and user management.</p>
      
      <h2>Scalability Strategies</h2>
      <ul>
        <li>Use Layer-2 solutions for transaction processing</li>
        <li>Implement efficient data structures</li>
        <li>Optimize smart contract gas usage</li>
        <li>Use IPFS for decentralized storage</li>
        <li>Implement proper caching strategies</li>
      </ul>
      
      <h2>User Experience Optimization</h2>
      <p>DApp user experience can be significantly improved through:</p>
      <ul>
        <li>Wallet integration and onboarding</li>
        <li>Transaction status tracking</li>
        <li>Error handling and recovery</li>
        <li>Mobile responsiveness</li>
      </ul>
      
      <h2>Performance Monitoring</h2>
      <p>Implement comprehensive monitoring to track DApp performance and user engagement metrics.</p>
    `,
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Web3",
    tags: ["DApps", "Scalability", "Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 4,
    title: "DeFi Protocol Development: Key Considerations",
    excerpt: "Essential factors to consider when developing DeFi protocols, from tokenomics to security and user experience.",
    content: `
      <p>DeFi protocol development requires a deep understanding of financial mechanisms, security considerations, and user experience design.</p>
      
      <h2>Tokenomics Design</h2>
      <p>Proper tokenomics are crucial for the long-term success of any DeFi protocol:</p>
      
      <h3>Token Distribution</h3>
      <p>Fair and sustainable token distribution ensures community participation and prevents centralization.</p>
      
      <h3>Incentive Mechanisms</h3>
      <p>Well-designed incentive mechanisms encourage desired behaviors while maintaining protocol sustainability.</p>
      
      <h2>Security Considerations</h2>
      <ul>
        <li>Smart contract audits</li>
        <li>Bug bounty programs</li>
        <li>Timelock mechanisms</li>
        <li>Multi-signature wallets</li>
        <li>Emergency pause functionality</li>
      </ul>
      
      <h2>User Experience</h2>
      <p>DeFi protocols must balance complexity with usability:</p>
      <ul>
        <li>Intuitive interfaces</li>
        <li>Clear risk communication</li>
        <li>Educational resources</li>
        <li>Mobile optimization</li>
      </ul>
      
      <h2>Governance Implementation</h2>
      <p>Decentralized governance allows the community to guide protocol development and parameter adjustments.</p>
    `,
    author: "David Kim",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "DeFi",
    tags: ["DeFi", "Protocols", "Development"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 5,
    title: "NFT Marketplace Development: Complete Guide",
    excerpt: "Step-by-step guide to building a successful NFT marketplace with all the essential features and best practices.",
    content: `
      <p>NFT marketplaces have become a cornerstone of the Web3 ecosystem, providing platforms for creators and collectors to trade digital assets.</p>
      
      <h2>Core Features</h2>
      <p>A successful NFT marketplace should include:</p>
      
      <h3>Minting Functionality</h3>
      <p>Allow users to create and mint NFTs with custom metadata and media files.</p>
      
      <h3>Trading Mechanisms</h3>
      <p>Implement both fixed-price and auction-based trading options.</p>
      
      <h3>Wallet Integration</h3>
      <p>Seamless integration with popular Web3 wallets like MetaMask and WalletConnect.</p>
      
      <h2>Technical Implementation</h2>
      <ul>
        <li>Smart contract development</li>
        <li>IPFS integration for metadata storage</li>
        <li>Frontend development with Web3 libraries</li>
        <li>Backend services for indexing and caching</li>
      </ul>
      
      <h2>User Experience Design</h2>
      <p>Focus on creating an intuitive and engaging user experience:</p>
      <ul>
        <li>Clean, modern interface design</li>
        <li>Responsive mobile experience</li>
        <li>Search and filtering capabilities</li>
        <li>User profiles and collections</li>
      </ul>
      
      <h2>Monetization Strategies</h2>
      <p>Common monetization approaches include transaction fees, premium features, and creator royalties.</p>
    `,
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "NFT",
    tags: ["NFT", "Marketplace", "Development"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 6,
    title: "Blockchain Integration in Healthcare",
    excerpt: "How blockchain technology is transforming healthcare with secure patient data management and interoperability.",
    content: `
      <p>Blockchain technology is revolutionizing healthcare by providing secure, transparent, and interoperable solutions for patient data management.</p>
      
      <h2>Healthcare Challenges</h2>
      <p>Traditional healthcare systems face several challenges:</p>
      <ul>
        <li>Data silos and interoperability issues</li>
        <li>Patient data privacy concerns</li>
        <li>Counterfeit medications</li>
        <li>Supply chain transparency</li>
      </ul>
      
      <h2>Blockchain Solutions</h2>
      <h3>Patient Data Management</h3>
      <p>Blockchain enables secure, patient-controlled access to medical records while maintaining privacy and security.</p>
      
      <h3>Supply Chain Tracking</h3>
      <p>Track pharmaceuticals and medical devices from manufacturer to patient, ensuring authenticity and quality.</p>
      
      <h3>Clinical Trials</h3>
      <p>Improve transparency and data integrity in clinical trial processes.</p>
      
      <h2>Implementation Considerations</h2>
      <ul>
        <li>Regulatory compliance (HIPAA, GDPR)</li>
        <li>Scalability requirements</li>
        <li>Integration with existing systems</li>
        <li>User adoption and training</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>As blockchain technology matures and regulatory frameworks evolve, we can expect broader adoption in healthcare applications.</p>
    `,
    author: "James Thompson",
    date: "2024-01-03",
    readTime: "7 min read",
    category: "Industry News",
    tags: ["Healthcare", "Blockchain", "Integration"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 7,
    title: "Web3 Wallet Security: Best Practices",
    excerpt: "Essential security measures to protect your Web3 wallet and digital assets from common threats and attacks.",
    content: `
      <p>Web3 wallet security is crucial for protecting your digital assets in the decentralized ecosystem. With the increasing value of cryptocurrencies and NFTs, implementing proper security measures is more important than ever.</p>
      
      <h2>Common Security Threats</h2>
      <p>Understanding the threats is the first step in protecting your assets:</p>
      
      <h3>Phishing Attacks</h3>
      <p>Malicious websites and emails designed to steal your private keys or seed phrases.</p>
      
      <h3>Malware and Keyloggers</h3>
      <p>Software that can capture your keystrokes or access your wallet files.</p>
      
      <h3>Social Engineering</h3>
      <p>Attempts to trick you into revealing sensitive information through manipulation.</p>
      
      <h2>Security Best Practices</h2>
      <ul>
        <li>Use hardware wallets for large amounts</li>
        <li>Never share your seed phrase</li>
        <li>Verify website URLs before connecting</li>
        <li>Keep software updated</li>
        <li>Use strong, unique passwords</li>
        <li>Enable two-factor authentication where possible</li>
      </ul>
      
      <h2>Wallet Types and Security</h2>
      <p>Different wallet types offer varying levels of security:</p>
      <ul>
        <li><strong>Hardware Wallets:</strong> Highest security, offline storage</li>
        <li><strong>Software Wallets:</strong> Convenient but require careful management</li>
        <li><strong>Web Wallets:</strong> Easy to use but higher risk</li>
      </ul>
      
      <h2>Recovery and Backup</h2>
      <p>Proper backup and recovery procedures ensure you can regain access to your funds if needed.</p>
    `,
    author: "Alex Martinez",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Security",
    tags: ["Web3", "Security", "Wallets"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 8,
    title: "Cross-Chain Bridge Development Guide",
    excerpt: "Learn how to build secure cross-chain bridges for seamless asset transfers between different blockchain networks.",
    content: `
      <p>Cross-chain bridges enable interoperability between different blockchain networks, allowing users to transfer assets and data across chains.</p>
      
      <h2>Bridge Architecture</h2>
      <p>Cross-chain bridges typically consist of several key components:</p>
      
      <h3>Lock and Mint Mechanism</h3>
      <p>Assets are locked on the source chain and equivalent tokens are minted on the destination chain.</p>
      
      <h3>Burn and Release Mechanism</h3>
      <p>Tokens are burned on the destination chain and original assets are released on the source chain.</p>
      
      <h2>Security Considerations</h2>
      <ul>
        <li>Multi-signature validation</li>
        <li>Time-locked transactions</li>
        <li>Oracle integration for price feeds</li>
        <li>Audit and testing procedures</li>
        <li>Emergency pause mechanisms</li>
      </ul>
      
      <h2>Implementation Challenges</h2>
      <p>Building cross-chain bridges presents several technical challenges:</p>
      <ul>
        <li>Consensus mechanism differences</li>
        <li>Transaction finality variations</li>
        <li>Network congestion handling</li>
        <li>Fee optimization</li>
      </ul>
      
      <h2>Popular Bridge Solutions</h2>
      <p>Several established bridge solutions provide frameworks for cross-chain development:</p>
      <ul>
        <li>Chainlink Cross-Chain Interoperability Protocol</li>
        <li>Wormhole</li>
        <li>LayerZero</li>
        <li>Axelar</li>
      </ul>
      
      <h2>Future Developments</h2>
      <p>As blockchain interoperability becomes more important, we can expect continued innovation in cross-chain technologies.</p>
    `,
    author: "Rachel Green",
    date: "2023-12-28",
    readTime: "8 min read",
    category: "Blockchain",
    tags: ["Cross-Chain", "Bridges", "Development"],
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 9,
    title: "DeFi Yield Farming Strategies",
    excerpt: "Advanced yield farming strategies and risk management techniques for maximizing returns in DeFi protocols.",
    content: `
      <p>Yield farming has become a cornerstone of DeFi, allowing users to earn rewards by providing liquidity to various protocols.</p>
      
      <h2>Understanding Yield Farming</h2>
      <p>Yield farming involves providing liquidity to DeFi protocols in exchange for rewards, typically in the form of tokens.</p>
      
      <h3>Liquidity Provision</h3>
      <p>Users provide pairs of tokens to liquidity pools, enabling trading and earning fees from transactions.</p>
      
      <h3>Reward Mechanisms</h3>
      <p>Protocols distribute governance tokens or other rewards to incentivize liquidity provision.</p>
      
      <h2>Risk Management</h2>
      <ul>
        <li>Impermanent loss assessment</li>
        <li>Smart contract risk evaluation</li>
        <li>Token volatility analysis</li>
        <li>Protocol sustainability research</li>
        <li>Diversification strategies</li>
      </ul>
      
      <h2>Advanced Strategies</h2>
      <h3>Leveraged Yield Farming</h3>
      <p>Using borrowed funds to increase position size and potential returns.</p>
      
      <h3>Auto-Compounding</h3>
      <p>Automatically reinvesting rewards to maximize compound growth.</p>
      
      <h3>Cross-Protocol Strategies</h3>
      <p>Moving funds between protocols to capture the highest yields.</p>
      
      <h2>Tools and Platforms</h2>
      <p>Several tools can help optimize yield farming strategies:</p>
      <ul>
        <li>Yield aggregators</li>
        <li>Analytics platforms</li>
        <li>Risk assessment tools</li>
        <li>Automation services</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Successful yield farming requires careful planning and risk management to maximize returns while minimizing losses.</p>
    `,
    author: "Tom Wilson",
    date: "2023-12-25",
    readTime: "9 min read",
    category: "DeFi",
    tags: ["DeFi", "Yield Farming", "Strategies"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 10,
    title: "NFT Metadata Standards and Best Practices",
    excerpt: "Understanding NFT metadata standards, IPFS integration, and best practices for creating robust NFT collections.",
    content: `
      <p>NFT metadata is crucial for defining the properties, attributes, and media associated with non-fungible tokens.</p>
      
      <h2>Metadata Standards</h2>
      <p>Several standards have emerged for NFT metadata:</p>
      
      <h3>ERC-721 Metadata Extension</h3>
      <p>The standard interface for NFT metadata, defining the structure for token information.</p>
      
      <h3>ERC-1155 Metadata URI</h3>
      <p>Similar to ERC-721 but designed for semi-fungible tokens and batch operations.</p>
      
      <h2>Metadata Structure</h2>
      <p>Standard NFT metadata typically includes:</p>
      <ul>
        <li>Name and description</li>
        <li>Image and media files</li>
        <li>Attributes and traits</li>
        <li>External links</li>
        <li>Creator information</li>
      </ul>
      
      <h2>IPFS Integration</h2>
      <p>IPFS (InterPlanetary File System) provides decentralized storage for NFT metadata and media files.</p>
      
      <h3>Benefits of IPFS</h3>
      <ul>
        <li>Decentralized storage</li>
        <li>Content addressing</li>
        <li>Permanent availability</li>
        <li>Cost-effective solution</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use descriptive and accurate metadata</li>
        <li>Optimize image file sizes</li>
        <li>Include comprehensive attributes</li>
        <li>Ensure metadata permanence</li>
        <li>Test metadata rendering</li>
      </ul>
      
      <h2>Tools and Services</h2>
      <p>Various tools can help with NFT metadata creation and management:</p>
      <ul>
        <li>Metadata generators</li>
        <li>IPFS pinning services</li>
        <li>Batch upload tools</li>
        <li>Validation services</li>
      </ul>
      
      <h2>Future Considerations</h2>
      <p>As the NFT ecosystem evolves, metadata standards and practices will continue to improve.</p>
    `,
    author: "Sophie Lee",
    date: "2023-12-22",
    readTime: "7 min read",
    category: "NFT",
    tags: ["NFT", "Metadata", "IPFS"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 11,
    title: "Blockchain Consensus Mechanisms Explained",
    excerpt: "A comprehensive guide to different blockchain consensus mechanisms and their trade-offs in security and scalability.",
    content: `
      <p>Consensus mechanisms are the foundation of blockchain security, determining how network participants agree on the validity of transactions.</p>
      
      <h2>Proof of Work (PoW)</h2>
      <p>PoW requires miners to solve complex mathematical puzzles to validate transactions and create new blocks.</p>
      
      <h3>Advantages</h3>
      <ul>
        <li>High security through computational work</li>
        <li>Battle-tested in Bitcoin</li>
        <li>Decentralized validation</li>
      </ul>
      
      <h3>Disadvantages</h3>
      <ul>
        <li>High energy consumption</li>
        <li>Slow transaction processing</li>
        <li>Scalability limitations</li>
      </ul>
      
      <h2>Proof of Stake (PoS)</h2>
      <p>PoS selects validators based on the amount of cryptocurrency they hold and are willing to "stake" as collateral.</p>
      
      <h3>Advantages</h3>
      <ul>
        <li>Lower energy consumption</li>
        <li>Faster transaction processing</li>
        <li>Better scalability potential</li>
      </ul>
      
      <h3>Disadvantages</h3>
      <ul>
        <li>Potential for centralization</li>
        <li>Nothing-at-stake problem</li>
        <li>Long-range attacks</li>
      </ul>
      
      <h2>Other Consensus Mechanisms</h2>
      <h3>Delegated Proof of Stake (DPoS)</h3>
      <p>Token holders vote for delegates who validate transactions on their behalf.</p>
      
      <h3>Proof of Authority (PoA)</h3>
      <p>Pre-approved validators with known identities validate transactions.</p>
      
      <h3>Proof of History (PoH)</h3>
      <p>Creates a historical record of events to improve efficiency.</p>
      
      <h2>Choosing the Right Mechanism</h2>
      <p>The choice of consensus mechanism depends on the specific requirements of the blockchain application, balancing security, scalability, and decentralization.</p>
    `,
    author: "Mark Johnson",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "Blockchain",
    tags: ["Consensus", "Blockchain", "Security"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&crop=center",
    featured: false
  },
  {
    id: 12,
    title: "Building Decentralized Identity Solutions",
    excerpt: "How to implement decentralized identity (DID) solutions using blockchain technology for enhanced privacy and security.",
    content: `
      <p>Decentralized Identity (DID) solutions provide users with control over their personal data and digital identity without relying on centralized authorities.</p>
      
      <h2>What is Decentralized Identity?</h2>
      <p>DID allows individuals to create, own, and control their digital identity across different platforms and services.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Self-sovereignty</li>
        <li>Privacy by design</li>
        <li>Interoperability</li>
        <li>Decentralization</li>
      </ul>
      
      <h2>DID Components</h2>
      <h3>DID Identifiers</h3>
      <p>Unique identifiers that are cryptographically verifiable and do not require a central registration authority.</p>
      
      <h3>DID Documents</h3>
      <p>JSON-LD documents that contain public keys, authentication methods, and service endpoints.</p>
      
      <h3>Verifiable Credentials</h3>
      <p>Cryptographically signed statements that can be verified without revealing unnecessary information.</p>
      
      <h2>Implementation Standards</h2>
      <ul>
        <li>W3C DID Specification</li>
        <li>W3C Verifiable Credentials</li>
        <li>DIF (Decentralized Identity Foundation) standards</li>
        <li>Hyperledger Indy</li>
      </ul>
      
      <h2>Use Cases</h2>
      <ul>
        <li>Digital identity verification</li>
        <li>Access control and authentication</li>
        <li>Credential management</li>
        <li>Privacy-preserving authentication</li>
        <li>Cross-platform identity</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>Building DID solutions requires:</p>
      <ul>
        <li>Blockchain infrastructure</li>
        <li>Cryptographic libraries</li>
        <li>Identity wallets</li>
        <li>Verification services</li>
        <li>User interfaces</li>
      </ul>
      
      <h2>Privacy Considerations</h2>
      <p>DID solutions must balance functionality with privacy protection, implementing techniques like zero-knowledge proofs and selective disclosure.</p>
      
      <h2>Future Outlook</h2>
      <p>As digital identity becomes increasingly important, DID solutions will play a crucial role in the future of online identity management.</p>
    `,
    author: "Anna Chen",
    date: "2023-12-18",
    readTime: "8 min read",
    category: "Web3",
    tags: ["DID", "Identity", "Privacy"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
    featured: false
  }
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id.toString() === params.id)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Trivexa Technologies',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} - Trivexa Technologies Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id.toString() === params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-navy-600 text-white py-20">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
              <button className="flex items-center hover:text-white transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Blockchain expert and technical writer with extensive experience in Web3 development and DeFi protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 group">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
