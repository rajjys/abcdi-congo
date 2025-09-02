import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import HeroSection from "./components/HeroSection";
import PartnersCarousel from "./components/PartnersCarousel";
import NewsletterSection from "./components/NewsLetterSection";
import Link from "next/link";
import { fetchProjectItems } from "./services/graphcms";
import ProjectCard from "./components/ProjectCard";

export default async function LandingPage() {
  // Fetch data from the GraphQL API 
  const projectItems = await fetchProjectItems();
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Qui Sommes Nous Section */}
      <section className="flex flex-col sm:flex-row justify-center items-stretch lg:px-24 mt-4 md:mt-8 bg-white/50 dark:bg-gray-900/50">
        {/* Image Container */}
        <div className="w-full sm:basis-1/2 flex items-stretch">
          <Image
            src="/stock/community.jpg"
            alt="Communauté"
            width={580}
            height={400}
            className="rounded-t-md sm:rounded-sm object-cover w-full h-full"
          />
        </div>

        {/* About Section */}
        <div className="w-full sm:basis-1/2 flex flex-col justify-center p-4 h-full md:ml-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 dark:text-green-300 font-bold font-mono my-2">
            Qui Sommes Nous ?
          </h2>
          <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md">
            ABCDI - asbl est une organisation à but non lucratif qui œuvre pour
            le bien-être de la communauté et le développement durable.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-2 text-xs sm:text-sm md:text-lg p-2 shadow-md">
            Notre mission est de promouvoir l&apos;agriculture durable, la
            sécurité alimentaire, la santé publique et l&apos;entrepreneuriat
            au sein de notre communauté.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-2 text-xs sm:text-sm md:text-lg italic">
            Nos objectifs incluent l&apos;accompagnement des populations
            vulnérables, la cohésion sociale, l&apos;éducation des enfants sans
            abri et la sensibilisation aux bonnes pratiques agricoles et
            sanitaires.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-green-700 text-white text-sm md:text-base rounded-lg shadow hover:bg-green-800 transition-colors w-fit"
          >
            En savoir plus
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 dark:text-green-300 mb-6">
            Nos Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-sm md:text-base max-w-3xl mx-auto">
            Découvrez nos actions concrètes dans l’agriculture durable, la
            santé, l’éducation et le bien-être social.
          </p>

          {projectItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectItems.slice(0, 3).map((projectItem, index) => ( <ProjectCard key={index} projectItem={projectItem} />))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Aucun projet disponible pour le moment.
            </p>
          )}

          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-colors dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 font-medium"
          >
            Explorer tous nos projets
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 dark:text-green-300 mb-10">
            Nos Partenaires
          </h2>
          <PartnersCarousel />
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
}
