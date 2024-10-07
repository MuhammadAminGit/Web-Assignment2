import React from 'react';

const DropdownMenu = ({ title, items }) => {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-0 z-20">
      <div className="p-4 font-semibold border-b">
        <div className="relative">{title}</div>
      </div>
      <div className="divide-y">
        {items.map((item, index) => (
          <a href="#" key={index} className="flex items-center px-4 py-3 hover:bg-gray-100">
            <div className="w-12">
              <img src={item.avatar} className="avatar w-10 h-10 rounded-full" alt={item.name} />
            </div>
            <div className="pl-3 w-full">
              <div className="text-dark">{item.name}</div>
              <div className="text-gray-500 text-sm mt-1">{item.message}</div>
              <div className="text-gray-400 text-xs mt-1">{item.time}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="p-2 border-t text-center">
        <a href="#" className="text-gray-600 hover:underline">Show all {title.toLowerCase()}</a>
      </div>
    </div>
  );
};

export default DropdownMenu;
