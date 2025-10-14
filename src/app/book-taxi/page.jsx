// src/app/book-taxi/page.jsx
'use client'
import { useState } from 'react'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export default function BookTaxi() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    vehicleType: '',
    passengers: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const vehicleTypes = [
    'Hatchback (4+1)',
    'Sedan (4+1)',
    'SUV (6+1)',
    'Premium Sedan (4+1)',
    'Luxury SUV (6+1)',
    'Tempo Traveller (12+1)'
  ]

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="Book Taxi Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 -translate-y-15">  Book Taxi</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto -translate-y-15">
              Quick and easy taxi booking with Hum Saathi
            </p>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book a Taxi with Hum Saathi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience comfortable and reliable taxi services at affordable prices. 
            Book your ride in just a few clicks and travel with confidence.
          </p>
        </div>
      </section>

      {/* Main Booking Section with Background Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/assets/book/book-now1.png" 
                alt="Booking Background"
                className="w-full h-full object-fill "
              />
              <div className="absolute inset-0"></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Content */}
                <div className="p-8 md:p-12 lg:p-16 text-black">
                  <div className="space-y-6">
                    {/* Small Heading */}
                    <div>
                      <p className="text-black font-semibold text-lg mb-2">Book a Taxi</p>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Your Journey Starts Here
                      </h2>
                      <p className="text-black text-lg leading-relaxed">
                        Fast, reliable, hygenic taxi services at your fingertips.
                      </p>
                    </div>

                    

                   
                  </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="flex items-center justify-center p-8 md:p-12 lg:p-16">
                  <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Book Your Ride</h3>
                        <p className="text-gray-600">Fill the details to book your taxi</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                              placeholder="Phone number"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                              placeholder="Email address"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
                            Pickup Location *
                          </label>
                          <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            required
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter pickup location"
                          />
                        </div>

                        

                      

                      
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        Book Taxi Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section (Similar to Map Section) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/book/book-now2.png" 
              alt="Taxi Booking Service"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Image Info */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Our fleet of well-maintained vehicles ready to serve you. Experience comfort and reliability with every ride.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}