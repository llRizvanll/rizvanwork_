"use client";

import { Space_Mono, Fira_Code, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import GoogleAnalytics from './GoogleAnalytics';
import ThemeStyles from './components/ThemeStyles';

// Using monospace fonts for the hacker aesthetic
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const metadata = {
  title: 'Rizvan Hawaldar - Mobile Software Engineer',
  description: 'Mobile Software Engineer specializing in React Native, Android, and iOS development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${firaCode.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <ThemeProvider>
        <body className="bg-white font-inter overflow-x-hidden">
          <GoogleAnalytics GA_MEASUREMENT_ID="G-JCQCNPQ28H" />
          
          <ThemeStyles />
          {/* Matrix background for hacker theme will be controlled by CSS */}
          <div id="matrix-backdrop" className="fixed inset-0 z-[-1] opacity-0 transition-opacity duration-500">
            <div className="absolute inset-0 bg-black">
              <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-repeat opacity-10"></div>
              <div id="matrix-rain" className="absolute inset-0 opacity-20"></div>
            </div>
          </div>
          
          {/* Main content */}
          {children}
          
          {/* Scan line effect for hacker theme */}
          <div id="scan-line" className="fixed top-0 left-0 right-0 w-full h-screen pointer-events-none z-[999] opacity-0 transition-opacity duration-500"></div>
        </body>
      </ThemeProvider>
      
      {/* Global Styles that apply only when hacker theme is active */}
      <style jsx global>{`
        .hacker-theme {
          background-color: black;
          color: #00ff00;
          font-family: var(--font-fira-code), monospace;
        }
        
        .hacker-theme body {
          background-color: black;
        }
        
        .hacker-theme ::selection {
          background-color: rgba(0, 255, 0, 0.3);
          color: #ffffff;
        }
        
        #scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 255, 0, 0.1);
          z-index: 999;
          opacity: 0;
          animation: scan 6s linear infinite;
        }
        
        @keyframes scan {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }
        
        /* Terminal cursor blink animation */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Subtle CRT flicker effect - only applies in hacker theme */
        .hacker-theme {
          animation: flicker 0.15s infinite;
        }
        
        @keyframes flicker {
          0% { opacity: 0.98; }
          5% { opacity: 0.97; }
          10% { opacity: 0.99; }
          15% { opacity: 0.98; }
          20% { opacity: 1; }
          50% { opacity: 0.99; }
          70% { opacity: 0.98; }
          80% { opacity: 0.99; }
          90% { opacity: 0.97; }
          100% { opacity: 0.98; }
        }
        
        /* Custom scrollbar for hacker theme */
        .hacker-theme ::-webkit-scrollbar {
          width: 8px;
        }
        
        .hacker-theme ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }
        
        .hacker-theme ::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 0, 0.3);
          border-radius: 4px;
        }
        
        .hacker-theme ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 0, 0.5);
        }
      `}</style>
      
      {/* Matrix rain effect script - will only activate when hacker theme is on */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Matrix rain effect
            document.addEventListener('DOMContentLoaded', function() {
              // Function to init matrix rain
              function initMatrixRain() {
                const matrixRain = document.getElementById('matrix-rain');
                if (!matrixRain) return;
                
                // Clear previous canvas if exists
                while (matrixRain.firstChild) {
                  matrixRain.removeChild(matrixRain.firstChild);
                }
                
                const canvas = document.createElement('canvas');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                canvas.style.display = 'block';
                matrixRain.appendChild(canvas);
                
                const ctx = canvas.getContext('2d');
                const chars = '01'.split('');
                const columns = Math.floor(canvas.width / 20);
                const drops = [];
                
                for (let i = 0; i < columns; i++) {
                  drops[i] = Math.random() * -100;
                }
                
                function draw() {
                  if (document.body.classList.contains('hacker-theme')) {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    ctx.fillStyle = '#0f0';
                    ctx.font = '15px monospace';
                    
                    for (let i = 0; i < drops.length; i++) {
                      const text = chars[Math.floor(Math.random() * chars.length)];
                      ctx.fillText(text, i * 20, drops[i] * 20);
                      
                      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                      }
                      
                      drops[i]++;
                    }
                    
                    requestAnimationFrame(draw);
                  }
                }
                
                // Start the animation
                draw();
              }
              
              // Theme change listener
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.attributeName === 'class') {
                    if (document.body.classList.contains('hacker-theme')) {
                      document.getElementById('matrix-backdrop').style.opacity = '1';
                      document.getElementById('scan-line').style.opacity = '1';
                      initMatrixRain();
                    } else {
                      document.getElementById('matrix-backdrop').style.opacity = '0';
                      document.getElementById('scan-line').style.opacity = '0';
                    }
                  }
                });
              });
              
              observer.observe(document.body, { attributes: true });
              
              // Initialize based on current theme
              if (document.body.classList.contains('hacker-theme')) {
                document.getElementById('matrix-backdrop').style.opacity = '1';
                document.getElementById('scan-line').style.opacity = '1';
                initMatrixRain();
              }
              
              // Handle window resize
              window.addEventListener('resize', initMatrixRain);
            });
          `,
        }}
      />
    </html>
  );
}