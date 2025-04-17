'use client'
import Image from 'next/image';
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
    <div className="overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Nos Partenaires</h2>
          <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
            Nous travaillons en collaboration avec divers partenaires pour maximiser notre impact.
          </p>
        <div className="relative h-32">
          <div className="flex absolute left-0 top-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 20}%)` }} >
            {duplicatedPartners.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-[20%] h-32 p-4">
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-contain h-full w-full object-contain opacity-70"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default PartnersCarousel;