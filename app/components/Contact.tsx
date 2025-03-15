"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from "react";
import Section from "./Section";
import { trackEvent } from '../GoogleAnalytics';
import contactData from '@/data/contact.json';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverBg: string;
}

interface SocialLinkItemProps {
  link: SocialLink;
  delay: number;
}

const SocialLinkItem: React.FC<SocialLinkItemProps> = ({ link, delay }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border-2 border-blue-100 shadow-md transition-all duration-300"
        whileHover={{
          scale: 1.1,
          backgroundColor: link.hoverBg,
          borderColor: link.color,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{link.icon}</span>
      </motion.div>
      <motion.span
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {link.name}
      </motion.span>
    </motion.a>
  );
};

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  
  const { 
    heading, 
    subheading, 
    socialLinks, 
    contactInfo, 
    formLabels,
    socialHeading 
  } = contactData;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const subject = `New Message from ${name}`;
      // Create the email body with name, email, and message, each on its own line
      const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

      // Open the default email client with pre-filled mailto link
      window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setFormStatus("sent");
      
      trackEvent(
        'click',
        'contact',
        'send_message_button'
      );
      
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden py-24">
      {/* Beautiful layered background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        {/* Animated floating gradients */}
        <motion.div 
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/20 blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-blue-200/20 to-emerald-200/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)
            `
          }}
        ></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 36v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm24-24h-4v2h4v4h2v-4h4v-2h-4zm0 24h-4v2h4v4h2v-4h4v-2h-4zm0-36h-4v2h4v4h2v-4h4v-2h-4zM12 8V4H8v4H4v2h4v4h2V6h4V4H8zm0 20v-4H8v4H4v2h4v4h2v-4h4v-2h-4zm0 16v-4H8v4H4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 left-10 w-40 h-40 rounded-full border-8 border-blue-100/20 backdrop-blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-12 border-blue-100/20 backdrop-blur-sm"></div>
      </div>
    
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {formLabels.name}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {formLabels.email}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className="w-full px-4 py-3 bg-white/90 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {formLabels.message}
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/90 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-blue-500/20"
              >
                {formStatus === "sending"
                  ? formLabels.sending
                  : formStatus === "sent"
                  ? formLabels.sent
                  : formStatus === "error"
                  ? formLabels.error
                  : formLabels.submit}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-100"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {contactInfo.heading}
              </h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3 text-gray-600">
                  <span className="text-blue-500">📍</span>
                  <span>{contactInfo.address}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-500">📧</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p className="flex items-center space-x-3 text-gray-600">
                  <span className="text-blue-500">📱</span>
                  <span>{contactInfo.phone}</span>
                </p>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {socialHeading}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <SocialLinkItem key={link.name} link={link} delay={index * 0.1} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
