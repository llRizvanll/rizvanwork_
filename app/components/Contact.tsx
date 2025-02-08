"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rizvanhawaldar",
      icon: "🔗",
    },
    { name: "GitHub", url: "https://github.com/llrizvanll", icon: "💻" },
    { name: "Twitter", url: "https://twitter.com/rizvanhawaldar", icon: "🐦" },
  ];
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
      window.location.href = `mailto:rizvan.g.h@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setFormStatus("sent");
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-fb-blue/5 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-fb-black">
            Let's Connect
          </h2>
          <p className="text-fb-grey">
            Have a project in mind? Let's talk about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-fb-black mb-2"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-fb-grey/20 rounded-lg focus:ring-2 focus:ring-fb-blue focus:outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-fb-black mb-2"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className="w-full px-4 py-3 bg-white border border-fb-grey/20 rounded-lg focus:ring-2 focus:ring-fb-blue focus:outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-fb-black mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white border border-fb-grey/20 rounded-lg focus:ring-2 focus:ring-fb-blue focus:outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full bg-fb-blue hover:bg-fb-blue-light text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : formStatus === "sent"
                  ? "Message Sent!"
                  : formStatus === "error"
                  ? "Error! Try Again"
                  : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-fb-black">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3 text-fb-grey">
                  <span className="text-fb-blue">📍</span>
                  <span>
                    Krishnageet Shelters Apartment, Bangalore-560016, India
                  </span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-fb-blue">📧</span>
                  <a
                    href="mailto:rizvan.g.h@gmail.com"
                    className="text-fb-grey hover:text-fb-blue transition-colors"
                  >
                    rizvan.g.h@gmail.com
                  </a>
                </p>
                <p className="flex items-center space-x-3 text-fb-grey">
                  <span className="text-fb-blue">📱</span>
                  <span>+91-9538943603</span>
                </p>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-fb-black">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-fb-blue/10 p-3 rounded-full hover:bg-fb-blue/20 transition-colors text-fb-blue"
                    >
                      <span className="text-2xl">{link.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
