import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Calendar } from 'lucide-react';
import BookingModal from './components/BookingModal';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About'; // Import About section
import Venues from './components/Venues';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About /> {/* Added About section here */}
        <Venues />
        <Gallery />
        <Team />
        <Contact />
      </main>

      {/* Floating Book Now Button */}
      <button
        onClick={() => setIsBookingOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 animate-pulse hover:animate-none z-50"
      >
        Book Now
      </button>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
