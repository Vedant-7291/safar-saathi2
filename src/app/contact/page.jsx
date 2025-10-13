// src/app/contact-us/page.jsx
'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="Contact Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Get in touch with us for any queries or bookings
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Main Div with Background Image */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Image only for this div */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/assets/contact/contact us img.png" 
                alt="Contact Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Contact Information */}
                <div className="p-8 md:p-12 lg:p-16 text-black">
                  <div className="space-y-8">
                    {/* Heading */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                      <p className="text-black text-lg leading-relaxed">
                        Have questions or need assistance? We're here to help. 
                        Reach out to us through any of the following channels and 
                        we'll get back to you as soon as possible.
                      </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Address</h3>
                          <p className="text-black">
                            123 Business Street<br />
                            Commercial Area<br />
                            New Delhi, India - 110001
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Contact</h3>
                          <p className="text-black">
                            +91 98765 43210<br />
                            +91 98765 43211
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Email</h3>
                          <p className="text-black">
                            info@humsaathi.com<br />
                            support@humsaathi.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="pt-6">
                      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 bg-secondary-dark hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-secondary-dark hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                          <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-secondary-dark hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                          <Instagram className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="flex items-center justify-center p-8 md:p-12 lg:p-16">
                  {/* Form Container with reduced height and proper padding */}
                  <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                        <p className="text-gray-600">We'll get back to you within 24 hours</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter subject"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Enter your message..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.366391535209!2d77.2244151753397!3d28.61487537567513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1699876543210!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hum Saathi Location"
            />
          </div>
          
          {/* Map Info */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Visit our office or book a vehicle directly. We're located in the heart of the city for your convenience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}