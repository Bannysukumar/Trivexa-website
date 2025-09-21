"use client"

interface StructuredDataProps {
  type: 'organization' | 'service' | 'article' | 'breadcrumb' | 'faq' | 'localBusiness'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          ...data
        }
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          ...data
        }
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          ...data
        }
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data
        }
      
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data
        }
      
      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          ...data
        }
      
      default:
        return data
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  )
}

// Predefined structured data for common use cases
export const organizationData = {
  name: "Trivexa Technologies Pvt. Ltd.",
  url: "https://trivexa.com",
  logo: "https://trivexa.com/logo.png",
  description: "Premier enterprise blockchain development company trusted by Fortune 500 companies worldwide.",
  foundingDate: "2020",
  numberOfEmployees: "50-100",
  industry: "Blockchain Technology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Blockchain Street",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916301846681",
    contactType: "customer service",
    email: "enterprise@trivexa.com",
    availableLanguage: "English"
  },
  sameAs: [
    "https://twitter.com/trivexa_tech",
    "https://www.linkedin.com/company/trivexa-technologies-private-limited/",
    "https://github.com/trivexa-technologies"
  ]
}

export const serviceData = {
  name: "Blockchain Development Services",
  description: "Enterprise blockchain development, smart contracts, DApps, Web3 solutions",
  provider: {
    "@type": "Organization",
    name: "Trivexa Technologies Pvt. Ltd."
  },
  serviceType: "Blockchain Technology",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Blockchain Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Layer-1 Blockchain Development"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Layer-2 Blockchain Scaling"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Contract Development"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DApp Development"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web3 Development"
        }
      }
    ]
  }
}
