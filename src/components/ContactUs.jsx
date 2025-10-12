'use client'
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    question: ''
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

  const contactDetails = [
    {
      icon: '/icons/phone.png',
      title: 'Call Us',
      details: ['+91 9876543210', '+91 9876543211']
    },
    {
      icon: '/icons/email.png',
      title: 'Email Us',
      details: ['info@safarsaathi.com', 'support@safarsaathi.com']
    },
    {
      icon: '/icons/location.png',
      title: 'Visit Us',
      details: ['123 Business Street', 'City, State - 123456']
    },
    {
      icon: '/icons/clock.png',
      title: 'Working Hours',
      details: ['Mon - Sun: 24/7', 'Customer Support']
    }
  ]

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Header and Contact Details */}
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-secondary-dark mb-2">Contact Us</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-font-gray mb-4">
                Get in Touch with Safar Saathi
              </h2>
              <p className="text-font-gray text-lg max-w-2xl">
                Have questions or need assistance? We're here to help! Reach out to us through any of the following 
                channels and our team will get back to you promptly.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((contact, index) => (
                <div 
                  key={index}
                  className="bg-primary-white rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  {/* Contact Icon */}
                  <div className="w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center mb-4">
                    {/* Fallback icon */}
                    <div className="text-primary-white font-bold text-sm">
                      {contact.title.split(' ').map(word => word[0]).join('')}
                    </div>
                    {/* Uncomment when you have actual icons */}
                    {/* <img 
                      src={contact.icon} 
                      alt={contact.title}
                      className="w-6 h-6 object-contain"
                    /> */}
                  </div>
                  
                  {/* Contact Details */}
                  <h4 className="text-lg font-bold text-font-gray mb-2">{contact.title}</h4>
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-font-gray text-sm mb-1">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-primary-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-primary-white font-medium mb-2 text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-700 text-primary-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-primary-white font-medium mb-2 text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-700 text-primary-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-primary-white font-medium mb-2 text-sm">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-gray-700 text-primary-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm"
                  required
                />
              </div>

              {/* Question */}
              <div>
                <label className="block text-primary-white font-medium mb-2 text-sm">
                  Ask a Question *
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Type your question or message here..."
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 text-primary-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-dark focus:border-transparent outline-none transition-all duration-200 text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary-dark text-primary-white hover:bg-secondary-light py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}