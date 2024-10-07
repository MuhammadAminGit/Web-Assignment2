import React, { useState } from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: 'Saul Goodman',
    position: 'CEO & Founder',
    quote:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam.',
    image: 'assets/img/testimonials/testimonials-1.jpg',
    rating: 5,
  },
  {
    name: 'Sara Wilsson',
    position: 'Designer',
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis.',
    image: 'assets/img/testimonials/testimonials-2.jpg',
    rating: 5,
  },
  {
    name: 'Jena Karlis',
    position: 'Store Owner',
    quote:
      'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim.',
    image: 'assets/img/testimonials/testimonials-3.jpg',
    rating: 4,
  },
  {
    name: 'John Larson',
    position: 'Entrepreneur',
    quote:
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim.',
    image: 'assets/img/testimonials/testimonials-4.jpg',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials section py-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">TESTIMONIALS</h2>
        <p className="text-lg text-gray-600">What Are They <span className="font-semibold">Saying About Us</span></p>
      </div>

      <div className="container mx-auto overflow-hidden">
        {/* Testimonial Slider */}
        <div className="relative flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${activeIndex === index ? 'bg-red-500' : 'bg-gray-300'}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
