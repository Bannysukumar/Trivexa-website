import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import LazyImage from '@/components/common/LazyImage'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, onLoad, ...props }: any) {
    return (
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        {...props}
      />
    )
  }
})

describe('LazyImage', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image',
    width: 400,
    height: 300,
  }

  it('renders with default props', () => {
    render(<LazyImage {...defaultProps} />)
    
    const container = screen.getByRole('img', { hidden: true }).closest('div')
    expect(container).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const customClassName = 'custom-class'
    render(<LazyImage {...defaultProps} className={customClassName} />)
    
    const container = screen.getByRole('img', { hidden: true }).closest('div')
    expect(container).toHaveClass(customClassName)
  })

  it('renders with custom width and height', () => {
    render(<LazyImage {...defaultProps} width={800} height={600} />)
    
    const img = screen.getByRole('img', { hidden: true })
    expect(img).toHaveAttribute('width', '800')
    expect(img).toHaveAttribute('height', '600')
  })

  it('renders with priority when specified', () => {
    render(<LazyImage {...defaultProps} priority={true} />)
    
    const img = screen.getByRole('img', { hidden: true })
    expect(img).toHaveAttribute('priority', 'true')
  })

  it('renders with placeholder when specified', () => {
    const customPlaceholder = 'data:image/svg+xml;base64,custom'
    render(<LazyImage {...defaultProps} placeholder={customPlaceholder} />)
    
    const img = screen.getByRole('img', { hidden: true })
    expect(img).toHaveAttribute('placeholder', customPlaceholder)
  })

  it('shows loading state initially', () => {
    render(<LazyImage {...defaultProps} />)
    
    // The loading spinner should be present initially
    const loadingSpinner = screen.getByRole('img', { hidden: true }).closest('div')?.querySelector('.animate-spin')
    expect(loadingSpinner).toBeInTheDocument()
  })

  it('handles image load event', async () => {
    render(<LazyImage {...defaultProps} />)
    
    const img = screen.getByRole('img', { hidden: true })
    
    // Simulate image load
    img.dispatchEvent(new Event('load'))
    
    await waitFor(() => {
      expect(img).toHaveAttribute('src', defaultProps.src)
    })
  })

  it('renders with correct alt text', () => {
    const altText = 'Custom alt text'
    render(<LazyImage {...defaultProps} alt={altText} />)
    
    const img = screen.getByAltText(altText)
    expect(img).toBeInTheDocument()
  })

  it('applies correct sizes attribute', () => {
    render(<LazyImage {...defaultProps} />)
    
    const img = screen.getByRole('img', { hidden: true })
    expect(img).toHaveAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')
  })
})
