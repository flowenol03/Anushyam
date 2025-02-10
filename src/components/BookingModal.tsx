import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [hallType, setHallType] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');

  if (!isOpen) return null;

  const halls = {
    small: {
      name: 'Intimate Hall',
      price: '₹1,50,000',
      capacity: '100-150 guests',
      description: 'Perfect for intimate gatherings and celebrations'
    },
    grand: {
      name: 'Grand Ballroom',
      price: '₹3,50,000',
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
      alert('Please fill in all required fields');
      return;
    }
    
    alert('Thank you for your booking request! Our team will contact you shortly.');
    onClose();
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
                    hallType === key
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                  onClick={() => setHallType(key)}
                >
                  <h3 className="font-semibold text-lg">{hall.name}</h3>
                  <p className="text-amber-600 font-medium">{hall.price}</p>
                  <p className="text-sm text-gray-600">{hall.capacity}</p>
                  <p className="text-sm text-gray-500 mt-2">{hall.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Date *
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = 'text'}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                min={new Date().toISOString().split('T')[0]}
                placeholder="Select date"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests *
              </label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter number of guests"
                min="1"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-3 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300"
            onClick={handleSubmit}
          >
            Confirm Booking
          </button>
          
          <p className="text-sm text-gray-500 text-center">
            * Required fields
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;