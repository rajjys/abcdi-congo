'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Sample images with text
  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/1920/1080?random=1',
      title: 'First Slide',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      image: 'https://picsum.photos/1920/1080?random=2',
      title: 'Second Slide',
      description: 'Praesentium magnam consectetur vel in deserunt.'
    },
    {
      id: 3,
      image: 'https://picsum.photos/1920/1080?random=3',
      title: 'Third Slide',
      description: 'Aspernatur laborum voluptate consequatur iure.'
    },
    {
      id: 4,
      image: 'https://picsum.photos/1920/1080?random=4',
      title: 'Fourth Slide',
      description: 'Repellat animi sequi excepturi cumque.'
    },
    {
      id: 5,
      image: 'https://picsum.photos/1920/1080?random=5',
      title: 'Fifth Slide',
      description: 'Voluptatum deleniti atque corrupti quos.'
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0); // Reset progress when changing slide
  }, [slides.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0); // Reset progress when changing slide
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 3000);
    return () => clearTimeout(timer);
  }, [activeIndex, nextSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / 4000 * 50); // Update every 50ms for smooth animation
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            />
          </div>
        </div>
      ))}
      {/* Text Overlay */}
      <div className="absolute  top-1/7 right-0 left-0  p-4 md:p-6 text-white text-3xl">
            <div className="flex flex-row justify-around md:justify-center items-center">
                <div className='relative w-24 h-24 md:w-40 md:h-40'>
                    <Image 
                        src="/logo_abcdi.png"
                        fill
                        alt="ABCDI Logo"
                        className="bg-white/80 rounded-full mx-2 md:mx-12"
                    />
                </div>
                
                <div className='font-mono text-xl md:text-6xl font-bold mx-4 md:mx-12'>
                    <span className='text-blue-500 pr-1 md:pr-2'>A</span>
                    <span className='text-green-600 pr-1 md:pr-2'>B</span>
                    <span className='text-red-700 pr-1 md:pr-2'>C</span>
                    <span className='text-yellow-500 pr-1 md:pr-2'>D</span>
                    <span className='text-blue-500'>I</span>
                    <span className='text-green-300 pr-1 md:px-2'> - </span>
                    <span className='underline decoration-green-300'>asbl</span>
                </div>
            </div>
            
            <div className="font-mono font-bold mb-8 max-w-7xl mx-auto text-center">
                    <p className="text-xs md:text-xl mb-6">
                        <span className='text-blue-500 text-sm md:text-lg'>A</span>ction pour le 
                        <span className='text-green-600 text-sm md:text-lg'> B</span>ien-etre et la
                        <span className='text-red-700 text-sm md:text-lg'> C</span>ommunautaire et le 
                        <span className='text-yellow-500 text-sm md:text-lg'> D</span>eveloppement 
                        <span className='text-blue-500 text-sm md:text-lg'> I</span>ntergral
                    </p>
            </div>    
            <div className="bottom-1/3 max-w-7xl mx-auto text-center">
                <p className='mt-12 md:mt-24 md:mt-12 text-xs sm:text-sm md:text-2xl bg-black/50 backdrop-blur rounded-full p-2 md:p-4 text-green-400'>
                    Promotion de l'Agriculture 
                    <span className='px-2 text-white'>|</span> 
                    Securite Alimentaire 
                    <span className='px-2 text-white'>|</span> Sante Publique
                    <span className='px-2 text-white'>|</span> Entrepreneuriat 
                </p>
            </div>
      </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 z-20 bg-gray-200">
          <div 
            className="h-full bg-green-400 transition-all duration-4000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>


        {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}