// components/Navbar.jsx
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Don't show navbar on admin or dashboard routes
  const isAdminRoute = pathname?.startsWith('/admin')
  const isUserRoute = pathname?.startsWith('/dashboard')

  if (isAdminRoute || isUserRoute) return null

  const isHome = pathname === '/'
  // Add routes that should have transparent navbar with banner background
  const isBannerPage = ['/about-us', '/pricing', '/fleet', '/packages', '/contact','/book-taxi'].includes(pathname)

  useEffect(() => {
    // Only handle scroll effects on home page or banner pages
    if (!isHome && !isBannerPage) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome, isBannerPage])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
  ]

  // Navbar background - Transparent on home page and banner pages until scrolled
  const shouldBeTransparent = isHome || isBannerPage
  const bgClass = shouldBeTransparent
    ? scrolled
      ? 'bg-white/90 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'bg-white/90 backdrop-blur-md shadow-lg'

  // Text color - White on home page and banner pages when not scrolled, dark otherwise
  const textClass = shouldBeTransparent
    ? scrolled
      ? 'text-gray-900'
      : 'text-white'
    : 'text-gray-900'

  // Mobile menu background
  const mobileBg = shouldBeTransparent && !scrolled
    ? 'bg-black/90 backdrop-blur-md'
    : 'bg-white/95 backdrop-blur-md'

  // Mobile menu text color
  const mobileTextClass = shouldBeTransparent && !scrolled
    ? 'text-white'
    : 'text-gray-900'

  return (
    <div className="relative">
      {/* Banner Section - Only show on home page */}
      {isHome && (
        <div className="relative w-full h-screen overflow-hidden">
          {/* Banner Background with perfect coverage */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/assets/home-banner.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Banner Content */}
          <div className="relative z-10 h-full flex items-center justify-center w-full">
            <div className="text-center text-white w-full max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl">
                Safar Saathi
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl mb-8 drop-shadow-2xl font-light">
                Your Reliable Travel Partner
              </p>
              <button className="bg-secondary-dark text-black px-5 py-2 rounded-lg font-semibold text-xl transition-all duration-300 transform shadow-2xl hover:shadow-3xl">
                Explore Our Services
              </button>
            </div>
          </div>

          
        </div>
      )}

      {/* Navbar - Positioned absolutely over the banner on home page and banner pages, normal on other pages */}
      <nav className={`w-full z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'fixed top-0 left-0 right-0' : 'relative'
      } ${bgClass}`}>
        <div className="w-full mx-auto px-0">
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo - Using flex-grow with max-width to control positioning */}
            <div className="flex items-center flex-grow-0 flex-shrink-0 max-w-[200px] lg:max-w-[250px] ml-15">
              <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  shouldBeTransparent && !scrolled ? 'bg-white/20 backdrop-blur-sm' : 'bg-secondary-dark'
                }`}>
                  <span className="font-bold text-lg text-black">
                    HS
                  </span>
                </div>
                <span className={`font-bold text-2xl ${textClass}`}>
                  Hum Saathi
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered with auto margins */}
            <div className="hidden lg:flex items-center space-x-8 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${textClass} hover:text-yellow-500 transition-colors duration-200 font-medium ${
                    pathname === link.href ? 'text-blue-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons - Using flex-grow with max-width to control positioning */}
            <div className="hidden lg:flex items-center justify-end flex-grow-0 flex-shrink-0 max-w-[200px] lg:max-w-[250px] mr-15">
              <Link
                href="/book-taxi"
                className={`px-6 py-3 rounded-lg transition-colors duration-200 font-medium shadow-lg ${
                  shouldBeTransparent && !scrolled
                    ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                    : 'bg-secondary-dark text-white hover:bg-yellow-600'
                }`}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`${textClass} z-60 relative p-2`}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${mobileBg} border-t border-gray-200 mx-0 rounded-none`}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${mobileTextClass} hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                
                <Link
                  href="/book-taxi"
                  className="bg-secondary-dark text-black block px-3 py-2 rounded-md text-base font-medium mt-2 text-center transition-colors"
                  onClick={handleLinkClick}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to prevent content from being hidden behind fixed navbar on home page and banner pages */}
      {shouldBeTransparent && <div className="h-20"></div>}
    </div>
  )
}