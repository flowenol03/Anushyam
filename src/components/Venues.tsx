import React from "react";
import { motion } from "framer-motion";

const Venues = () => {
  const venues = [
    {
      name: "Big Hall",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "₹18,000",
      capacity: "300-500 guests",
      features: [
        "Crystal chandeliers",
        "State-of-the-art sound system",
        "Grand stage",
        "VIP lounge",
      ],
    },
    {
      name: "Mini Hall",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "₹7,000",
      capacity: "100-150 guests",
      features: [
        "Elegant décor",
        "Private dining area",
        "Customizable lighting",
        "Outdoor terrace",
      ],
    },
  ];

  return (
    <section id="venues" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-serif text-center text-amber-500 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Venues & Accommodations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              className="group relative overflow-hidden rounded-lg shadow-2xl lg:h-[500px] xl:h-[550px] bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 hover:border-amber-500 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Venue Image */}
              <div className="h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden">
                <motion.img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.h3
                  className="text-3xl font-serif text-amber-500 mb-2"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {venue.name}
                </motion.h3>
                <motion.p
                  className="text-white text-lg mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {venue.price}
                </motion.p>
                <motion.p
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {venue.capacity}
                </motion.p>

                <ul className="text-gray-300 space-y-1">
                  {venue.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Initial Overlay (Always Visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl font-serif text-amber-500">
                  {venue.name}
                </h3>
                <p className="text-white">{venue.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;