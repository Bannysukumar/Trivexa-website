import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Trivexa Technologies',
  description: 'Terms of Service for Trivexa Technologies Pvt. Ltd. Read our terms and conditions for using our blockchain development services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last Updated:</strong> September 22, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing and using the services of Trivexa Technologies Pvt. Ltd. ("Company," "we," "our," or "us"), 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Services Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Trivexa Technologies provides enterprise blockchain development services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Layer-1 and Layer-2 blockchain development</li>
                <li>Smart contract development and auditing</li>
                <li>Decentralized application (DApp) development</li>
                <li>Web3 and DeFi solutions</li>
                <li>Blockchain consulting and architecture design</li>
                <li>AI-powered blockchain solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Client Responsibilities
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Provide accurate and complete project requirements</li>
                <li>Make timely payments as agreed in the service contract</li>
                <li>Provide necessary access to systems and data</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All intellectual property rights in the services, including but not limited to software, 
                code, designs, and documentation, remain the property of Trivexa Technologies unless 
                otherwise specified in a written agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Payment Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Confidentiality
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Both parties agree to maintain the confidentiality of all proprietary and confidential 
                information disclosed during the course of the business relationship.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To the maximum extent permitted by law, Trivexa Technologies shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not limited 
                to loss of profits, data, or business opportunities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Service Level Agreement
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We strive to provide high-quality services and meet agreed-upon timelines. Specific service 
                level commitments will be outlined in individual project agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Either party may terminate services with written notice as specified in the service agreement. 
                Upon termination, all outstanding payments become immediately due.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions regarding these Terms of Service, please contact us:
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

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting on our website. Continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
