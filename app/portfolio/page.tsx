'use client'

import { useState } from 'react'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioFilter from '@/components/portfolio/PortfolioFilter'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import PortfolioStats from '@/components/portfolio/PortfolioStats'
import PortfolioTestimonials from '@/components/portfolio/PortfolioTestimonials'
import CTASection from '@/components/portfolio/CTASection'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <>
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioFilter 
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      <PortfolioGrid />
      <PortfolioTestimonials />
      <CTASection />
    </>
  )
}
