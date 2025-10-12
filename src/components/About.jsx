export default function About() {
  return (
    <section className="relative min-h-[90vh] bg-primary-white overflow-hidden w-full flex items-center">
      {/* Full width container */}
      <div className="w-full min-h-[90vh] flex items-center">
        <div className="relative w-full min-h-[90vh] flex items-center">
          {/* Split Background - Full width */}
          <div className="absolute inset-0 flex flex-col md:flex-row w-full min-h-[90vh]">
            {/* Yellow Background - Full width on mobile, 30% on desktop */}
            <div className="w-full h-[20vh] md:w-[30%] md:h-auto bg-secondary-dark"></div>
            {/* White Background - Full width on mobile, 70% on desktop */}
            <div className="w-full flex-1 bg-pink-50"></div>
          </div>

          {/* Heading at the top center */}
          <div className="absolute top-8 lg:top-12 left-0 right-0 z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-font-gray mb-4">
              About Us
            </h2>
            <div className="w-20 h-1 bg-secondary-dark rounded-full mx-auto"></div>
          </div>

          {/* Content Grid - Moved downwards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full pt-24 lg:pt-32 pb-16 lg:pb-20">
            
            {/* Left Side - Image */}
            <div className="relative flex items-center justify-center px-4 lg:px-8 lg:pr-0">
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
            <div className="relative flex items-center px-4 lg:px-8 xl:px-12 xl:pl-0">
              <div className="w-full">
                {/* Three Paragraphs */}
                <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
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
                <button className="group bg-secondary-dark text-font-gray hover:bg-secondary-light px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 lg:space-x-3">
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
    </section>
  )
}