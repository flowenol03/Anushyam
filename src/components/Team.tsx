import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Event Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "15+ years of experience in luxury event planning",
    },
    {
      name: "Michael Chen",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Michelin-starred culinary expert specializing in fusion cuisine",
    },
    {
      name: "Emma Rodriguez",
      role: "Decor Specialist",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Award-winning designer with an eye for elegant aesthetics",
    },
    {
      name: "James Wilson",
      role: "Client Relations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dedicated to ensuring every client receives VIP treatment",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title Animation */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-amber-500 mb-16 tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Meet Our Team
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative overflow-hidden rounded-xl shadow-xl bg-gray-800 border border-gray-700 hover:shadow-2xl transition-shadow duration-500 transform perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1.5, -1.5, 0],
                transition: { duration: 0.5 },
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden rounded-t-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-semibold text-amber-500 drop-shadow-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white text-lg font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              </div>

              {/* Name and Role Under Image */}
              <div className="p-6 bg-gray-900 rounded-b-xl text-center">
                <motion.h3
                  className="text-xl font-semibold text-white mb-1 transition-colors duration-300"
                  whileHover={{ color: "#ffbe0b" }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-gray-400">{member.role}</p>
              </div>

              {/* Neon Glow Effect on Hover */}
              <div className="absolute inset-0 border-4 border-transparent rounded-xl transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-neon"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
