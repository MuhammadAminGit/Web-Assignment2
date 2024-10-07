import React from 'react';
import ProfileSection from './ProfileSection';

const ProfileCard = () => {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 mb-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4">
          <h5 className="text-lg font-bold mb-0">Profile Details</h5>
        </div>
        <div className="p-4 text-center">
        <div className="bg-gray-300 rounded-full mx-auto mb-2" style={{ width: '128px', height: '128px' }} />
          <h5 className="text-xl font-semibold mb-0">Christina Mason</h5>
          <div className="text-gray-500 mb-2">Lead Developer</div>
          <div className="flex justify-center space-x-2">
            <button className="bg-blue-500 text-white py-1 px-3 rounded">Follow</button>
            <button className="bg-blue-500 text-white py-1 px-3 rounded">Message</button>
          </div>
        </div>
        <hr className="my-0" />
        <ProfileSection title="Skills">
          <div className="flex flex-wrap">
            {['HTML', 'JavaScript', 'Sass', 'Angular', 'Vue', 'React', 'Redux', 'UI', 'UX'].map(skill => (
              <span key={skill} className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs mr-2 mb-2">{skill}</span>
            ))}
          </div>
        </ProfileSection>
        <hr className="my-0" />
        <ProfileSection title="About">
          <ul className="text-gray-600">
            <li>Lives in <a href="#" className="text-blue-500">San Francisco, SA</a></li>
            <li>Works at <a href="#" className="text-blue-500">GitHub</a></li>
            <li>From <a href="#" className="text-blue-500">Boston</a></li>
          </ul>
        </ProfileSection>
        <hr className="my-0" />
        <ProfileSection title="Elsewhere">
          <ul className="text-blue-500">
            {['staciehall.co', 'Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </ProfileSection>
      </div>
    </div>
  );
};

export default ProfileCard;
