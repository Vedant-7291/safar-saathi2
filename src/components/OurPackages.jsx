'use client'
import { useState } from 'react'

export default function OurPackages() {
  const packages = [
    {
      id: 1,
      title: 'City Ride Package',
      image: '/assets/home/vehicle.webp',
      price: '₹2,499/-',
      description: 'Perfect for within city travel'
    },
    {
      id: 2,
      title: 'Outstation Package',
      image: '/assets/home/vehicle.webp',
      price: '₹4,999/-',
      description: 'Ideal for intercity journeys'
    },
    {
      id: 3,
      title: 'Premium Luxury Package',
      image: '/assets/home/vehicle.webp',
      price: '₹7,999/-',
      description: 'Luxury travel experience'
    }
  ]

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-font-gray mb-4">
            Our Packages
          </h2>
          
          {/* Description Paragraph */}
          <p className="text-font-gray text-lg max-w-3xl mx-auto">
            Discover our carefully crafted travel packages designed to suit every need and budget. 
            Whether you're traveling within the city or planning an outstation trip, we have the perfect package for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-primary-white rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Package Image */}
              <div className="p-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Package Title */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-font-gray">{pkg.title}</h3>
                  <p className="text-font-gray text-sm mt-2">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-left">
                    <p className="text-lg font-semibold text-font-gray">Price</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-black">{pkg.price}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-secondary-dark text-black hover:bg-yellow-500 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 cursor-pointer">
                    Book Now
                  </button>
                  <button className="flex-1 bg-black text-primary-white hover:bg-gray-800 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 cursor-pointer">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary-dark text-black hover:bg-yellow-500 px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}