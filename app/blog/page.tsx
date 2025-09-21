import { Metadata } from 'next'
import BlogHero from '@/components/blog/BlogHero'
import BlogSearch from '@/components/blog/BlogSearch'
import BlogCategories from '@/components/blog/BlogCategories'
import BlogGrid from '@/components/blog/BlogGrid'
import BlogNewsletter from '@/components/blog/BlogNewsletter'

export const metadata: Metadata = {
  title: 'Blog - Blockchain Insights, Web3 News & Development Guides',
  description: 'Stay updated with the latest blockchain insights, Web3 news, development guides, and industry trends from Trivexa Technologies experts.',
  keywords: [
    'blockchain blog',
    'web3 news',
    'blockchain insights',
    'cryptocurrency news',
    'defi guides',
    'nft news',
    'smart contract development',
    'blockchain tutorials'
  ],
  openGraph: {
    title: 'Blog - Trivexa Technologies Blockchain Insights',
    description: 'Stay updated with the latest blockchain insights, Web3 news, development guides, and industry trends from Trivexa Technologies experts.',
    images: ['/og-blog.jpg'],
  },
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogSearch />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </>
  )
}
