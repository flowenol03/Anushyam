import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] 
            bg-cover bg-center transform scale-110 animate-slow-pan"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-[url('/honeycomb.svg')] bg-repeat opacity-20 animate-pulse" />
        </div>
      </div>

      {/* Blinking Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-80 animate-blink"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white drop-shadow-[0_0_10px_white] mb-3 animate-zoom-in">
          Welcome to{" "}
          <span className="text-amber-500 animate-text-glow">AnuShyam</span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-amber-500 
  [text-shadow:0_0_15px_white] mb-6">
          Mangal Karyalay
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl animate-fade-in-delayed">
          Where elegance meets perfection in every celebration
        </p>
        <a
          href="#venues"
          className="group flex flex-col items-center text-amber-500 hover:text-amber-400 transition-colors duration-300 
            relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-0 after:h-1 after:bg-amber-500 after:transition-all after:duration-500 
            hover:after:w-full hover:after:left-0"
        >
          <span className="text-lg mb-2">Explore More</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }

          .animate-blink {
            animation: blink infinite alternate ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
