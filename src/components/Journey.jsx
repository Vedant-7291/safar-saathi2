'use client'
import { useState } from 'react'

export default function Journey() {
  const [formData, setFormData] = useState({
    fullName: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: '',
    tripType: 'one-way',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const journeySteps = [
    {
      image: '/assets/home/1.png',
      title: 'Choose Location'
    },
    {
      image: '/assets/home/2.png',
      title: 'Select Vehicle'
    },
    {
      image: '/assets/home/3.png',
      title: 'Get Price'
    }
  ]

  const vehicleTypes = [
    'Economy Sedan',
    'Premium Sedan',
    'SUV',
    'Luxury Car',
    'Mini Van',
    'Tempo Traveller'
  ]

  return (
    <section className="relative z-40 -mt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side - Three Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Three Cards Grid - 20% overlap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform -translate-y-4 md:-translate-y-6">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-secondary-dark rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-64 flex items-center justify-center"
                >
                  {/* Image Container Only */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-40 h-40 bg-primary-white rounded-full flex items-center justify-center">
                      {/* Fallback if image doesn't load */}
                      
                      {/* Uncomment when you have actual images */}
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-40 h-40 object-cover"
                      />
                    </div>
                 
                  </div>
                </div>
              ))}
            </div>

            {/* Text Content Below Cards */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-1 bg-secondary-dark mx-auto lg:mx-0 mb-4 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-font-gray mb-4">
                Plan Your Journey with Safar Saathi
              </h2>
              <p className="text-font-gray text-lg mb-6 max-w-3xl mx-auto lg:mx-0">
                Experience seamless travel planning with our easy-to-use booking system. 
                Get the best rates for your journey with complete transparency and no hidden charges.
              </p>
              <button className="bg-secondary-dark text-font-gray hover:bg-yellow-600 hover:text-font-gray px-5 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer">
                Book a Trip
              </button>
            </div>
          </div>

          {/* Right Side - Booking Form - Compact height */}
          <div className="bg-primary-white rounded-2xl shadow-2xl p-4 transform -translate-y-20 lg:-translate-y-24 z-50 w-full max-w-md lg:max-w-full mx-auto h-fit">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-font-gray mb-4 text-center">Book Your Ride</h3>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-font-gray font-medium mb-1 text-xs">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-font-gray font-medium mb-1 text-xs">Pickup Location *</label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter pickup address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-font-gray font-medium mb-1 text-xs">Destination *</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Enter destination address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                    required
                  />
                </div>

                {/* Trip Type */}
                <div>
                  <label className="block text-font-gray font-medium mb-1 text-xs">Trip Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="tripType"
                        value="one-way"
                        checked={formData.tripType === 'one-way'}
                        onChange={handleChange}
                        className="text-secondary-dark focus:ring-secondary-dark"
                      />
                      <span className="text-xs">One Way</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="tripType"
                        value="round-trip"
                        checked={formData.tripType === 'round-trip'}
                        onChange={handleChange}
                        className="text-secondary-dark focus:ring-secondary-dark"
                      />
                      <span className="text-xs">Round Trip</span>
                    </label>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-font-gray font-medium mb-1 text-xs">Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-font-gray font-medium mb-1 text-xs">Time *</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Vehicle Type and Passengers */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-font-gray font-medium mb-1 text-xs">Vehicle Type</label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                    >
                      <option value="">Select Vehicle</option>
                      {vehicleTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-font-gray font-medium mb-1 text-xs">Passengers *</label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-font-gray font-medium mb-1 text-xs">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-font-gray font-medium mb-1 text-xs">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-secondary-dark text-font-gray hover:bg-yellow-600 py-2 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}