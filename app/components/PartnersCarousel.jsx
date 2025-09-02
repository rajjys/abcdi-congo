"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  { name: "FAO", logo: "/logos/fao.png" },
  { name: "UNICEF", logo: "/logos/unicef.png" },
  { name: "WFP", logo: "/logos/wfp.png" },
  { name: "USAID", logo: "/logos/usaid.png" },
  { name: "OXFAM", logo: "/logos/oxfam.png" },
];

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 p-2 rounded-full bg-white shadow-md dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-5 w-5 text-green-700 dark:text-green-300" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="min-w-full flex justify-center items-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 md:h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 p-2 rounded-full bg-white shadow-md dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            aria-label="Suivant"
          >
            <ChevronRight className="h-5 w-5 text-green-700 dark:text-green-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
