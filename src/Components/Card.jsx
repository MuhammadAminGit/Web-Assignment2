import React from 'react';
import { FaTruck, FaArrowDown } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
      <div className="flex justify-between items-center">
        <h5 className="text-gray-700 text-lg font-medium">Sales</h5>
        <div className="text-primary text-2xl">
          <FaTruck />
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-2 mb-4">2,382</h1>
      <div className="text-sm">
        <span className="text-red-500 flex items-center">
          <FaArrowDown className="mr-1" /> -3.65%
        </span>
        <span className="text-gray-500 ml-2">Since last week</span>
      </div>
    </div>
  );
};

export default Card;
