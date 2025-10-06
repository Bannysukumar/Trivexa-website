import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { ArrowLeft, Gamepad2, TrendingUp, Shield, Zap, CheckCircle, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gaming & NFT Blockchain Solutions - Trivexa Technologies',
  description: 'Create immersive gaming experiences with NFT integration, play-to-earn mechanics, and virtual economies. Achieve 10x user engagement in gaming.',
  keywords: [
    'gaming blockchain solutions',
    'nft gaming development',
    'play to earn games',
    'blockchain gaming',
    'nft marketplace development',
    'virtual economies',
    'gaming nft integration',
    'blockchain game development'
  ],
  openGraph: {
    title: 'Gaming & NFT Blockchain Solutions - Trivexa Technologies',
    description: 'Create immersive gaming experiences with NFT integration, play-to-earn mechanics, and virtual economies.',
    images: ['/og-gaming-nft-industry.jpg'],
  },
}

export default function GamingNFTIndustryPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-20">
        <div className="container-custom">
          <Link 
            href="/industries" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industries
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Gaming & NFT
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8">
              Create immersive gaming experiences with NFT integration, play-to-earn mechanics, 
              and virtual economies that achieve 10x user engagement.
            </p>
            
            <div className="flex items-center text-white/80">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">10x User Engagement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Revolutionizing Gaming
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The gaming industry is embracing blockchain technology to create new revenue models, 
                player ownership, and immersive experiences. Our solutions enable NFT integration, 
                play-to-earn mechanics, and virtual economies that keep players engaged.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We help gaming companies achieve 10x user engagement while creating sustainable 
                revenue streams through tokenized assets and virtual economies.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">10x</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">User Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Rewards Distributed</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Solutions</h3>
              <div className="space-y-4">
                {[
                  { title: "NFT Marketplaces", description: "In-game asset trading and ownership" },
                  { title: "Play-to-Earn", description: "Reward players with tokens and NFTs" },
                  { title: "Virtual Assets", description: "Tokenized in-game items and characters" },
                  { title: "Gaming Economies", description: "Sustainable virtual economies" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{solution.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Gaming & NFT Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Play-to-Earn Games",
                description: "Reward players with tokens for gameplay achievements",
                icon: Gamepad2
              },
              {
                title: "NFT Collectibles",
                description: "Unique digital collectibles and trading cards",
                icon: TrendingUp
              },
              {
                title: "Virtual Real Estate",
                description: "Own and trade virtual land and properties",
                icon: Shield
              },
              {
                title: "Character NFTs",
                description: "Own and customize unique game characters",
                icon: Zap
              },
              {
                title: "Gaming Tournaments",
                description: "Blockchain-based competitive gaming events",
                icon: Users
              },
              {
                title: "Cross-Game Assets",
                description: "Use NFTs across multiple games and platforms",
                icon: Award
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Blockchain for Gaming?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "User Engagement",
                description: "Increase player engagement by up to 10x",
                stat: "10x"
              },
              {
                title: "Revenue Growth",
                description: "New revenue streams through NFT sales",
                stat: "300%"
              },
              {
                title: "Player Ownership",
                description: "True ownership of in-game assets",
                stat: "100%"
              },
              {
                title: "Global Access",
                description: "24/7 gaming and trading opportunities",
                stat: "24/7"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-4">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Gaming Revolution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain can transform your gaming experience and achieve 10x user engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Other Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
