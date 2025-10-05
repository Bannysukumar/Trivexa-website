// Service Worker for Trivexa Technologies Website
// Version: 1.0.0

const CACHE_NAME = 'trivexa-v1.0.0'
const STATIC_CACHE = 'trivexa-static-v1.0.0'
const DYNAMIC_CACHE = 'trivexa-dynamic-v1.0.0'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/logo.png',
  '/logo-new.jpg',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/site.webmanifest',
  '/robots.txt',
  '/og-default.jpg'
]

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/contact',
  '/api/newsletter',
  '/api/chat'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activated successfully')
        return self.clients.claim()
      })
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return
  }
  
  event.respondWith(
    handleRequest(request)
  )
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  try {
    // Strategy 1: Static assets - Cache First
    if (isStaticAsset(url)) {
      return await cacheFirst(request, STATIC_CACHE)
    }
    
    // Strategy 2: API endpoints - Network First with fallback
    if (isAPIEndpoint(url)) {
      return await networkFirst(request, DYNAMIC_CACHE)
    }
    
    // Strategy 3: Images - Cache First with network fallback
    if (isImage(url)) {
      return await cacheFirst(request, DYNAMIC_CACHE)
    }
    
    // Strategy 4: HTML pages - Network First with cache fallback
    if (isHTML(url)) {
      return await networkFirst(request, DYNAMIC_CACHE)
    }
    
    // Strategy 5: Other resources - Stale While Revalidate
    return await staleWhileRevalidate(request, DYNAMIC_CACHE)
    
  } catch (error) {
    console.error('Service Worker: Error handling request', error)
    
    // Fallback: try to serve from cache
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Final fallback: return offline page
    if (isHTML(url)) {
      return await caches.match('/offline.html') || new Response('Offline', { status: 503 })
    }
    
    throw error
  }
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  const networkResponse = await fetch(request)
  
  if (networkResponse.ok) {
    const cache = await caches.open(cacheName)
    cache.put(request, networkResponse.clone())
  }
  
  return networkResponse
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    return cachedResponse || new Response('Network error', { status: 503 })
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request)
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      const cache = caches.open(cacheName)
      cache.then((cache) => cache.put(request, networkResponse.clone()))
    }
    return networkResponse
  }).catch(() => cachedResponse)
  
  return cachedResponse || fetchPromise
}

// Helper functions to categorize requests
function isStaticAsset(url) {
  return STATIC_ASSETS.includes(url.pathname) ||
         url.pathname.startsWith('/_next/static/') ||
         url.pathname.startsWith('/static/')
}

function isAPIEndpoint(url) {
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint)) ||
         url.pathname.startsWith('/api/')
}

function isImage(url) {
  return /\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i.test(url.pathname)
}

function isHTML(url) {
  return url.pathname.endsWith('.html') ||
         url.pathname === '/' ||
         (!url.pathname.includes('.') && url.pathname !== '/api/')
}

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm())
  }
  
  if (event.tag === 'newsletter-form') {
    event.waitUntil(syncNewsletterForm())
  }
})

async function syncContactForm() {
  try {
    const pendingSubmissions = await getStoredFormData('contact-form')
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        })
        
        if (response.ok) {
          await removeStoredFormData('contact-form', submission.id)
          console.log('Contact form synced successfully')
        }
      } catch (error) {
        console.error('Failed to sync contact form:', error)
      }
    }
  } catch (error) {
    console.error('Error syncing contact form:', error)
  }
}

async function syncNewsletterForm() {
  try {
    const pendingSubmissions = await getStoredFormData('newsletter-form')
    
    for (const submission of pendingSubmissions) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        })
        
        if (response.ok) {
          await removeStoredFormData('newsletter-form', submission.id)
          console.log('Newsletter form synced successfully')
        }
      } catch (error) {
        console.error('Failed to sync newsletter form:', error)
      }
    }
  } catch (error) {
    console.error('Error syncing newsletter form:', error)
  }
}

// Helper functions for form data storage
async function getStoredFormData(formType) {
  try {
    const cache = await caches.open('form-data')
    const response = await cache.match(`/${formType}`)
    
    if (response) {
      return await response.json()
    }
    
    return []
  } catch (error) {
    console.error('Error getting stored form data:', error)
    return []
  }
}

async function removeStoredFormData(formType, id) {
  try {
    const cache = await caches.open('form-data')
    const storedData = await getStoredFormData(formType)
    const updatedData = storedData.filter(item => item.id !== id)
    
    await cache.put(`/${formType}`, new Response(JSON.stringify(updatedData)))
  } catch (error) {
    console.error('Error removing stored form data:', error)
  }
}

// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    
    const options = {
      body: data.body,
      icon: '/logo.png',
      badge: '/favicon-32x32.png',
      tag: 'trivexa-notification',
      requireInteraction: true,
      actions: [
        {
          action: 'open',
          title: 'Open Website'
        },
        {
          action: 'close',
          title: 'Close'
        }
      ]
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})

console.log('Service Worker: Loaded successfully')
