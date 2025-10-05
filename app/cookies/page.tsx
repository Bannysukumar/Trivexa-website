import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Trivexa Technologies',
  description: 'Cookie Policy for Trivexa Technologies Pvt. Ltd. Learn about how we use cookies and similar technologies on our website.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last Updated:</strong> September 22, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Trivexa Technologies uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Essential website functionality</li>
                <li>Performance monitoring and analytics</li>
                <li>User preference storage</li>
                <li>Security and fraud prevention</li>
                <li>Marketing and advertising (with consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                3.1 Essential Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These cookies are necessary for the website to function properly. They cannot be disabled 
                and include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Session management cookies</li>
                <li>Security and authentication cookies</li>
                <li>Load balancing cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                3.2 Performance Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                anonymous information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Google Analytics cookies</li>
                <li>Page load time tracking</li>
                <li>User journey analysis</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                3.3 Functional Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Language preference storage</li>
                <li>Theme selection (dark/light mode)</li>
                <li>Form data retention</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                3.4 Marketing Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These cookies are used to deliver relevant advertisements and track marketing campaigns:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Social media tracking pixels</li>
                <li>Advertising platform cookies</li>
                <li>Conversion tracking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> LinkedIn, Twitter, GitHub integration</li>
                <li><strong>Customer Support:</strong> Live chat and support tools</li>
                <li><strong>Marketing Tools:</strong> Email marketing and lead generation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                5.1 Browser Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Block all cookies</li>
                <li>Allow only first-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set up notifications for new cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                5.2 Cookie Consent Banner
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you first visit our website, you'll see a cookie consent banner where you can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Impact of Disabling Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Personalized content and preferences</li>
                <li>Form auto-completion</li>
                <li>Analytics and performance monitoring</li>
                <li>Social media integration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Cookie Retention Period
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                <li><strong>Analytics Cookies:</strong> Usually retained for 2 years</li>
                <li><strong>Marketing Cookies:</strong> Typically retained for 1 year</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                significant changes by posting the updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Trivexa Technologies Pvt. Ltd.</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Email: trivexatechpvt@gmail.com
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Phone: 6301846681
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Address: India (Global Clientele)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
