import { FaCar, FaMoneyBillWave, FaStar } from 'react-icons/fa';

export default function WhyChooseUs() {
  const bulletPoints = [
    "24/7 Customer Support",
    "Professional Certified Drivers", 
    "Well-Maintained Fleet",
    "Transparent Pricing",
    "Safe & Secure Rides",
    "On-time Service Guarantee"
  ]

  const features = [
    {
      icon: FaCar,
      title: "Premium Vehicles",
      description: "Luxurious cars"
    },
    {
      icon: FaMoneyBillWave,
      title: "Best Prices", 
      description: "No hidden charges"
    },
    {
      icon: FaStar,
      title: "5-Star Service",
      description: "Rated excellent"
    }
  ]

  return (
    <section className="relative py-12 bg-primary-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-font-gray mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-secondary-dark rounded-full mx-auto"></div>
        </div>

        {/* First Row - Image Left, Bullet Points Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          
          {/* Left Side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full">
              <img 
                src="/assets/home/why-choose.png" 
                alt="Why Choose Hum Saathi"
                className="w-full h-[300px] object-cover rounded-xl relative z-20"
              />
            </div>
          </div>

          {/* Right Side - Simple Bullet Points */}
          <div className="relative flex items-center z-30">
            <div className="w-full bg-primary-white lg:pl-8 relative z-30">
              <div className="space-y-4">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2"></div>
                    <p className="text-font-gray text-lg font-medium flex-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Content Left, Image Right with Overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Content - Moved more right */}
          <div className="relative flex items-start order-2 lg:order-1 lg:pt-8 lg:pl-12">
            <div className="w-full">
              <h3 className="text-2xl lg:text-3xl font-bold text-font-gray mb-4">
                Experience the Difference
              </h3>
              <p className="text-font-gray text-base lg:text-lg leading-relaxed mb-6">
                At Hum Saathi, we go beyond just transportation. We create experiences 
                that make every journey memorable with comfort, safety, and peace of mind.
              </p>

              {/* Three Professional Icons */}
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                        <IconComponent className="text-font-gray text-xl" />
                      </div>
                      <h4 className="text-font-gray font-semibold text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-font-gray text-xs opacity-80">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Image with Overlap - Removed yellow div and fixed positioning */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative w-full">
              <img 
                src="/assets/home/why-choose2.png" 
                alt="Professional Service"
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}