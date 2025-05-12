'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DonateButton from './ui/DonateButton';

export default function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Sample images with text
  const slides = [
    {
      id: 1,
      image: '/stock/black-woman-farm.webp',
      title: 'First Slide',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      image: '/stock/community.jpg',
      title: 'Second Slide',
      description: 'Praesentium magnam consectetur vel in deserunt.'
    },
    {
      id: 3,
      image: '/stock/computer-training.jpg',
      title: 'Third Slide',
      description: 'Aspernatur laborum voluptate consequatur iure.'
    },
    {
      id: 4,
      image: '/stock/construction.jpg',
      title: 'Fourth Slide',
      description: 'Repellat animi sequi excepturi cumque.'
    },
    {
      id: 5,
      image: '/stock/kids-health.jpg',
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
    <div className="relative flex justify-center h-[50vh] sm:h-[80vh] md:h-[100vh]">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          </div>
        </div>
      ))}
      {/* Text Overlay */}
      <div className="absolute top-1/5 right-0 left-0 bottom-0 p-4 md:p-6 text-white text-3xl">
        <div className='relative z-10 flex flex-col items-center justify-center h-full'>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-4 sm:mb-8 md:mb-12"
                style={{ fontFamily: 'Eagle Horizon' }}
          >
            Contruisons Ensemble
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl text-center mb-4 sm:mb-8 md:mb-12">
            ABCDI - ONGD
          </h2>
          <button className="">
          <DonateButton label={"Faire un Don"} link={"/donate"} />
          </button>
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