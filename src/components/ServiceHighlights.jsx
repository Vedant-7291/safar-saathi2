'use client'
import { useState } from 'react'

export default function ServiceHighlights() {
  const services = [
    {
      icon: '/images/24-7-icon.png',
      title: '24/7 Service',
      description: 'Round the clock availability for all your travel needs, anytime, anywhere.'
    },
    {
      icon: '/images/secure-payment.png',
      title: 'Secure Payments',
      description: 'Multiple payment options with complete security and transparency.'
    },
    {
      icon: '/images/tracking.png',
      title: 'Live Tracking',
      description: 'Real-time tracking of your ride for complete peace of mind and safety.'
    },
    {
      icon: '/images/support.png',
      title: 'Instant Support',
      description: '24/7 customer support to assist you with any queries or issues.'
    }
  ]

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-secondary-dark mb-2">Features</h3>
          <div className="w-20 h-1 bg-secondary-dark mx-auto mb-4 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-font-gray mb-6">
            Service Highlights
          </h2>
        </div>

        {/* Main Content Section - Full Width with Gradient */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <div className="bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-white mb-4">
                      Our Services
                    </h3>
                    <p className="text-primary-white text-lg md:text-xl leading-relaxed">
                      Experience premium travel services with Safar Saathi. We offer reliable, comfortable, 
                      and safe transportation solutions tailored to your needs. From airport transfers to 
                      city tours, we've got you covered with our fleet of well-maintained vehicles and 
                      professional drivers.
                    </p>
                  </div>

                  {/* CTA Buttons - Responsive sizing */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
                    <button className="bg-primary-white text-font-gray hover:bg-gray-100 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center">
                      Book a Trip
                    </button>
                    <button className="bg-primary-white text-font-gray hover:bg-gray-100 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center">
                      Via WhatsApp
                    </button>
                  </div>
                </div>

                {/* Right Side - Service Cards with better mobile grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      className="bg-primary-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 min-h-[180px] sm:min-h-[220px] flex flex-col"
                    >
                      {/* Service Icon - Responsive sizing */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 p-2 sm:p-3">
                        {/* Fallback if image doesn't load */}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-white rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm sm:text-lg">
                          {service.title.split(' ').map(word => word[0]).join('')}
                        </div>
                        {/* Uncomment when you have actual images */}
                        {/* <img 
                          src={service.icon} 
                          alt={service.title}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        /> */}
                      </div>
                      
                      {/* Service Content */}
                      <div className="text-center flex-1 flex flex-col justify-between">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-font-gray mb-2">{service.title}</h4>
                        <p className="text-font-gray text-xs sm:text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}