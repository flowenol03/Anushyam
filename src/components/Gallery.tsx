import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Grand Wedding Reception",
      description: "A magical evening of love and celebration",
    },
    {
      url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Corporate Gala",
      description: "Elegant corporate event setup",
    },
    {
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Anniversary Celebration",
      description: "Intimate gathering with loved ones",
    },
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Engagement Party",
      description: "Beautiful beginnings in an elegant setting",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-serif text-center text-amber-500 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Memorable Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                whileHover={{ rotate: 1.5 }}
              >
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div
                  className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-serif text-amber-500 mb-2">{image.title}</h3>
                  <p className="text-white">{image.description}</p>
                </motion.div>
              </div>

              {/* Glowing Border on Hover */}
              <motion.div
                className="absolute inset-0 border-2 border-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
