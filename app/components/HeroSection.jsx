'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DonateButton from './ui/DonateButton';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/stock/black-woman-farm.webp',
      title: 'Agriculture Durable',
      description: 'Nous formons et soutenons les agriculteurs pour assurer la sécurité alimentaire en RDC.'
    },
    {
      id: 2,
      image: '/stock/kids-health.jpg',
      title: 'Santé & Bien-être',
      description: 'Nous renforçons la santé communautaire et accompagnons les familles vulnérables.'
    },
    {
      id: 3,
      image: '/stock/computer-training.jpg',
      title: 'Entreprenariat',
      description: 'Nous appuyons les jeunes et les populations défavorisées dans leurs initiatives économiques.'
    },
    {
      id: 4,
      image: '/stock/community.jpg',
      title: 'Cohésion Sociale',
      description: 'Nous construisons une communauté solidaire et résiliente à travers nos projets.'
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex, nextSlide]);

  return (
    <div className="relative h-[75vh] sm:h-[90vh] md:h-[100vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10"></div>
        </div>
      ))}

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Construisons Ensemble un Avenir Durable
        </h1>
        <p className="max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 mb-8">
          ABCDI œuvre pour la sécurité alimentaire, la santé, et le développement des communautés en RDC.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <DonateButton label="Faire un Don" link="/donate" />
          <Link
            href="/projects"
            className="py-4 px-6 sm:px-8 md:px-10 text-xs sm:text-sm md:text-base font-bold rounded-md shadow-md 
            bg-green-600 text-white hover:bg-green-700 transition duration-300"
          >
            Découvrir Nos Projets
          </Link>
        </div>
      </div>
    </div>
  );
}
