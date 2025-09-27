import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock LazyImage component
jest.mock('@/components/common/LazyImage', () => {
  return function MockLazyImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />
  }
})

describe('PortfolioGrid', () => {
  it('renders portfolio section', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('renders all portfolio projects', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('Enterprise DeFi Protocol')).toBeInTheDocument()
    expect(screen.getByText('Enterprise NFT Platform')).toBeInTheDocument()
    expect(screen.getByText('Pharmaceutical Supply Chain')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Gaming Platform')).toBeInTheDocument()
    expect(screen.getByText('AI-Powered Trading System')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Data Platform')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText(/Developed a comprehensive DeFi lending protocol/)).toBeInTheDocument()
    expect(screen.getByText(/Built a white-label NFT marketplace solution/)).toBeInTheDocument()
  })

  it('renders project technologies', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('Solidity')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Web3.js')).toBeInTheDocument()
    expect(screen.getByText('Chainlink')).toBeInTheDocument()
  })

  it('renders project results', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('$25M+')).toBeInTheDocument()
    expect(screen.getByText('5K+')).toBeInTheDocument()
    expect(screen.getByText('A+')).toBeInTheDocument()
  })

  it('renders client information', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('Fortune 500 Financial Services')).toBeInTheDocument()
    expect(screen.getByText('Global Media Company')).toBeInTheDocument()
    expect(screen.getByText('Leading Pharma Company')).toBeInTheDocument()
  })

  it('renders audit status', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('CertiK Audited')).toBeInTheDocument()
    expect(screen.getByText('OpenZeppelin Audited')).toBeInTheDocument()
    expect(screen.getByText('ConsenSys Audited')).toBeInTheDocument()
  })

  it('renders featured badges for featured projects', () => {
    render(<PortfolioGrid />)
    
    const featuredBadges = screen.getAllByText('Featured')
    expect(featuredBadges).toHaveLength(2) // Two featured projects
  })

  it('renders category badges', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('defi')).toBeInTheDocument()
    expect(screen.getByText('nft')).toBeInTheDocument()
    expect(screen.getByText('smart contracts')).toBeInTheDocument()
  })

  it('renders View Case Study buttons', () => {
    render(<PortfolioGrid />)
    
    const caseStudyButtons = screen.getAllByText('View Case Study')
    expect(caseStudyButtons).toHaveLength(6) // All 6 projects
  })

  it('does not render demo and GitHub links when they are null', () => {
    render(<PortfolioGrid />)
    
    // Since demo and GitHub links are set to null, they should not be rendered
    const demoLinks = screen.queryAllByTitle('View Live Demo')
    const githubLinks = screen.queryAllByTitle('View Source Code')
    
    expect(demoLinks).toHaveLength(0)
    expect(githubLinks).toHaveLength(0)
  })

  it('renders Load More button', () => {
    render(<PortfolioGrid />)
    
    expect(screen.getByText('Load More Projects')).toBeInTheDocument()
  })

  it('handles Load More button click', async () => {
    const user = userEvent.setup()
    render(<PortfolioGrid />)
    
    const loadMoreButton = screen.getByText('Load More Projects')
    await user.click(loadMoreButton)
    
    // Button should show loading state
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
  })

  it('renders project images with correct alt text', () => {
    render(<PortfolioGrid />)
    
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('alt', 'Enterprise DeFi Protocol')
    expect(images[1]).toHaveAttribute('alt', 'Enterprise NFT Platform')
  })

  it('has proper accessibility attributes', () => {
    render(<PortfolioGrid />)
    
    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('id', 'portfolio-grid')
  })
})
