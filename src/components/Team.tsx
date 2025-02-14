import React from "react";
import { motion } from "framer-motion";
import { Home, Users, Utensils, CalendarCheck } from "lucide-react";

const Speciality = () => {
  const specialities = [
    {
      icon: <Home className="h-10 w-10 text-amber-500" />,
      title: "Spacious Venue",
      description: "A beautifully designed hall to accommodate all your guests comfortably.",
    },
    {
      icon: <Users className="h-10 w-10 text-amber-500" />,
      title: "Guest Hospitality",
      description: "Top-notch service to ensure a memorable experience for your guests.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-amber-500" />,
      title: "Delicious Catering",
      description: "A variety of delectable dishes tailored to your event’s needs.",
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-amber-500" />,
      title: "Event Planning Assistance",
      description: "Seamless coordination to make your special day hassle-free.",
    },
  ];

  return (
    <motion.section
      id="speciality"
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-amber-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience excellence with Anushyam Mangal Karayalay
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {specialities.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 
              transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(255, 193, 7, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Background Glow Animation */}
              <motion.div
                className="absolute inset-0 bg-amber-500 opacity-10 blur-3xl scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>

              {/* Icon Animation */}
              <motion.div
                className="mb-4 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>

              {/* Title Animation */}
              <motion.h3
                className="text-xl font-semibold text-amber-400 mb-2 text-center"
                whileHover={{ scale: 1.1 }}
              >
                {item.title}
              </motion.h3>

              {/* Description Animation */}
              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Speciality;
