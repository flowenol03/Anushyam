import React, { useState } from 'react';
import { X } from 'lucide-react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [hallType, setHallType] = useState('');
  const [catering, setCatering] = useState('without'); // Default: Without Catering
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  if (!isOpen) return null;

  // Hall pricing based on catering selection
  const halls = {
    small: {
      name: 'Intimate Hall',
      basePrice: 150000,
      cateringPrice: 200000, // With catering
      capacity: '100-150 guests',
      description: 'Perfect for intimate gatherings and celebrations'
    },
    grand: {
      name: 'Grand Ballroom',
      basePrice: 350000,
      cateringPrice: 500000, // With catering
      capacity: '300-500 guests',
      description: 'Ideal for grand weddings and large-scale events'
    }
  };

  const eventTypes = [
    'Wedding',
    'Reception',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Other'
  ];

  const handleSubmit = () => {
    if (!name || !email || !phone || !date || !hallType || !guests || !eventType) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    // Set loading state to true
    setIsLoading(true);

    // EmailJS service details
    const serviceId = "service_4rnu2vj";  // Replace with your EmailJS Service ID
    const templateId = "template_2dah8ll"; // Replace with your EmailJS Template ID
    const userId = "MMMJPdnp2NI9WaaFR"; // Replace with your EmailJS Public Key

    // Prepare email parameters
    const emailParams = {
      to_email: "itsdevilkk@gmail.com", // Your email address to receive the booking details
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      event_type: eventType,
      event_date: date,
      hall_name: halls[hallType].name,
      catering_option: catering === 'with' ? 'With Catering' : 'Without Catering',
      number_of_guests: guests
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, emailParams, userId)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Booking Submitted!',
          text: 'Thank you for your booking request! Our team will contact you shortly.',
          showConfirmButton: true,
          confirmButtonColor: '#3085d6'
        }).then(() => {
          onClose();
        });
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Email Failed!',
          text: `Something went wrong while sending the booking details. Error: ${error.text}`,
          showConfirmButton: true,
          confirmButtonColor: '#d33'
        });
      })
      .finally(() => {
        // Set loading state to false after the email is sent
        setIsLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative animate-fade-scale max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-serif text-gray-900 mb-6">Book Your Event</h2>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader"></div> {/* Add your loading spinner here */}
            <span className="ml-2">Sending your booking...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type *
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Hall Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select Hall *</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(halls).map(([key, hall]) => (
                  <div
                    key={key}
                    className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      hallType === key ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-amber-300'
                    }`}
                    onClick={() => setHallType(key)}
                  >
                    <h3 className="font-semibold text-lg">{hall.name}</h3>
                    <p className="text-amber-600 font-medium">
                      {catering === 'with' ? `₹${hall.cateringPrice.toLocaleString()}` : `₹${hall.basePrice.toLocaleString()}`}
                    </p>
                    <p className="text-sm text-gray-600">{hall.capacity}</p>
                    <p className="text-sm text-gray-500 mt-2">{hall.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Catering Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Catering Option *</h3>
              <div className="flex gap-4">
                <button
                  className={`w-full py-2 border rounded-lg text-center ${
                    catering === 'with' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => setCatering('with')}
                >
                  With Catering
                </button>
                <button
                  className={`w-full py-2 border rounded-lg text-center ${
                    catering === 'without' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => setCatering('without')}
                >
                  Without Catering
                </button>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Date *</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests *</label>
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all duration-300"
              onClick={handleSubmit}
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;