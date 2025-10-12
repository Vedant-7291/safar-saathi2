// src/app/about-us/page.jsx
'use client'
import { useState, useEffect, useRef } from 'react'
import { 
  Shield, 
  Clock, 
  Users, 
  Car,
  MapPin,
  Phone,
  Calendar,
  Star
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AboutUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialRef = useRef(null)

 const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Business Traveler",
    review: "Excellent service! The cars are always clean and the drivers are professional. Highly recommended for business trips.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Singh",
    designation: "Family Vacation",
    review: "We had an amazing family trip. The vehicle was spacious and comfortable. The driver was very helpful throughout our journey.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Sharma",
    designation: "Corporate Client",
    review: "Reliable and punctual service. Our company has been using Hum Saathi for over 2 years and never been disappointed.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sneha Patel",
    designation: "Frequent Traveler",
    review: "Best cab service in the city! Affordable prices, clean cars, and polite drivers. My go-to service for all my travels.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Mehta",
    designation: "Tourist",
    review: "Great experience exploring the city with Hum Saathi. The driver was knowledgeable about all the tourist spots.",
    rating: 5,
  },
  {
    id: 6,
    name: "Anita Desai",
    designation: "Airport Transfer",
    review: "Perfect for airport transfers. Always on time and the booking process is very convenient through their app.",
    rating: 4,
  },
  {
    id: 7,
    name: "Rahul Verma",
    designation: "Outstation Trip",
    review: "Comfortable outstation trip with family. The car was in excellent condition and the driver was very professional.",
    rating: 5,
  },
  {
    id: 8,
    name: "Neha Gupta",
    designation: "Daily Commuter",
    review: "Using Hum Saathi for my daily office commute. Reliable service and good pricing compared to other options.",
    rating: 4,
  },
  {
    id: 9,
    name: "Sanjay Reddy",
    designation: "Event Transportation",
    review: "Booked multiple cars for our corporate event. Everything was perfectly coordinated and executed.",
    rating: 5,
  },
  {
    id: 10,
    name: "Pooja Mehta",
    designation: "Wedding Planner",
    review: "Outstanding service for wedding transportation. The cars were decorated beautifully and arrived on time.",
    rating: 5,
  },
  {
    id: 11,
    name: "Rohan Kapoor",
    designation: "International Tourist",
    review: "As a foreign tourist, I felt very safe and comfortable. The driver spoke good English and was very helpful.",
    rating: 5,
  },
  {
    id: 12,
    name: "Kavita Joshi",
    designation: "Senior Citizen",
    review: "Very patient and caring drivers. They always help with luggage and ensure a comfortable ride for elderly passengers.",
    rating: 5,
  },
  {
    id: 13,
    name: "Deepak Malhotra",
    designation: "Business Executive",
    review: "Perfect for client meetings. The premium cars make a great impression and the service is always punctual.",
    rating: 5,
  },
  {
    id: 14,
    name: "Meera Choudhary",
    designation: "Solo Traveler",
    review: "As a woman traveling alone, I always feel safe with Hum Saathi. Their female driver option is excellent.",
    rating: 5,
  },
  {
    id: 15,
    name: "Arun Singhania",
    designation: "Regular Customer",
    review: "Been using their services for 3 years now. Consistent quality and great customer support whenever needed.",
    rating: 4,
  }
]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Your safety is our top priority with well-maintained vehicles and trained drivers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round the clock service to meet your travel needs anytime, anywhere"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Drivers",
      description: "Professional and courteous drivers with extensive local knowledge"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Modern Fleet",
      description: "Well-maintained, comfortable vehicles for all your travel requirements"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Pan India Service",
      description: "Operating across multiple cities with consistent quality service"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Banner Section - Fixed positioning */}
      <section className="relative w-full h-[60vh] mt-[-80px] pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/pages-banner.png" 
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Your trusted travel partner with years of excellence in transportation services
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Image - Fixed image size */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Us</h2>
                <div className="w-20 h-1 bg-yellow-500"></div>
                <p className="text-yellow-600 font-semibold text-lg">
                  Your Reliable Travel Partner Since 2010
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Hum Saathi has been at the forefront of providing exceptional transportation 
                  services across India. With over a decade of experience, we have built a 
                  reputation for reliability, safety, and customer satisfaction.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our commitment to excellence and continuous innovation has made us the 
                  preferred choice for thousands of customers. From corporate travel to 
                  family vacations, we cater to all your transportation needs with 
                  professionalism and care.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe in building lasting relationships with our customers by 
                  delivering services that exceed expectations and create memorable 
                  travel experiences.
                </p>
              </div>
            </div>

            {/* Right Image - Properly sized to match content height */}
            <div className="relative h-full flex items-center">
              <img 
                src="/assets/about/about us img.png" 
                alt="About Hum Saathi"
                className="w-full max-h-[500px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    {/* Call to Action Section with Background Image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/about/book-trip.png" 
            alt="Call to Action Background"
            className="w-full h-full object-contain"
          />
          <div className="absolute"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
          <div className="ml-auto w-full lg:w-1/2 space-y-6 text-black">
            <h2 className="text-xl md:text-3xl font-bold pt-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-black">
              Book your ride today and experience the difference with Hum Saathi. 
              Professional service, comfortable vehicles, and memorable journeys await you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Trip
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                View via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section - Perfect image alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-yellow-600 font-semibold text-lg">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Experience The Difference
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Three Images perfectly aligned with features */}
            <div className="h-full flex flex-col justify-between space-y-4">
              <img 
                src="/assets/about/1.png" 
                alt="Modern Fleet"
                className="w-full h-40 lg:h-44 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/assets/about/2.png" 
                alt="Professional Drivers"
                className="w-full h-40 lg:h-44 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/assets/about/3.png" 
                alt="24/7 Service"
                className="w-full h-40 lg:h-44 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
{/* Testimonials Section - Perfect Continuous Loop */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-dark">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
      What Our Customers Say
    </h2>
    
    {/* Container with exact 3 card width */}
    <div className="w-full overflow-hidden">
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden"> {/* Fixed max width */}
          <motion.div
            className="flex"
            animate={{
              x: `-${currentTestimonial * 33.333}%`, // Move by exactly one card width
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.8,
            }}
          >
            {/* Create enough duplicates for seamless continuous scrolling */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-1/3 px-3" // Exactly 33.333% width
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            i < testimonial.rating 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 italic mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      "{testimonial.review}"
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-yellow-600 text-xs md:text-sm">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    {/* Dots Indicator */}
    <div className="flex justify-center mt-8 space-x-2">
      {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === (currentTestimonial % Math.ceil(testimonials.length / 3))
              ? 'bg-yellow-500 scale-125' 
              : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  </div>
</section>
      {/* Stats Section - Adjusted spacing and centered */}
{/* Stats Section - Fixed Alignment and Padding */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
      {/* Left Column - Centered with proper padding */}
      <div className="space-y-8 text-center p-6 lg:p-8 bg-pink-50 rounded-2xl"> {/* Added padding and rounded corners */}
        {/* First Row */}
        <div className="p-4"> {/* Added inner padding */}
          <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            10+ Years
          </h3>
          <p className="text-xl text-gray-600">Of Excellence in Service</p>
        </div>

        {/* Second Row - Two Columns */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 p-4"> {/* Added padding */}
          <div className="text-center p-3"> {/* Added padding */}
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</h4>
            <p className="text-gray-600 text-lg">Cities Covered</p>
          </div>
          <div className="text-center p-3"> {/* Added padding */}
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">657</h4>
            <p className="text-gray-600 text-lg">Total Cars</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-yellow-500 rounded-2xl p-8 flex items-center justify-center h-full min-h-[250px] lg:min-h-[280px]">
        <div className="text-center">
          <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">
            10K+
          </h3>
          <p className="text-xl text-black font-semibold">
            Happy Customers
          </p>
          <p className="text-black/90 mt-2 text-lg">
            Trusted by thousands across India
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}