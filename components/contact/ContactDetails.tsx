"use client"

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      <div className="card-premium hover-lift">
        <h3 className="text-display text-gray-900 dark:text-white mb-8 text-premium">
          Enterprise Contact
        </h3>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-navy-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <span className="text-2xl">📞</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-premium">
                Phone
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                6301846681
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                24/7 Enterprise Support Line
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <span className="text-2xl">✉️</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-premium">
                Email
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                trivexatechpvt@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Dedicated account managers
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <span className="text-2xl">🏢</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-premium">
                Headquarters
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                San Francisco, CA
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Global presence across 3 continents
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-premium">
                Business Hours
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                24/7 Enterprise Support
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Response within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
