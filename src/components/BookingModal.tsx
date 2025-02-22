import React, { useState } from 'react';
import { X } from 'lucide-react';
import Swal from 'sweetalert2';
import emailjs from "emailjs-com";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [hallType, setHallType] = useState('');
  const [catering, setCatering] = useState('without'); // Default: Without Catering
  const [cateringType, setCateringType] = useState(''); // State for catering type
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // Store user email input
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [decoration, setDecoration] = useState('none'); // Default: No Decoration

  if (!isOpen) return null;

  // Hall pricing based on catering selection
  const halls = {
    small: {
      name: 'Mini Hall',
      basePrice: 7000,
      capacity: '100-150 guests',
      description: 'Perfect for intimate gatherings and celebrations'
    },
    grand: {
      name: 'Big Hall',
      basePrice: 15000,
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

  const sendOtp = () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email before requesting an OTP.",
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
    setGeneratedOtp(otpCode);

    // EmailJS service details for OTP
    const serviceId = "service_v6ncbeq";  // Replace with your EmailJS Service ID
    const templateId = "template_lmkkolo"; // Replace with your EmailJS Template ID for OTP
    const userId = "IxrMx0MS4zfCx0rkB"; // Replace with your EmailJS Public Key

    const templateParams = {
      user_email: email, // Use email instead of userEmail (ensuring consistency)
      otp_code: otpCode, // Pass generated OTP
    };

    setIsLoading(true); // Show loading state before sending

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("OTP sent successfully:", response);

        Swal.fire({
          icon: "success",
          title: "OTP Sent!",
          text: `An OTP has been sent to ${email}. Please check your inbox.`,
          showConfirmButton: true,
          confirmButtonColor: "#3085d6",
        });

        setIsOtpSent(true);
      })
      .catch((error) => {
        console.error("OTP sending error:", error);

        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to send OTP. Please try again later.",
          showConfirmButton: true,
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => {
        setIsLoading(false); // Hide loading state after the request completes
      });
  };

  const verifyOtp = () => {
    setIsVerifyingOtp(true);
    if (otp === generatedOtp) {
      // If OTP is correct, proceed to submit the booking
      handleSubmit();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid OTP!',
        text: 'The OTP you entered is incorrect. Please try again.',
        showConfirmButton: true,
        confirmButtonColor: '#d33'
      });
      setIsVerifyingOtp(false);
    }
  };

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

    // EmailJS service details for booking confirmation
    const serviceId = "service_e2eyjg3";  // Replace with your EmailJS Service ID
    const templateId = "template_3q7auok"; // Replace with your EmailJS Template ID for booking confirmation
    const userId = "IxrMx0MS4zfCx0rkB"; // Replace with your EmailJS Public Key

    // Prepare email parameters for booking confirmation
    const emailParams = {
      to_email: "itsdevilkk@gmail.com", // Your email address to receive the booking details
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      event_type: eventType,
      event_date: date,
      hall_name: halls[hallType].name,
      catering_option: catering === 'with' ? (cateringType === 'veg' ? 'Veg Thali (₹200/person)' : 'Non-Veg Thali (₹300/person)') : 'Without Catering',
      number_of_guests: guests,
      decoration_option: decoration === 'none' ? 'No Decoration' : (decoration === 'basic' ? 'Basic Decoration' : 'Premium Decoration')
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, emailParams, userId)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Booking Submitted!',
          text: 'Thank you for choosing AnuShaam Mangal Karayalay! Our team will contact you shortly.',
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

  // Calculate hall price based on catering type
  const calculateHallPrice = (hallKey: string) => {
    let price = 0;

    if (catering === 'with') {
      if (cateringType === 'veg') {
        price = hallKey === 'small' ? 37000 : 115000; // Mini Hall: 37000, Big Hall: 100000
      } else if (cateringType === 'non-veg') {
        price = hallKey === 'small' ? 52000 : 165000; // Mini Hall: 45000, Big Hall: 150000
      }
    } else {
      price = hallKey === 'small' ? halls.small.basePrice : halls.grand.basePrice;
    }

    return price;
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
            <span className="ml-2">Processing...</span>
          </div>
        ) : isOtpSent ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP *</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter the OTP sent to your email"
                required
              />
              <button
                className="mt-2 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-all duration-300"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </div>
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
                      ₹{calculateHallPrice(key).toLocaleString()}
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
                  onClick={() => {
                    setCatering('with');
                    setCateringType(''); // Reset catering type when switching to with catering
                  }}
                >
                  With Catering
                </button>
                <button
                  className={`w-full py-2 border rounded-lg text-center ${
                    catering === 'without' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => {
                    setCatering('without');
                    setCateringType(''); // Reset catering type when switching to without catering
                  }}
                >
                  Without Catering
                </button>
              </div>
              {catering === 'with' && (
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-900 mb-2">Select Catering Type *</h4>
                  <div className="flex gap-4">
                    <button
                      className={`w-full py-2 border rounded-lg text-center ${
                        cateringType === 'veg' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                      }`}
                      onClick={() => setCateringType('veg')}
                    >
                      Veg Thali (₹200/person)
                    </button>
                    <button
                      className={`w-full py-2 border rounded-lg text-center ${
                        cateringType === 'non-veg' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                      }`}
                      onClick={() => setCateringType('non-veg')}
                    >
                      Non-Veg Thali (₹300/person)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Decoration Option */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Decoration Option *</h3>
              <div className="flex gap-4">
                <button
                  className={`w-full py-2 border rounded-lg text-center ${
                    decoration === 'basic' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => setDecoration('basic')}
                >
                  Basic Decoration
                </button>
                <button
                  className={`w-full py-2 border rounded-lg text-center ${
                    decoration === 'premium' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => setDecoration('premium')}
                >
                  Premium Decoration
                </button>
                <button
                  className={`w-full py-2 border rounded-lg text-center ${
                    decoration === 'none' ? 'bg-amber-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => setDecoration('none')}
                >
                  No Decoration
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

            {/* Send OTP Button */}
            <button
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all duration-300"
              onClick={sendOtp}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;