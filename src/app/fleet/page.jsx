// src/app/our-vehicles/page.jsx
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
      ratePerKm: '₹09/- per km',
      price: '₹9807/- per day'
    },
    {
      id: 2,
      name: 'Premium SUV',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹12/- per km',
      price: '₹12,500/- per day'
    },
    {
      id: 3,
      name: 'Luxury Car',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹15/- per km',
      price: '₹15,200/- per day'
    },
    {
      id: 4,
      name: 'Compact Hatchback',
      type: 'prime',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹08/- per km',
      price: '₹8500/- per day'
    },
    {
      id: 5,
      name: 'Family SUV',
      type: 'prime',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹14/- per km',
      price: '₹11,200/- per day'
    },
    {
      id: 6,
      name: 'Executive Sedan',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹18/- per km',
      price: '₹16,800/- per day'
    },
    {
      id: 7,
      name: 'Tempo Traveller',
      type: 'prime',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹25/- per km',
      price: '₹22,000/- per day'
    },
    {
      id: 8,
      name: 'Luxury SUV',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹22/- per km',
      price: '₹18,500/- per day'
    },
    {
      id: 9,
      name: 'Mini Bus',
      type: 'exclusive',
      image: '/assets/home/vehicle.webp',
      ratePerKm: '₹35/- per km',
      price: '₹28,000/- per day'
    }
  ]

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="Our Vehicles Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 -translate-y-15">Our Vehicles</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto -translate-y-15">
              Discover our premium fleet of well-maintained vehicles
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
              Find the Right Vehicle for Your Trip
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse fleet of vehicles to match your travel needs and budget. 
              From economical rides to luxury experiences, we have the perfect vehicle for every journey.
            </p>
          </div>

          {/* Filter Buttons - Centered */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1 h-fit">
              {['all', 'prime', 'exclusive'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-black text-white shadow-md cursor-pointer'
                      : 'text-gray-700 hover:bg-gray-200 cursor-pointer'
                  }`}
                >
                  {filter === 'all' ? 'All Vehicles' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicles Grid - 2x2 on ALL devices including mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredVehicles.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Vehicle Image */}
                <div className="w-full h-40 px-2 pt-2">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-contain md:object-cover lg:object-cover rounded-t-lg"
                  />
                </div>

                {/* Vehicle Name */}
                <div className="text-center py-3 border-b border-gray-200">
                  <h3 className="text-base font-bold text-gray-900">{vehicle.name}</h3>
                  <span className="text-xs text-gray-500 capitalize">{vehicle.type}</span>
                </div>

                {/* Rate and Price - SAME LINE, left and right aligned */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                      <p className="text-md font-semibold text-black">{vehicle.ratePerKm}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-md font-bold text-black">{vehicle.price}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-black text-white hover:bg-gray-800 py-2 rounded-lg font-semibold transition-all duration-200 text-sm cursor-pointer">
                      Book Now
                    </button>
                    <button className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600 py-2 rounded-lg font-semibold transition-all duration-200 text-sm cursor-pointer">
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
              <p className="text-gray-600 text-lg">No vehicles found for the selected category.</p>
            </div>
          )}

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              * All prices include taxes. Additional charges may apply for tolls, parking, and night travel.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}