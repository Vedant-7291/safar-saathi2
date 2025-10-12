import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ]

  const contactDetails = [
    { type: 'Email', value: 'support@safarsaathi.com' },
    { type: 'Support', value: 'help@safarsaathi.com' },
    { type: 'Service', value: 'service@safarsaathi.com' },
    { type: 'Address', value: '123 Street, City, State, 12345' },
  ]

  return (
    <footer className="bg-font-gray text-primary-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 items-start">
          
          {/* Column 1 - Logo, Description & Social Media */}
          <div className="flex flex-col space-y-4 text-left">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-primary-white rounded-full flex items-center justify-center">
                <img 
                  src="/assets/logo-safar-saathi.png" 
                  alt="Safar Saathi Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary-white">Safar Saathi</span>
            </div>
            
            {/* Description */}
            <p className="text-secondary-light text-sm leading-relaxed">
              Your reliable travel partner offering premium transportation services with comfort, safety, and affordability at its core.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
             {/* Facebook */}
              <a
                href="https://www.facebook.com/61580250114834/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group text-secondary-dark text-xl hover:text-white"
              >
                <FaFacebook />
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/cpkleague"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-black transition-colors cursor-pointer group text-secondary-dark text-xl hover:text-white"
              >
                <FaXTwitter />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cpkl-official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer group text-secondary-dark  text-xl hover:text-white"
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cpklofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  text-secondary-dark text-xl hover:text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer group"
              >
                <FaInstagram />
              </a>

              {/* YouTube */}
              <a
                href="https://m.youtube.com/@Cpkl.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer group text-secondary-dark text-xl hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col text-left md:mx-auto">
            <h3 className="text-lg font-semibold mb-6 text-secondary-dark">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-light hover:text-secondary-dark transition-colors duration-300 text-sm flex items-center hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Details */}
          <div className="flex flex-col text-left md:ml-auto">
            <h3 className="text-lg font-semibold mb-6 text-secondary-dark">Contact Us</h3>
            <div className="space-y-4 text-sm text-secondary-light">
              <div className="space-y-1">
                <p className="font-medium text-secondary-dark">Address</p>
                <p>123 Street, City, State, 12345</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-secondary-dark">Email</p>
                <p>support@safarsaathi.com</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-secondary-dark">Support</p>
                <p>help@safarsaathi.com</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-secondary-dark">Phone</p>
                <p>+91-XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-secondary-dark border-t border-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-font-gray text-sm">
            <div className="mb-2 md:mb-0">
              © 2025 Safar Saathi. All rights reserved.
            </div>
            <div>
              Designed and developed by Astex
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}