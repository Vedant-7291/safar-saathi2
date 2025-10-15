// components/BannerSection.jsx
'use client'
import { useState, useEffect } from 'react'

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* This section will be placed behind the navbar */}
      <section className="relative w-full h-screen overflow-hidden -mt-20" id="banner">
        {/* Banner Background Image - This extends behind navbar */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/home-banner.png" 
            alt="Hum Saathi Banner"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        </div>
        
        {/* Banner Content - This starts below navbar */}
        <div className="relative z-10 h-full flex items-center justify-center pt-20">
          <div className={`text-center text-white px-4 w-full max-w-4xl transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl">
              Hum Saathi
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-8 drop-shadow-2xl font-light">
              Your Reliable Travel Partner
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl cursor-pointer">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}