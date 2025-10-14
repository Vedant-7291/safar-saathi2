// src/app/pricing/page.jsx
'use client'
import { Calendar, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [hoveredVehicle, setHoveredVehicle] = useState(null)

  const pricingData = [
    {
      id: 1,
      vehicleType: "Hatchback",
      image: "/assets/home/vehicle.webp",
      seating: "4+1",
      pricePerKm: "₹12/-",
      perDayCharge: "₹2930/-"
    },
    {
      id: 2,
      vehicleType: "Sedan",
      image: "/assets/home/vehicle.webp",
      seating: "4+1",
      pricePerKm: "₹14/-",
      perDayCharge: "₹3450/-"
    },
    {
      id: 3,
      vehicleType: "SUV",
      image: "/assets/home/vehicle.webp",
      seating: "6+1",
      pricePerKm: "₹18/-",
      perDayCharge: "₹4250/-"
    },
    {
      id: 4,
      vehicleType: "Premium Sedan",
      image: "/assets/home/vehicle.webp",
      seating: "4+1",
      pricePerKm: "₹20/-",
      perDayCharge: "₹4890/-"
    },
    {
      id: 5,
      vehicleType: "Luxury SUV",
      image: "/assets/home/vehicle.webp",
      seating: "6+1",
      pricePerKm: "₹25/-",
      perDayCharge: "₹5890/-"
    },
    {
      id: 6,
      vehicleType: "Tempo Traveller",
      image: "/assets/home/vehicle.webp",
      seating: "12+1",
      pricePerKm: "₹30/-",
      perDayCharge: "₹6890/-"
    },
    {
      id: 7,
      vehicleType: "Innova Crysta",
      image: "/assets/home/vehicle.webp",
      seating: "6+1",
      pricePerKm: "₹22/-",
      perDayCharge: "₹5250/-"
    },
    {
      id: 8,
      vehicleType: "Mini Bus",
      image: "/assets/home/vehicle.webp",
      seating: "20+1",
      pricePerKm: "₹45/-",
      perDayCharge: "₹8990/-"
    },
    {
      id: 9,
      vehicleType: "Luxury Coach",
      image: "/assets/home/vehicle.webp",
      seating: "35+1",
      pricePerKm: "₹65/-",
      perDayCharge: "₹12990/-"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="Pricing Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 -translate-y-15">Pricing</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto -translate-y-15">
              Transparent and competitive pricing for all your travel needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Perfect Ride with Perfect Price
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from our wide range of vehicles at competitive prices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-secondary-dark text-black px-5 py-2 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5" />
              Book a Trip
            </button>
            <button className="bg-secondary-dark text-black px-5 py-2 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              View via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-black text-white min-h-[80px]">
              <div className="col-span-3 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center">
                Vehicle Type
              </div>
              <div className="col-span-3 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center">
                Seating
              </div>
              <div className="col-span-3 p-4 font-semibold text-lg border-r border-gray-600 flex items-center justify-center">
                Price/KM
              </div>
              <div className="col-span-3 p-4 font-semibold text-lg flex items-center justify-center">
                Per Day Charge
              </div>
            </div>

            {/* Table Body */}
            {pricingData.map((vehicle, index) => (
              <div 
                key={vehicle.id}
                className={`grid grid-cols-12 min-h-[180px] ${
                  index !== pricingData.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Vehicle Type Column - Full image with overlay text and hover effect */}
                <div 
                  className="col-span-3 border-r border-gray-200 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                  onMouseLeave={() => setHoveredVehicle(null)}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.vehicleType}
                      className="w-full h-full object-contain md:object-cover lg:object-cover"
                    />
                    {/* Vehicle Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                      <h3 className="text-lg font-bold">{vehicle.vehicleType}</h3>
                    </div>
                    
                    {/* Hover Overlay with Book Now Button */}
                    {hoveredVehicle === vehicle.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300">
                        <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
                          Book Now
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Seating Column */}
                <div className="col-span-3 border-r border-gray-200 flex items-center justify-center">
                  <span className="text-gray-700 text-2xl font-bold">{vehicle.seating}</span>
                </div>

                {/* Price Per KM Column */}
                <div className="col-span-3 border-r border-gray-200 flex items-center justify-center">
                  <span className="text-gray-700 text-2xl font-bold">{vehicle.pricePerKm}</span>
                </div>

                {/* Per Day Charge Column */}
                <div className="col-span-3 flex items-center justify-center">
                  <span className="text-gray-700 text-2xl font-bold">{vehicle.perDayCharge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>* All prices are inclusive of taxes. Additional charges may apply for tolls and parking.</p>
          </div>
        </div>
      </section>
    </div>
  )
}