import { Metadata } from 'next'
import ServiceHero from '@/components/services/individual/ServiceHero'
import ServiceFeatures from '@/components/services/individual/ServiceFeatures'
import ServiceProcess from '@/components/services/individual/ServiceProcess'
import ServiceTechnologies from '@/components/services/individual/ServiceTechnologies'
import ServiceCaseStudies from '@/components/services/individual/ServiceCaseStudies'
import ServiceFAQ from '@/components/services/individual/ServiceFAQ'
import CTASection from '@/components/services/individual/CTASection'

export const metadata: Metadata = {
  title: 'Smart Contract Development - Secure & Audited Blockchain Contracts',
  description: 'Expert smart contract development for DeFi, NFTs, DAOs, and blockchain applications with comprehensive security audits and gas optimization.',
  keywords: [
    'smart contract development',
    'defi protocol development',
    'nft smart contracts',
    'dao governance contracts',
    'smart contract audit',
    'solidity development',
    'vyper development',
    'gas optimization',
    'multi-signature wallets',
    'blockchain security'
  ],
  openGraph: {
    title: 'Smart Contract Development - Trivexa Technologies',
    description: 'Expert smart contract development for DeFi, NFTs, DAOs, and blockchain applications with comprehensive security audits and gas optimization.',
    images: ['/og-smart-contracts.jpg'],
  },
}

const serviceData = {
  title: "Smart Contract Development",
  subtitle: "Secure & Audited Blockchain Contracts",
  description: "Create secure, audited smart contracts for DeFi protocols, NFT marketplaces, DAO governance, and other blockchain applications with comprehensive testing and optimization.",
  icon: "Code",
  color: "from-green-500 to-emerald-600",
  timeline: "1-3 months",
  startingPrice: "$15,000"
}

export default function SmartContractsPage() {
  return (
    <>
      <ServiceHero serviceData={serviceData} />
      <ServiceFeatures serviceData={serviceData} />
      <ServiceProcess serviceData={serviceData} />
      <ServiceTechnologies serviceData={serviceData} />
      <ServiceCaseStudies serviceData={serviceData} />
      <ServiceFAQ serviceData={serviceData} />
      <CTASection serviceData={serviceData} />
    </>
  )
}
