import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif text-center text-amber-500 mb-12 drop-shadow-lg"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              { icon: Phone, title: 'Call Us', detail: '+91 123457890' },
              { icon: Mail, title: 'Email Us', detail: 'info@luxuryhaven.com' },
              { icon: MapPin, title: 'Visit Us', detail: '123 Luxury Avenue, Mumbai, India' }
            ].map(({ icon: Icon, title, detail }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/60 backdrop-blur-md shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
              >
                <Icon className="text-amber-500 animate-pulse" size={28} />
                <div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="text-gray-300">{detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form with Glassmorphism */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700"
          >
            {['Your Name', 'Your Email', 'Your Message'].map((placeholder, index) => (
              <motion.div
                key={index}
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {index === 2 ? (
                  <textarea
                    rows={4}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400 transition-all"
                  />
                ) : (
                  <input
                    type={index === 1 ? "email" : "text"}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400 transition-all"
                  />
                )}
              </motion.div>
            ))}

            {/* Animated Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300 shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Animated Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
            Website Designed & Developed by{" "}
            <a
              href="https://flowenolportfolio.netlify.app/" // Replace with your actual portfolio URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300 underline"
            >
              Prathamesh Khandekar
            </a>
          </p>

        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} AnuShyam. All rights reserved.
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
