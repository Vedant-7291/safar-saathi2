// src/app/packages/page.jsx
'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Packages() {
  const [expandedPackage, setExpandedPackage] = useState(null)

  const packages = [
    {
      id: 1,
      title: 'City Ride Package',
      image: '/assets/home/vehicle.webp',
      price: '₹2,499/-',
      description: 'Perfect for within city travel',
      details: {
        para: 'Ideal for daily commutes, shopping trips, and local sightseeing within the city limits.',
        bulletPoints: [
          '8 hours / 80 kms package',
          'Includes fuel and driver charges',
          '24/7 customer support',
          'Free cancellation up to 2 hours before'
        ]
      }
    },
    {
      id: 2,
      title: 'Outstation Package',
      image: '/assets/home/vehicle.webp',
      price: '₹4,999/-',
      description: 'Ideal for intercity journeys',
      details: {
        para: 'Perfect for weekend getaways, family trips, and business travel between cities.',
        bulletPoints: [
          '12 hours / 200 kms package',
          'Toll and parking included',
          'Night journey charges applicable',
          'Multiple pickup locations available'
        ]
      }
    },
    {
      id: 3,
      title: 'Premium Luxury Package',
      image: '/assets/home/vehicle.webp',
      price: '₹7,999/-',
      description: 'Luxury travel experience',
      details: {
        para: 'Experience premium comfort with our luxury vehicles for special occasions and corporate travel.',
        bulletPoints: [
          'Premium luxury vehicles',
          'Professional chauffeur',
          'Complimentary water bottles',
          'Priority booking support'
        ]
      }
    },
    {
      id: 4,
      title: 'Airport Transfer Package',
      image: '/assets/home/vehicle.webp',
      price: '₹1,999/-',
      description: 'Reliable airport transfers',
      details: {
        para: 'Hassle-free airport pickups and drops with flight tracking and waiting time included.',
        bulletPoints: [
          'Flight tracking service',
          '60 mins free waiting time',
          'Meet & greet service',
          'Luggage assistance included'
        ]
      }
    },
    {
      id: 5,
      title: 'Wedding Package',
      image: '/assets/home/vehicle.webp',
      price: '₹12,999/-',
      description: 'Special wedding day package',
      details: {
        para: 'Make your special day memorable with our decorated wedding cars and professional service.',
        bulletPoints: [
          'Decorated vehicles',
          'Multiple car options',
          'Flexible timing',
          'Professional drivers'
        ]
      }
    },
    {
      id: 6,
      title: 'Corporate Package',
      image: '/assets/home/vehicle.webp',
      price: '₹9,999/-',
      description: 'Business travel solution',
      details: {
        para: 'Tailored for corporate clients with premium services and billing options.',
        bulletPoints: [
          'Monthly billing available',
          'Multiple pickup points',
          'Executive class vehicles',
          'Dedicated account manager'
        ]
      }
    }
  ]

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id)
  }

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="Packages Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Packages</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover our carefully crafted travel packages
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Center Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Travel Package
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of travel packages designed to meet every need and budget. 
              From city rides to luxury experiences, we have the perfect solution for your journey.
            </p>
          </div>

          {/* Packages Grid - 2x2 for small devices */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Package Image - Fixed display */}
                <div className="w-full h-32 md:h-40 bg-white px-2 pt-2">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Package Content */}
                <div className="p-4 md:p-6">
                  {/* Package Title and Dropdown Button */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 text-left">{pkg.title}</h3>
                      <p className="text-gray-500 text-xs md:text-sm mt-1 text-left">{pkg.description}</p>
                    </div>
                    <button
                      onClick={() => togglePackage(pkg.id)}
                      className="ml-2 p-1 md:p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 flex-shrink-0"
                    >
                      {expandedPackage === pkg.id ? (
                        <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                      <p className="text-sm md:text-base font-semibold text-gray-700">Price</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm md:text-base font-bold text-yellow-600">{pkg.price}</p>
                    </div>
                  </div>

                  {/* Expanded Details - Only show when this card is expanded */}
                  {expandedPackage === pkg.id && (
                    <div className="overflow-hidden animate-slideDown">
                      <div className="mt-3 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-gray-700 text-xs md:text-sm mb-3">{pkg.details.para}</p>
                        <ul className="space-y-1 md:space-y-2">
                          {pkg.details.bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start text-xs md:text-sm text-gray-600">
                              <span className="text-yellow-500 mr-2">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons - Fixed position, no movement */}
                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="flex-1 bg-black text-white hover:bg-gray-800 py-2 md:py-3 rounded-lg font-semibold transition-all duration-200 text-xs md:text-sm">
                        Book Now
                      </button>
                      <button className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600 py-2 md:py-3 rounded-lg font-semibold transition-all duration-200 text-xs md:text-sm">
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              * All packages include basic insurance. Additional charges may apply for extra services.
            </p>
          </div>
        </div>
      </section>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}