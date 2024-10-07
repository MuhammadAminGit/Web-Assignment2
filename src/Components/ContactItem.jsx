import React from 'react';

const ContactItem = ({ icon, title, description }) => {
  const IconComponent = icon; 

  return (
    <div className="info-item flex items-start space-x-4 mb-6" data-aos="fade-up" data-aos-delay="300">
      <IconComponent className="text-lg text-primary flex-shrink-0" /> {/* Render the icon */}
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
