'use client'
import { useEffect, useState } from 'react';

const PartnersCarousel = () => {
  const [partners] = useState([
    '/logos/logo-1.jpg',
    '/logos/logo-2.jpg',
    '/logos/logo-3.jpg',
    '/logos/logo-4.jpg',
    '/logos/logo-5.jpg',
    '/logos/logo-6.jpg',
    '/logos/logo-7.jpg',
    '/logos/logo-8.jpg',
    '/logos/logo-9.jpg',
    '/logos/logo-10.jpg'
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % partners.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-green-900 dark:text-green-300 text-xl font-semibold text-center mb-8">
          Our Trusted Partners
        </h3>

        <div 
          className="relative h-32">
          <div
            className="flex absolute left-0 top-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 20}%)` }}
          >
            {duplicatedPartners.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-[20%] h-32 p-4"
              >
                <img 
                  src={logo} 
                  alt="Partner logo" 
                  className="max-h-16 w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;