// src/app/book-taxi/page.jsx
'use client'
import { useState } from 'react'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

export default function BookTaxi() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    vehicleType: '',
    passengers: '1',
    tripType: 'one-way'
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
    'Economy Sedan',
    'Premium Sedan',
    'SUV',
    'Luxury Car',
    'Mini Van',
    'Tempo Traveller'
  ]

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] mt-[-80px] pt-20">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 -translate-y-10">Book Taxi</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto -translate-y-10">
              Quick and easy taxi booking with Hum Saathi
            </p>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book a Taxi with Hum Saathi
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience comfortable and reliable taxi services at affordable prices. 
            Book your ride in just a few clicks and travel with confidence.
          </p>
        </div>
      </section>

      {/* Main Booking Section with Background Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/assets/book/book-now1.png" 
                alt="Booking Background"
                className="w-full h-full object-fill"
              />
              <div className="absolute inset-0"></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Left Side - Content */}
                <div className="p-6 md:p-8 lg:p-12 text-black">
                  <div className="space-y-4">
                    {/* Small Heading */}
                    <div>
                      <p className="text-black font-semibold text-base mb-2">Book a Taxi</p>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Your Journey Starts Here
                      </h2>
                      <p className="text-black text-base leading-relaxed">
                        Fast, reliable, hygenic taxi services at your fingertips.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
                  <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Book Your Ride</h3>
                        <p className="text-gray-600 text-sm">Fill the details to book your taxi</p>
                      </div>

                      <div className="space-y-3">
                        {/* Full Name */}
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Enter your full name"
                          />
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                              placeholder="Phone number"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                              placeholder="Email address"
                            />
                          </div>
                        </div>

                        {/* Pickup Location */}
                        <div>
                          <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                            Pickup Location *
                          </label>
                          <input
                            type="text"
                            id="pickup"
                            name="pickup"
                            required
                            value={formData.pickup}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Enter pickup location"
                          />
                        </div>

                        {/* Destination */}
                        <div>
                          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                            Destination *
                          </label>
                          <input
                            type="text"
                            id="destination"
                            name="destination"
                            required
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            placeholder="Enter destination"
                          />
                        </div>

                        {/* Trip Type */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
                          <div className="grid grid-cols-2 gap-2">
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name="tripType"
                                value="one-way"
                                checked={formData.tripType === 'one-way'}
                                onChange={handleChange}
                                className="text-yellow-500 focus:ring-yellow-500"
                              />
                              <span className="text-sm">One Way</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name="tripType"
                                value="round-trip"
                                checked={formData.tripType === 'round-trip'}
                                onChange={handleChange}
                                className="text-yellow-500 focus:ring-yellow-500"
                              />
                              <span className="text-sm">Round Trip</span>
                            </label>
                          </div>
                        </div>

                        {/* Date and Time */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                              Date *
                            </label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              required
                              value={formData.date}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                              Time *
                            </label>
                            <input
                              type="time"
                              id="time"
                              name="time"
                              required
                              value={formData.time}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                          </div>
                        </div>

                        {/* Vehicle Type and Passengers */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                              Vehicle Type
                            </label>
                            <select
                              id="vehicleType"
                              name="vehicleType"
                              value={formData.vehicleType}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            >
                              <option value="">Select Vehicle</option>
                              {vehicleTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                              Passengers *
                            </label>
                            <select
                              id="passengers"
                              name="passengers"
                              value={formData.passengers}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-sm"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-6 rounded-lg font-semibold text-base hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                      >
                        <Calendar className="w-4 h-4" />
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

      {/* Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/book/book-now2.png" 
              alt="Taxi Booking Service"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Image Info */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-base">
              Our fleet of well-maintained vehicles ready to serve you. Experience comfort and reliability with every ride.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}