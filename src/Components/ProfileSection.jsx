import React from 'react';

const ProfileSection = ({ title, children }) => (
  <div className="p-4">
    <h5 className="text-md font-semibold mb-2">{title}</h5>
    {children}
  </div>
);

export default ProfileSection;
