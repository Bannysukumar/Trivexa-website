"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ServiceData {
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  timeline: string
  startingPrice: string
}

interface ServiceTechnologiesProps {
  serviceData: ServiceData
}

export default function ServiceTechnologies({ serviceData }: ServiceTechnologiesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const techMap: { [key: string]: { group: string; items: string[] }[] } = {
    'Layer-1 Blockchain Development': [
      { group: 'Protocols & Consensus', items: ['Tendermint', 'HotStuff', 'IBFT', 'PoS/DPoS'] },
      { group: 'Languages', items: ['Golang', 'Rust', 'C++'] },
      { group: 'Networking & Storage', items: ['LibP2P', 'gRPC', 'RocksDB', 'LevelDB'] },
      { group: 'Tooling', items: ['Cosmos SDK', 'Substrate', 'OpenTelemetry'] },
    ],
    'Layer-2 Blockchain Solutions': [
      { group: 'Rollups', items: ['Optimistic Rollups', 'ZK-Rollups'] },
      { group: 'Frameworks', items: ['OP Stack', 'Polygon CDK', 'Arbitrum Orbit'] },
      { group: 'Bridges & Interop', items: ['IBC', 'Hyperlane', 'LayerZero'] },
      { group: 'Data Availability', items: ['Celestia', 'EigenDA'] },
    ],
    'Smart Contract Development': [
      { group: 'Languages', items: ['Solidity', 'Vyper', 'Move'] },
      { group: 'Frameworks', items: ['Hardhat', 'Foundry', 'Truffle'] },
      { group: 'Security', items: ['Slither', 'Mythril', 'Echidna'] },
      { group: 'Chains', items: ['Ethereum', 'Polygon', 'Arbitrum', 'BSC'] },
    ],
    'DApp Development': [
      { group: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS'] },
      { group: 'Web3', items: ['wagmi/viem', 'ethers.js', 'WalletConnect'] },
      { group: 'Infra', items: ['The Graph', 'Alchemy', 'Infura'] },
      { group: 'Quality', items: ['Jest', 'Playwright', 'Storybook'] },
    ],
    'Web & Mobile Development': [
      { group: 'Web', items: ['Next.js', 'React', 'Node.js'] },
      { group: 'Mobile', items: ['React Native', 'Swift', 'Kotlin'] },
      { group: 'Cloud', items: ['Vercel', 'AWS', 'Firebase'] },
      { group: 'APIs', items: ['GraphQL', 'REST', 'gRPC'] },
    ],
    'AI-Powered Solutions': [
      { group: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'ONNX'] },
      { group: 'LLM', items: ['OpenAI', 'HuggingFace', 'LangChain'] },
      { group: 'Pipelines', items: ['Airflow', 'Prefect'] },
      { group: 'Serving', items: ['FastAPI', 'Triton', 'Ray Serve'] },
    ],
    'Telegram Bots Development': [
      { group: 'Frameworks', items: ['python-telegram-bot', 'Telegraf.js', 'grammy'] },
      { group: 'Languages', items: ['Python', 'Node.js', 'TypeScript'] },
      { group: 'Storage', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { group: 'Integrations', items: ['Telegram Bot API', 'Payment APIs', 'Webhooks'] },
    ],
    'AI Automation Services': [
      { group: 'Automation', items: ['Zapier', 'Make', 'n8n', 'Prefect'] },
      { group: 'AI/ML', items: ['OpenAI', 'Anthropic', 'LangChain', 'AutoGPT'] },
      { group: 'RPA', items: ['UiPath', 'Automation Anywhere', 'RPA Framework'] },
      { group: 'Integration', items: ['REST APIs', 'GraphQL', 'Webhooks', 'Message Queues'] },
    ],
  }

  const techGroups = techMap[serviceData.title] || []

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
            Technologies &{' '}
            <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We select the most suitable stack for your {serviceData.title.toLowerCase()} to meet performance, security, and time-to-market goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6"
            >
              <div className={`text-sm font-semibold text-gray-900 dark:text-white mb-3`}>{group.group}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
