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
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="Pricing Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-16 md:pt-20">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 -translate-y-8 md:-translate-y-15">
              Pricing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto -translate-y-8 md:-translate-y-15 px-2">
              Transparent and competitive pricing for all your travel needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Header Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Your Perfect Ride with Perfect Price
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Choose from our wide range of vehicles at competitive prices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-secondary-dark text-black px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer hover:bg-secondary-dark/90">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Book a Trip
            </button>
            <button className="w-full sm:w-auto bg-secondary-dark text-black px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer hover:bg-secondary-dark/90">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              View via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Cards View */}
          <div className="block lg:hidden space-y-4">
            {pricingData.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                onMouseLeave={() => setHoveredVehicle(null)}
              >
                {/* Vehicle Image */}
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.vehicleType}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                    <h3 className="text-lg sm:text-xl font-bold">{vehicle.vehicleType}</h3>
                  </div>
                  
                  {hoveredVehicle === vehicle.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300">
                      <button className="bg-yellow-500 text-black px-4 sm:px-5 py-2 rounded-lg font-semibold text-base sm:text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  )}
                </div>

                {/* Vehicle Details */}
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Seating</p>
                    <p className="text-lg font-bold text-gray-700">{vehicle.seating}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Price/KM</p>
                    <p className="text-lg font-bold text-gray-700">{vehicle.pricePerKm}</p>
                  </div>
                  <div className="text-center col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Per Day Charge</p>
                    <p className="text-lg font-bold text-gray-700">{vehicle.perDayCharge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-black text-white min-h-[60px] xl:min-h-[80px]">
              <div className="col-span-3 p-3 xl:p-4 font-semibold text-base xl:text-lg border-r border-gray-600 flex items-center justify-center text-center">
                Vehicle Type
              </div>
              <div className="col-span-3 p-3 xl:p-4 font-semibold text-base xl:text-lg border-r border-gray-600 flex items-center justify-center text-center">
                Seating
              </div>
              <div className="col-span-3 p-3 xl:p-4 font-semibold text-base xl:text-lg border-r border-gray-600 flex items-center justify-center text-center">
                Price/KM
              </div>
              <div className="col-span-3 p-3 xl:p-4 font-semibold text-base xl:text-lg flex items-center justify-center text-center">
                Per Day Charge
              </div>
            </div>

            {/* Table Body */}
            {pricingData.map((vehicle, index) => (
              <div 
                key={vehicle.id}
                className={`grid grid-cols-12 min-h-[120px] xl:min-h-[150px] 2xl:min-h-[180px] ${
                  index !== pricingData.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Vehicle Type Column */}
                <div 
                  className="col-span-3 border-r border-gray-200 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                  onMouseLeave={() => setHoveredVehicle(null)}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.vehicleType}
                      className="w-full h-full object-cover"
                    />
                    {/* Vehicle Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 xl:p-3 text-center">
                      <h3 className="text-sm xl:text-lg font-bold">{vehicle.vehicleType}</h3>
                    </div>
                    
                    {/* Hover Overlay with Book Now Button */}
                    {hoveredVehicle === vehicle.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300">
                        <button className="bg-yellow-500 text-black px-4 xl:px-5 py-2 rounded-lg font-semibold text-sm xl:text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                          Book Now
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Seating Column */}
                <div className="col-span-3 border-r border-gray-200 flex items-center justify-center">
                  <span className="text-gray-700 text-lg xl:text-xl 2xl:text-2xl font-bold">{vehicle.seating}</span>
                </div>

                {/* Price Per KM Column */}
                <div className="col-span-3 border-r border-gray-200 flex items-center justify-center">
                  <span className="text-gray-700 text-lg xl:text-xl 2xl:text-2xl font-bold">{vehicle.pricePerKm}</span>
                </div>

                {/* Per Day Charge Column */}
                <div className="col-span-3 flex items-center justify-center">
                  <span className="text-gray-700 text-lg xl:text-xl 2xl:text-2xl font-bold">{vehicle.perDayCharge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm px-2">
            <p>* All prices are inclusive of taxes. Additional charges may apply for tolls and parking.</p>
          </div>
        </div>
      </section>
    </div>
  )
}