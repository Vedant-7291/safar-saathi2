'use client'
import { useState } from 'react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I book a ride with Safar Saathi?",
      answer: "You can book a ride through our website, mobile app, or by calling our customer service. Simply enter your pickup and destination locations, select your vehicle type, and confirm your booking."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, net banking, UPI, digital wallets, and cash payments for your convenience."
    },
    {
      question: "Can I cancel my booking after confirmation?",
      answer: "Yes, you can cancel your booking. Cancellation charges may apply depending on how close to the pickup time you cancel. Please refer to our cancellation policy for details."
    },
    {
      question: "Do you provide outstation services?",
      answer: "Yes, we provide both local and outstation services. You can book one-way or round trips to any destination within our service areas."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We prioritize your safety with verified drivers, vehicle tracking, SOS features, and regular vehicle sanitization. All our drivers are trained professionals with proper documentation."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative z-40 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-font-gray mb-4">
            FAQs
          </h2>
          
          {/* Description Paragraph */}
          <p className="text-font-gray text-lg">
            Find answers to commonly asked questions about our services, booking process, and policies.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-pink-50 rounded-lg shadow-md border border-pink-200 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-pink-100 transition-colors duration-200 bg-pink-100"
              >
                <span className="text-lg font-semibold text-font-gray pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-font-gray transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer - Dropdown */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-pink-200">
                  <p className="text-font-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}