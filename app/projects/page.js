// Created by: Jonathan Idy
// Date: 
import Image from "next/image";
import React from "react";
import ImpactMetrics from "../components/ImpactMetrics";
import ProjectWidget from "../components/ProjectWidget";
import NewsletterSection from "../components/NewsLetterSection";
import { fetchProjectItems } from "../services/graphcms";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";

export const dynamic = "force-dynamic"; // Force dynamic rendering

const Projects = async () => {
  let projectItems = [];
  try {
    projectItems = await fetchProjectItems();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* JSON-LD Schema */}
      <SchemaMarkup schema={gallerySchema} />

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative flex justify-center h-[50vh] sm:h-[70vh] md:h-[90vh] mb-8">
          <Image
            src="/stock/couture.jpg"
            alt="Femmes Couturières"
            width={1600}
            height={800}
            priority
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute bottom-10 left-6 sm:left-12 md:left-16 text-white font-bold">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl tracking-wide drop-shadow-lg"
              style={{ fontFamily: "Eagle Horizon" }}
            >
              Nos Projets
            </h1>
            <p className="mt-2 text-sm sm:text-lg md:text-xl max-w-xl">
              Découvrez nos actions pour un avenir durable et solidaire.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mx-3 sm:mx-6 sm:px-4 md:px-10 lg:px-24 py-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 mb-4">
          Nos Projets
        </h2>
        <p className="text-gray-600 dark:text-gray-200 mb-8 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
          Nous travaillons sur des projets concrets qui visent à améliorer le
          quotidien de notre communauté, de l’agriculture durable à la santé
          publique.
        </p>

        <div className="space-y-8">
          {projectItems && projectItems.length > 0 ? (
            projectItems.map((projectItem, index) => (
              <ProjectWidget index={index} project={projectItem} key={index} />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Aucun projet disponible pour le moment.
            </p>
          )}
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="bg-gray-200 dark:bg-gray-800 sm:px-4 md:px-12 lg:px-24 py-8">
        <ImpactMetrics />
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Projects;

export async function generateMetadata() {
  const title =
    "Découvrez nos projets en cours et nos initiatives | ABCDI";
  const description =
    "ABCDI - Oeuvre dans la Promotion de la Sécurité Alimentaire, la Santé, le Développement Communautaire et l'Accompagnement Social.";
  const url = "https://abcdi.org/projects";
  const siteName = "ABCDI";
  const card = "summary_large_image";
  const previewImage = "https://abcdi.org/stock/potatoes1.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [{ url: previewImage }],
    },
    twitter: {
      card,
      title,
      description,
      images: [{ url: previewImage }],
    },
  };
}

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Nos Projets",
  description: "Notre Participation dans notre société",
  image: [
    {
      "@type": "ImageObject",
      contentUrl: "https://abcdi.org/stock/champs.jpg",
      name: "Projet Maman Autonome",
      description:
        "Vise à autonomiser les femmes entreprenantes à travers la formation et le soutien financier",
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://abcdi.org/stock/potatoes1.jpg",
      name: "Initiative agricole chakula",
      description:
        "Vise à augmenter la production alimentaire locale des communautés locales",
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://abcdi.org/stock/kids-health.jpg",
      name: "Santé Communautaire des Enfants",
      description:
        "Favorise l'accès aux soins pour les enfants défavorisés",
    },
  ],
};
