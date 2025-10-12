import { FaCar} from 'react-icons/fa';

export default function WhyWeAreDifferent() {
  const stats = [
    {
      number: "1200+",
      label: "Trips Completed"
    },
    {
      number: "15+",
      label: "Years Experience"
    },
    {
      number: "3000+",
      label: "Happy Customers"
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top Content Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          {/* Small Yellow Heading */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-font-gray font-semibold rounded-lg">
              Why We Are Different
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-font-gray mb-4 sm:mb-6 max-w-2xl">
            Where Comfort Meets Memorable Journey
          </h1>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-font-gray max-w-2xl leading-relaxed mb-8 sm:mb-12">
            At Hum Saathi, we redefine transportation by blending luxury with reliability. 
            Every journey is crafted to provide unparalleled comfort, safety, and memories 
            that last a lifetime.
          </p>
        </div>
      </div>

      {/* New Div with reduced height */}
      <div className="relative">
        {/* Reduced height for top white section */}
        <div className="h-12 sm:h-16 lg:h-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full items-end">
              
              {/* Left Side - Image top section */}
              <div className="relative h-full lg:col-span-8 xl:col-span-9">
                <div className="relative w-full h-8 sm:h-12 lg:h-16 bg-white rounded-t-xl overflow-hidden">
                  <div className="absolute bottom-0 w-full h-2 sm:h-3 bg-white"></div>
                </div>
              </div>

              {/* Right Side - Stats Card top section */}
              <div className="relative h-full flex items-end justify-end lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-8 sm:h-12 lg:h-16">
                  {/* Removed the extra gray background that was causing overlap */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Yellow Background with reduced height */}
        <div className="bg-yellow-400 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start -mt-12 sm:-mt-16 lg:-mt-20">
              
              {/* Left Side - Image with reduced height */}
              <div className="relative lg:col-span-8 xl:col-span-9">
                <div className="relative w-full -mt-4 sm:-mt-8 lg:-mt-12">
                  <img 
                    src="/assets/home/different.png" 
                    alt="Luxury Journey Experience"
                    className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-xl shadow-2xl border-2 border-gray-200"
                  />
                </div>
              </div>

              {/* Right Side - Stats Card with reduced height */}
              <div className="relative flex justify-center lg:justify-end lg:col-span-4 xl:col-span-3 lg:col-start-9 xl:col-start-10">
                <div className="relative bg-gray-800 rounded-xl p-4 sm:p-6 shadow-2xl -mt-4 sm:-mt-8 lg:-mt-12 w-full max-w-xs sm:max-w-sm lg:max-w-full h-48 sm:h-64 lg:h-80 xl:h-96 flex items-center">
                  <div className="space-y-4 sm:space-y-6 w-full">
                    {stats.map((stat, index) => {
                      return (
                        <div key={index} className="text-center">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            {stat.number}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-base mt-1 sm:mt-2">
                            {stat.label}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}