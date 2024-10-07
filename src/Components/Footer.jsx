import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Muhammad Amin. All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="#" className="text-sm hover:underline">Support</a>
          <a href="#" className="text-sm hover:underline">Help Center</a>
          <a href="#" className="text-sm hover:underline">Privacy</a>
          <a href="#" className="text-sm hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
