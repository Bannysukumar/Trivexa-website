"use client"

import { useEffect, useState } from 'react'

interface SEOAnalysis {
  title: {
    length: number
    optimal: boolean
    message: string
  }
  description: {
    length: number
    optimal: boolean
    message: string
  }
  headings: {
    h1: number
    h2: number
    h3: number
    optimal: boolean
    message: string
  }
  images: {
    total: number
    withAlt: number
    withoutAlt: number
    optimal: boolean
    message: string
  }
  links: {
    total: number
    internal: number
    external: number
    optimal: boolean
    message: string
  }
  performance: {
    score: number
    optimal: boolean
    message: string
  }
}

export default function SEOAnalyzer() {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const analyzeSEO = () => {
      const title = document.querySelector('title')?.textContent || ''
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      
      // Analyze title
      const titleLength = title.length
      const titleOptimal = titleLength >= 30 && titleLength <= 60
      
      // Analyze description
      const descLength = description.length
      const descOptimal = descLength >= 120 && descLength <= 160
      
      // Analyze headings
      const h1Elements = document.querySelectorAll('h1')
      const h2Elements = document.querySelectorAll('h2')
      const h3Elements = document.querySelectorAll('h3')
      const headingsOptimal = h1Elements.length === 1 && h2Elements.length > 0
      
      // Analyze images
      const images = document.querySelectorAll('img')
      const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])')
      const imagesOptimal = images.length === imagesWithAlt.length
      
      // Analyze links
      const links = document.querySelectorAll('a[href]')
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="https://trivexa.com"]')
      const externalLinks = links.length - internalLinks.length
      const linksOptimal = internalLinks.length > externalLinks
      
      // Performance score (simplified)
      const performanceScore = Math.floor(Math.random() * 40) + 60 // Mock score
      const performanceOptimal = performanceScore >= 90
      
      setAnalysis({
        title: {
          length: titleLength,
          optimal: titleOptimal,
          message: titleOptimal ? 'Title length is optimal' : 'Title should be 30-60 characters'
        },
        description: {
          length: descLength,
          optimal: descOptimal,
          message: descOptimal ? 'Description length is optimal' : 'Description should be 120-160 characters'
        },
        headings: {
          h1: h1Elements.length,
          h2: h2Elements.length,
          h3: h3Elements.length,
          optimal: headingsOptimal,
          message: headingsOptimal ? 'Heading structure is optimal' : 'Should have exactly 1 H1 and multiple H2s'
        },
        images: {
          total: images.length,
          withAlt: imagesWithAlt.length,
          withoutAlt: images.length - imagesWithAlt.length,
          optimal: imagesOptimal,
          message: imagesOptimal ? 'All images have alt text' : 'Some images are missing alt text'
        },
        links: {
          total: links.length,
          internal: internalLinks.length,
          external: externalLinks,
          optimal: linksOptimal,
          message: linksOptimal ? 'Good internal link structure' : 'Consider adding more internal links'
        },
        performance: {
          score: performanceScore,
          optimal: performanceOptimal,
          message: performanceOptimal ? 'Performance is excellent' : 'Performance could be improved'
        }
      })
    }

    // Run analysis after page load
    setTimeout(analyzeSEO, 1000)
  }, [])

  if (!analysis) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
      >
        SEO Analysis
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">SEO Analysis</h3>
          
          <div className="space-y-3">
            <div className={`p-2 rounded ${analysis.title.optimal ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
              <div className="font-semibold text-sm">Title</div>
              <div className="text-xs">{analysis.title.message}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Length: {analysis.title.length}</div>
            </div>
            
            <div className={`p-2 rounded ${analysis.description.optimal ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
              <div className="font-semibold text-sm">Description</div>
              <div className="text-xs">{analysis.description.message}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Length: {analysis.description.length}</div>
            </div>
            
            <div className={`p-2 rounded ${analysis.headings.optimal ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
              <div className="font-semibold text-sm">Headings</div>
              <div className="text-xs">{analysis.headings.message}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                H1: {analysis.headings.h1}, H2: {analysis.headings.h2}, H3: {analysis.headings.h3}
              </div>
            </div>
            
            <div className={`p-2 rounded ${analysis.images.optimal ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
              <div className="font-semibold text-sm">Images</div>
              <div className="text-xs">{analysis.images.message}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Total: {analysis.images.total}, With Alt: {analysis.images.withAlt}
              </div>
            </div>
            
            <div className={`p-2 rounded ${analysis.links.optimal ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
              <div className="font-semibold text-sm">Links</div>
              <div className="text-xs">{analysis.links.message}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Internal: {analysis.links.internal}, External: {analysis.links.external}
              </div>
            </div>
            
            <div className={`p-2 rounded ${analysis.performance.optimal ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
              <div className="font-semibold text-sm">Performance</div>
              <div className="text-xs">{analysis.performance.message}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Score: {analysis.performance.score}/100</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
