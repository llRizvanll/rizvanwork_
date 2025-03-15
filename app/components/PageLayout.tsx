'use client'

import { useTheme } from '../context/ThemeContext'
import Navbar from './Navbar'
import Footer from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  
  return (
    <>
      <Navbar />
      <main className={`pt-24 min-h-screen ${isHackerTheme ? "bg-black text-green-400 relative overflow-hidden" : ""}`}>
        {isHackerTheme && (
          <>
            <div className="absolute inset-0 matrix-rain"></div>
            <div className="absolute inset-0 grid-pattern"></div>
          </>
        )}
        
        <div className={`container mx-auto px-4 py-12 ${isHackerTheme ? "relative z-10" : ""}`}>
          {title && (
            <h1 className={`text-4xl font-bold mb-8 ${
              isHackerTheme ? "text-green-500 font-mono glitch-text" : ""
            }`}>
              {title}
            </h1>
          )}
          
          {children}
        </div>
        
        {isHackerTheme && (
          <style jsx>{`
            .matrix-rain {
              background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,255,0,0.05) 100%);
              background-size: 100% 100%;
              animation: rain 5s linear infinite;
            }
            
            .grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(0,255,0,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,255,0,0.1) 1px, transparent 1px);
              background-size: 20px 20px;
            }
            
            @keyframes rain {
              0% { background-position: 0 0; }
              100% { background-position: 0 100%; }
            }
            
            .glitch-text {
              position: relative;
            }
            
            .glitch-text::before {
              content: '${title || ""}';
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
              }
              100% {
                clip: rect(0, 900px, 0, 0);
              }
            }
          `}</style>
        )}
      </main>
      <Footer />
    </>
  )
} 