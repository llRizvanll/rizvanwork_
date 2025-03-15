'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import { trackEvent } from '../GoogleAnalytics'
import { useTheme } from '../context/ThemeContext'
import { FaLaptopCode, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isHackerTheme = theme === 'hacker'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item: string) => {
    trackEvent('click', 'navigation', `nav_${item.toLowerCase()}`);
    setShowMenu(false);
  }

  const handleThemeToggle = () => {
    toggleTheme();
    trackEvent('click', 'theme', `switch_to_${theme === 'default' ? 'hacker' : 'default'}`);
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isHackerTheme 
            ? 'bg-black/90 backdrop-blur-sm border-b border-green-500/30' 
            : 'bg-white/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.a 
            href="#"
            className={`text-xl font-bold flex items-center ${
              isHackerTheme ? 'text-green-500 font-mono' : 'text-fb-blue font-sans'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
          >
            {isHackerTheme ? (
              <>RZV::<span className="text-green-400">TERMINAL</span></>
            ) : (
              <>Rizvan Hawaldar</>
            )}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isHackerTheme 
                    ? 'text-green-400 hover:text-green-300 font-mono' 
                    : 'text-fb-black hover:text-fb-blue'
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick(item)}
              >
                {isHackerTheme ? `$ ${item.toLowerCase()}` : item}
              </motion.a>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${
                isHackerTheme 
                  ? 'bg-green-900/30 text-green-400 hover:bg-green-800/40 border border-green-500/30' 
                  : 'bg-fb-blue/10 text-fb-blue hover:bg-fb-blue/20'
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={`Switch to ${isHackerTheme ? 'Default' : 'Hacker'} theme`}
            >
              {isHackerTheme ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaLaptopCode className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setShowMenu(!showMenu)}
              className={`p-2 rounded-lg ${
                isHackerTheme 
                  ? 'text-green-400 border border-green-500/30' 
                  : 'text-fb-black'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {showMenu ? (
                <span className="font-mono">[ close ]</span>
              ) : (
                <span className="font-mono">[ menu ]</span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {showMenu && (
        <motion.div 
          className="md:hidden bg-black/95 border-t border-green-500/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-2 text-lg ${
                  isHackerTheme 
                    ? 'text-green-400 hover:bg-green-900/30 font-mono' 
                    : 'text-fb-black hover:bg-fb-blue/10'
                } transition-colors`}
                onClick={() => handleNavClick(item)}
                whileHover={{ x: 5 }}
              >
                {isHackerTheme ? `$ ${item.toLowerCase()}` : item}
              </motion.a>
            ))}
            
            {/* Theme Toggle in Mobile Menu */}
            <motion.button
              onClick={handleThemeToggle}
              className={`flex items-center px-4 py-2 mt-2 ${
                isHackerTheme 
                  ? 'text-green-400 hover:bg-green-900/30 font-mono border-t border-green-500/30' 
                  : 'text-fb-blue hover:bg-fb-blue/10 border-t border-gray-200'
              } w-full transition-colors`}
              whileHover={{ x: 5 }}
            >
              {isHackerTheme ? (
                <>
                  <FaSun className="mr-2" />
                  $ switch_theme --default
                </>
              ) : (
                <>
                  <FaLaptopCode className="mr-2" />
                  Switch to Hacker Theme
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Scanline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-green-500/20"></div>
      
      {/* CSS for glitch effect in hacker theme */}
      {isHackerTheme && (
        <style jsx>{`
          .glitch-text {
            position: relative;
          }
          
          .glitch-text::before {
            content: 'RZV::TERMINAL';
            position: absolute;
            left: -2px;
            text-shadow: 2px 0 #00ff00;
            top: 0;
            color: #00ff00;
            background: black;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: glitch-anim 3s infinite linear alternate-reverse;
          }
          
          @keyframes glitch-anim {
            0% {
              clip: rect(0, 900px, 5px, 0);
            }
            20% {
              clip: rect(0, 900px, 5px, 0);
            }
            21% {
              clip: rect(0, 900px, 0, 0);
            }
            49% {
              clip: rect(0, 900px, 0, 0);
            }
            50% {
              clip: rect(0, 900px, 5px, 0);
              opacity: 1;
            }
            80% {
              clip: rect(0, 900px, 5px, 0);
              opacity: 0.8;
            }
            81% {
              clip: rect(0, 900px, 0, 0);
            }
            100% {
              clip: rect(0, 900px, 0, 0);
            }
          }
        `}</style>
      )}
    </motion.nav>
  )
}