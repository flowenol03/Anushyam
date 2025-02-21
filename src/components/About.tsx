import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Home className="h-10 w-10 text-yellow-400" />,
      title: 'Spacious & Elegant',
      description: 'A grand and beautifully designed venue to make your special moments unforgettable.'
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-400" />,
      title: 'Guest Comfort',
      description: 'Well-equipped with modern amenities to ensure a comfortable and enjoyable experience for all guests.'
    },
    {
      icon: <Star className="h-10 w-10 text-yellow-400" />,
      title: 'Exceptional Services',
      description: 'Dedicated staff and excellent hospitality to make your events smooth and memorable.'
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 
                   text-transparent bg-clip-text animate-pulse"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 3s infinite alternate"
              }}
            >
              Anushaam Mangal Karyalay
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A premier venue designed for grand celebrations, Anushaam Mangal Karyalay offers a
            perfect blend of tradition and modernity. Whether it's a wedding, reception, or any 
            special occasion, we ensure a delightful experience with impeccable hospitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
              transform hover:-translate-y-3 overflow-hidden border border-gray-700 hover:border-yellow-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255, 204, 0, 0.4)",
              }}
            >
              <motion.div
                className="text-yellow-400 mb-4 flex items-center justify-center bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 
                transition-all duration-500 opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.section>
  );
};

export default About;
