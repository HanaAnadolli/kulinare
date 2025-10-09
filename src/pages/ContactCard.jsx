import React from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiGlobe, 
  FiBriefcase,
  FiUserPlus
} from 'react-icons/fi';

const ContactCard = () => {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWebsite = () => {
    window.open('https://www.kulinare.com', '_blank');
  };

  const handleShowOnMap = () => {
    const address = "km 10 Magjistralja Prishtinë - Ferizaj, Graçanicë, Prishtinë, 10500, Kosovë";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/Magjistralja+Prishtin%C3%AB+-+Ferizaj+km+10+10500+Gra%C3%A7anic%C3%AB+Prishtin%C3%AB+Kosov%C3%AB/@42.5827588,21.1288494,646m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D`, '_blank');
  };

  const handleAddContact = () => {
    // Create vCard data
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Artan Sanaja
ORG:Kulinare
TITLE:CEO
TEL:+38345993366
EMAIL:artansanaja@gmail.com
EMAIL:shitja@kulinare.com
URL:https://www.kulinare.com
ADR:;;km 10 Magjistralja Prishtinë - Ferizaj, Graçanicë;Prishtinë;10500;Kosovë
END:VCARD`;

    // Create and download vCard
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'artan-sanaja.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-[#55384C] text-white">
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="text-center">
            {/* Logo */}
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center relative">
              {/* White border circle */}
              <div className="w-32 h-32 bg-white rounded-full absolute"></div>
              {/* Gold inner circle */}
              <div className="w-28 h-28 bg-[#55384C] rounded-full absolute flex items-center justify-center">
                <img 
                  src="/logo_bg.png" 
                  alt="Kulinare Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-2xl font-bold mb-2">Artan Sanaja</h1>
            <p className="text-white/80 mb-6">CEO</p>
            
            {/* Action Icons */}
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => handlePhoneCall('+38345993366')}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="Call"
              >
                <FiPhone className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => handleEmail('artansanaja@gmail.com')}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="Email"
              >
                <FiMail className="w-6 h-6" />
              </button>
              
              <button
                onClick={handleShowOnMap}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="Location"
              >
                <FiMapPin className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-md mx-auto px-6 -mt-6">
        {/* Business Description */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <p className="text-gray-700 leading-relaxed text-center">
            Pajisje të specializuara për gastronomi dhe hoteleri nga markat më të njohura botërore, me shërbim të personalizuar dhe profesional.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="space-y-0">
            {/* Personal Phone */}
            <div className="flex items-center space-x-3 py-4 border-b border-gray-100">
              <button
                onClick={() => handlePhoneCall('+38345993366')}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                title="Call Personal Phone"
              >
                <FiPhone className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Personal Phone</p>
                <button
                  onClick={() => handlePhoneCall('+38345993366')}
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  +383 45 99 33 66
                </button>
              </div>
            </div>

            {/* Personal Email */}
            <div className="flex items-center space-x-3 py-4 border-b border-gray-100">
              <button
                onClick={() => handleEmail('artansanaja@gmail.com')}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                title="Email Personal"
              >
                <FiMail className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1">
                <p className="text-sm text-gray-500">My Personal Email</p>
                <button
                  onClick={() => handleEmail('artansanaja@gmail.com')}
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  artansanaja@gmail.com
                </button>
              </div>
            </div>

            {/* Work Email */}
            <div className="flex items-center space-x-3 py-4 border-b border-gray-100">
              <button
                onClick={() => handleEmail('shitja@kulinare.com')}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                title="Email Work"
              >
                <FiMail className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1">
                <p className="text-sm text-gray-500">My Work Email</p>
                <button
                  onClick={() => handleEmail('shitja@kulinare.com')}
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  shitja@kulinare.com
                </button>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center space-x-3 py-4 border-b border-gray-100">
              <button
                onClick={handleWebsite}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                title="Visit Website"
              >
                <FiGlobe className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Website</p>
                <button
                  onClick={handleWebsite}
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  www.kulinare.com
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 py-4 border-b border-gray-100">
              <button
                onClick={handleShowOnMap}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                title="Show on Map"
              >
                <FiMapPin className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800 text-sm">
                  km 10 Magjistralja Prishtinë - Ferizaj, Graçanicë, Prishtinë, 10500, Kosovë
                </p>
                <button
                  onClick={handleShowOnMap}
                  className="text-blue-600 hover:underline text-sm mt-1"
                >
                  Show on Map
                </button>
              </div>
            </div>

            {/* Company */}
            <div className="flex items-center space-x-3 py-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <FiBriefcase className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Kulinare</p>
                <p className="text-gray-800">CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Contact Button */}
        <button
          onClick={handleAddContact}
          className="w-full bg-[#55384C] text-white py-4 rounded-lg font-semibold hover:bg-[#4A2F42] transition-colors flex items-center justify-center space-x-2"
        >
          <FiUserPlus className="w-5 h-5" />
          <span>Add Contact</span>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
