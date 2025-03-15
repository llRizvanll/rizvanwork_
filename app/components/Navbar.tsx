'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavItemClick = (e: React.MouseEvent, id: string) => {
    // Get the target element
    const targetElement = document.getElementById(id);
    
    if (targetElement) {
      // Prevent default behavior
      e.preventDefault();
      
      // Close the mobile menu
      setMobileMenuOpen(false);
      
      // Add a small delay before scrolling to make sure mobile menu animation completes
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-white/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.a 
            href="#"
            className="text-xl font-bold text-fb-blue"
            whileHover={{ scale: 1.05 }}
          >
            MRH
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-fb-grey hover:text-fb-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleNavItemClick(e, item.toLowerCase())}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="flex items-center p-2 rounded-md text-fb-blue hover:text-fb-blue-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-center text-fb-grey hover:text-fb-blue hover:bg-gray-50 rounded-md transition-colors"
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavItemClick(e, item.toLowerCase())}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}