"use client"

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/hero-bg.jpg',
        '/logo.png',
        '/og-default.jpg'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Add loading states for better UX
    const addLoadingStates = () => {
      const buttons = document.querySelectorAll('button, a')
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          if (button instanceof HTMLElement) {
            button.style.opacity = '0.7'
            button.style.pointerEvents = 'none'
            
            setTimeout(() => {
              button.style.opacity = '1'
              button.style.pointerEvents = 'auto'
            }, 1000)
          }
        })
      })
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    addLoadingStates()

    // Cleanup
    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

// Utility functions for performance optimization
export const optimizeImage = (src: string, alt: string, className?: string) => {
  return {
    src,
    alt,
    className: `lazy ${className || ''}`,
    loading: 'lazy' as const,
    decoding: 'async' as const,
    'data-src': src
  }
}

export const preloadImage = (src: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  }
}

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function executedFunction(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
