import React, { useState } from 'react';
import { FaBars, FaBell, FaCommentDots, FaChevronDown } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const messageItems = [
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'Vanessa Tucker',
      message: 'Nam pretium turpis et arcu. Duis arcu tortor.',
      time: '15m ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'William Harris',
      message: 'Curabitur ligula sapien euismod vitae.',
      time: '2h ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'Christina Mason',
      message: 'Pellentesque auctor neque nec urna.',
      time: '4h ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      name: 'Sharon Lessman',
      message: 'Aenean tellus metus, bibendum sed, posuere ac, mattis non.',
      time: '5h ago',
    },
  ];

  const handleDropdownToggle = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Close dropdown if it's already open
    } else {
      setActiveDropdown(dropdownName); // Open selected dropdown and close others
    }
  };

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <button className="text-gray-700 text-2xl">
          <FaBars />
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <button
            className="text-gray-700 text-xl"
            onClick={() => handleDropdownToggle('messages')}
          >
            <FaCommentDots />
          </button>
          {activeDropdown === 'messages' && (
            <DropdownMenu title="Messages" items={messageItems} />
          )}
        </div>

        <div className="relative">
          <button
            className="text-gray-700 text-xl"
            onClick={() => handleDropdownToggle('notifications')}
          >
            <FaBell />
          </button>
          {activeDropdown === 'notifications' && (
            <DropdownMenu title="Notifications" items={messageItems} />
          )}
        </div>

        <div className="relative flex items-center space-x-2 cursor-pointer" onClick={() => handleDropdownToggle('profile')}>
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10" />
          <span className="text-gray-700">Username</span>
          <FaChevronDown className="text-gray-700" />
          {activeDropdown === 'profile' && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
