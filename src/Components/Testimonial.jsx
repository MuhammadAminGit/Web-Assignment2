import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Testimonial = ({ name, position, quote, image, rating }) => {
  return (
    <div className="flex items-center justify-between relative p-8 bg-white shadow-lg border-l-4 border-red-500 transition-transform duration-500 ease-in-out">
      {/* Testimonial Content */}
      <div className="flex-1 pr-8">
        <p className="text-2xl text-gray-700 italic">
          <span className="text-4xl">“</span>{quote}<span className="text-4xl">”</span>
        </p>
        <div className="mt-4">
          {Array.from({ length: rating }).map((_, i) => (
            <AiFillStar key={i} className="inline text-yellow-500" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <AiOutlineStar key={i} className="inline text-gray-300" />
          ))}
        </div>
        <h3 className="font-semibold text-xl mt-4">{name}</h3>
        <h4 className="text-gray-500">{position}</h4>
      </div>

      {/* Placeholder Image */}
      <div className="w-32 h-32 ml-8 rounded-full bg-gray-300 flex-shrink-0">
        <img src={image} className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
};

export default Testimonial;
