'use client'
import { useState } from 'react'

export default function OurVehicles() {
  const [activeFilter, setActiveFilter] = useState('all')

  const vehicles = [
    {
      id: 1,
      name: 'Economy Sedan',
      type: 'prime',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '09/-km',
      price: '₹9807/-'
    },
    {
      id: 2,
      name: 'Premium SUV',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '12/-km',
      price: '₹12,500/-'
    },
    {
      id: 3,
      name: 'Luxury Car',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '15/-km',
      price: '₹15,200/-'
    }
  ]

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === activeFilter)

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Title and Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          {/* Left - Heading */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-font-gray mb-4">
              Our Vehicles
            </h2>
            
            {/* Description Paragraph */}
            <p className="text-font-gray text-lg max-w-2xl">
              Choose from our wide range of well-maintained vehicles for your comfortable and safe journey. 
              From economical options to premium luxury rides, we have the perfect vehicle for every need and budget.
            </p>
          </div>

          {/* Right - Filter Buttons */}
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1 h-fit">
            {['all', 'prime', 'exclusive'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-secondary-dark text-primary-white shadow-md'
                    : 'text-font-gray hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              className="bg-primary-white rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Vehicle Name - Top Center */}
              <div className="text-center py-4">
                <h3 className="text-xl font-bold text-font-gray">{vehicle.name}</h3>
              </div>

              {/* Vehicle Image */}
              <div className="p-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Rate and Price */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-left">
                    <p className="text-lg font-bold text-font-gray">{vehicle.ratePerKm}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-secondary-dark">{vehicle.price}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-secondary-dark text-black hover:bg-yellow-500 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    Book Now
                  </button>
                  <button className="flex-1 bg-black text-primary-white hover:bg-gray-800 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-font-gray text-lg">No vehicles found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}