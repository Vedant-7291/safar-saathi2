export default function About() {
  return (
    <section className="relative min-h-[90vh] bg-primary-white overflow-hidden w-full flex items-center">
      {/* Full width container */}
      <div className="min-h-[90vh] flex items-center w-full">
        <div className="relative w-full min-h-[90vh] flex items-center justify-center">
          {/* Split Background - Full width */}
          <div className="absolute inset-0 flex flex-col md:flex-row w-full min-h-[90vh]">
            {/* Yellow Background - Full width on mobile, 30% on desktop */}
            <div className="w-full h-[20vh] md:w-[30%] md:h-auto bg-secondary-dark"></div>
            {/* White Background - Full width on mobile, 70% on desktop */}
            <div className="w-full flex-1 bg-[#fff4d8]"></div>
          </div>

          {/* Content Container with max-w-7xl */}
          <div className="relative z-10 w-full max-w-7xl mx-auto py-16 lg:py-20">
            
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl heading-font">
                About Us
              </h2>
            
            </div>

            {/* Content Grid - Reduced gap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 px-4 lg:px-8">
              
              {/* Left Side - Image */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[400px] lg:h-[450px] xl:h-[500px]">
                  {/* Image Container */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src="/assets/home/home-about.png" 
                        alt="About Hum Saathi"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="relative flex items-center">
                <div className="w-full">
                  {/* Three Paragraphs */}
                  <div className="space-y-4 lg:space-y-5 mb-6 lg:mb-8">
                    <p className="text-font-gray text-base lg:text-lg xl:text-xl leading-relaxed">
                      <strong className="text-secondary-dark">Hum Saathi</strong> is your trusted travel companion, 
                      dedicated to providing premium transportation services with unmatched reliability and comfort. 
                      Founded with a vision to revolutionize the travel industry, we bring you a seamless booking experience.
                    </p>

                    <p className="text-font-gray text-base lg:text-lg xl:text-xl leading-relaxed">
                      With a fleet of well-maintained vehicles and professional drivers, we ensure every journey is 
                      safe, comfortable, and memorable. Our commitment to excellence has made us the preferred choice 
                      for thousands of satisfied customers across the region.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="group bg-secondary-dark text-font-gray hover:bg-yellow-500 px-4 lg:px-5 py-2 lg:py-2 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 lg:space-x-3 cursor-pointer">
                    <span>View More</span>
                    <svg 
                      className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}