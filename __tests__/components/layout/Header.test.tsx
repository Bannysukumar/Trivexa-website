import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/layout/Header'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
}))

describe('Header', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })
  })

  it('renders header with navigation', () => {
    render(<Header />)
    
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders logo', () => {
    render(<Header />)
    
    const logo = screen.getByAltText('Trivexa Technologies Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    render(<Header />)
    
    const themeButton = screen.getByLabelText('Toggle theme')
    expect(themeButton).toBeInTheDocument()
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    
    const mobileButton = screen.getByLabelText('Toggle mobile menu')
    expect(mobileButton).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    
    const mobileButton = screen.getByLabelText('Toggle mobile menu')
    await user.click(mobileButton)
    
    expect(screen.getByLabelText('Toggle mobile menu')).toHaveAttribute('aria-expanded', 'true')
  })

  it('renders Get Started button', () => {
    render(<Header />)
    
    const getStartedButton = screen.getByText('Get Started')
    expect(getStartedButton).toBeInTheDocument()
  })

  it('Get Started button has correct WhatsApp link', () => {
    render(<Header />)
    
    const getStartedButton = screen.getByText('Get Started').closest('a')
    expect(getStartedButton).toHaveAttribute('href', expect.stringContaining('wa.me/916301846681'))
    expect(getStartedButton).toHaveAttribute('target', '_blank')
    expect(getStartedButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows services dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Header />)
    
    const servicesLink = screen.getByText('Services')
    await user.hover(servicesLink)
    
    // Wait for dropdown to appear
    await waitFor(() => {
      expect(screen.getByText('Blockchain Development')).toBeInTheDocument()
    })
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('aria-label', 'Main navigation')
    
    const nav = screen.getByLabelText('Main navigation')
    expect(nav).toHaveAttribute('role', 'navigation')
  })

  it('handles scroll events', () => {
    render(<Header />)
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 100,
    })
    
    fireEvent.scroll(window)
    
    // Header should still be visible
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
