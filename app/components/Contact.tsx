"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from "./Section";
import Typewriter from 'typewriter-effect';
import { trackEvent } from '../GoogleAnalytics';
import { useTheme } from '../context/ThemeContext';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverBg: string;
  command: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rizvanhawaldar",
    icon: "🔗",
    color: "text-blue-500",
    hoverBg: "hover:bg-blue-100",
    command: "linkedin --open"
  },
  {
    name: "GitHub",
    url: "https://github.com/llRizvanll",
    icon: "👨‍💻",
    color: "text-gray-700",
    hoverBg: "hover:bg-gray-100",
    command: "github --profile"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/llrizvanll",
    icon: "🐦",
    color: "text-blue-400",
    hoverBg: "hover:bg-blue-50",
    command: "twitter --connect"
  },
  {
    name: "Email",
    url: "mailto:inbox.rizvan@gmail.com",
    icon: "✉️",
    color: "text-red-500",
    hoverBg: "hover:bg-red-50",
    command: "mail --send"
  }
];

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const isHackerTheme = theme === 'hacker';
  const [loaded, setLoaded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Only use loading animation in hacker theme
    if (isHackerTheme) {
      const timer1 = setTimeout(() => setLoaded(true), 800);
      const timer2 = setTimeout(() => setShowContact(true), 1500);
      const timer3 = setTimeout(() => setShowSocial(true), 2200);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      // Immediately show content in default theme
      setLoaded(true);
      setShowContact(true);
      setShowSocial(true);
    }
  }, [isHackerTheme]);

  // Reset state when theme changes
  useEffect(() => {
    setFormSubmitted(false);
  }, [theme]);

  const handleSocialClick = (name: string) => {
    trackEvent('click', 'contact', `social_${name.toLowerCase()}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setFormSubmitted(true);
    trackEvent('submit', 'contact', 'contact_form');
  };

  return (
    <Section className={isHackerTheme ? "bg-black relative overflow-hidden" : ""}>
      {isHackerTheme && (
        <>
          <div className="absolute inset-0 matrix-rain"></div>
          <div className="absolute inset-0 grid-pattern"></div>
        </>
      )}
      
      <div className={`max-w-6xl mx-auto px-4 ${isHackerTheme ? "relative z-10" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            isHackerTheme ? "text-green-400 font-mono glitch-text" : "text-fb-black"
          }`}>
            {isHackerTheme ? "$ establish_connection" : "Get In Touch"}
          </h2>
          <div className={`w-20 h-1 mx-auto ${
            isHackerTheme ? "bg-green-500" : "bg-fb-blue"
          }`}></div>
        </motion.div>

        {!loaded && isHackerTheme ? (
          <div className="font-mono text-green-400 space-y-2 text-center">
            <p>$ /bin/init_comms</p>
            <p className="text-green-300/70">Establishing secure connection...</p>
            <div className="loading-dots flex justify-center space-x-2 mt-4">
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-100"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse delay-200"></span>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: showContact ? 1 : 0, x: showContact ? 0 : -50 }}
              transition={{ duration: 0.6 }}
              className={isHackerTheme ? "relative" : ""}
            >
              {isHackerTheme && (
                <div className="absolute -left-5 -top-5 w-full h-full border border-green-500/30"></div>
              )}

              <div className={`${isHackerTheme ? "p-5 bg-black/80 border border-green-500/30" : ""}`}>
                <h3 className={`text-xl font-semibold mb-6 ${
                  isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
                }`}>
                  {isHackerTheme ? "$ send_message.sh" : "Send a Message"}
                </h3>

                {formSubmitted ? (
                  <div className={`p-6 rounded-lg ${
                    isHackerTheme 
                      ? "bg-green-900/20 border border-green-500/30" 
                      : "bg-green-50 border-l-4 border-green-500"
                  }`}>
                    <p className={isHackerTheme ? "text-green-400 font-mono" : "text-green-700"}>
                      {isHackerTheme 
                        ? "Message transmitted successfully. Awaiting response..." 
                        : "Your message has been sent! I'll get back to you as soon as possible."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-2 ${
                          isHackerTheme ? "text-green-400 font-mono" : "text-gray-700"
                        }`}
                      >
                        {isHackerTheme ? "$ user.name" : "Name"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className={`w-full p-3 rounded-lg ${
                          isHackerTheme 
                            ? "bg-black text-green-400 border border-green-500/30 focus:border-green-400 font-mono" 
                            : "border border-gray-300 focus:border-fb-blue focus:ring-fb-blue text-gray-900"
                        } transition-colors`}
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${
                          isHackerTheme ? "text-green-400 font-mono" : "text-gray-700"
                        }`}
                      >
                        {isHackerTheme ? "$ user.email" : "Email"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className={`w-full p-3 rounded-lg ${
                          isHackerTheme 
                            ? "bg-black text-green-400 border border-green-500/30 focus:border-green-400 font-mono" 
                            : "border border-gray-300 focus:border-fb-blue focus:ring-fb-blue text-gray-900"
                        } transition-colors`}
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 ${
                          isHackerTheme ? "text-green-400 font-mono" : "text-gray-700"
                        }`}
                      >
                        {isHackerTheme ? "$ message.payload" : "Message"}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className={`w-full p-3 rounded-lg ${
                          isHackerTheme 
                            ? "bg-black text-green-400 border border-green-500/30 focus:border-green-400 font-mono" 
                            : "border border-gray-300 focus:border-fb-blue focus:ring-fb-blue text-gray-900"
                        } transition-colors`}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={formSubmitted}
                      className={`w-full bg-green-900/30 hover:bg-green-800/40 text-green-400 font-medium py-3 px-6 rounded-md transition-colors border border-green-500 font-mono ${
                        isHackerTheme ? "mt-4" : ""
                      }`}
                    >
                      {formSubmitted ? "$ transmitting..." : "$ execute_transmission"}
                      <span className="ml-1 animate-pulse">▌</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: showSocial ? 1 : 0, x: showSocial ? 0 : 50 }}
              transition={{ duration: 0.6 }}
              className={isHackerTheme ? "relative" : ""}
            >
              {isHackerTheme && (
                <div className="absolute -right-5 -top-5 w-full h-full border border-green-500/30"></div>
              )}

              <div className={`${isHackerTheme ? "p-5 bg-black/80 border border-green-500/30" : ""}`}>
                <h3 className={`text-xl font-semibold mb-6 ${
                  isHackerTheme ? "text-green-400 font-mono" : "text-fb-black"
                }`}>
                  {isHackerTheme ? "$ connect --social" : "Connect With Me"}
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 rounded-lg transition-all ${
                        isHackerTheme 
                          ? "border border-green-500/30 hover:border-green-400 bg-black/60" 
                          : `${link.hoverBg} hover:shadow-md`
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSocialClick(link.name)}
                    >
                      <span className="text-2xl mr-4">{link.icon}</span>
                      <div>
                        <h4 className={isHackerTheme ? "text-green-400 font-mono" : link.color}>
                          {link.name}
                        </h4>
                        {isHackerTheme && (
                          <p className="text-green-300/70 text-sm font-mono">
                            $ {link.command}
                          </p>
                        )}
                      </div>
                      {isHackerTheme && (
                        <span className="ml-auto text-green-400 font-mono text-sm">↵</span>
                      )}
                    </motion.a>
                  ))}
                </div>

                {isHackerTheme && (
                  <div className="mt-8 p-4 border border-green-500/30 rounded-lg bg-black/60">
                    <p className="text-green-400 font-mono text-sm">
                      $ echo $LOCATION<br/>
                      <span className="text-green-300/80">"Bangalore, India 🇮🇳"</span>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
      
      {/* CSS for effects - only applied in hacker theme */}
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
            content: '$ establish_connection';
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
    </Section>
  );
};

export default Contact;
