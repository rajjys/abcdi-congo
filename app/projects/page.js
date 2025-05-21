// Created by: Jonathan Idy
// Date: 
import Image from 'next/image'
import React from 'react'
import ImpactMetrics from '../components/ImpactMetrics'
import projects from '../dummyFiles/projects.json' ///to be replaced with API call
import ProjectWidget from '../components/ProjectWidget'
import NewsletterSection from '../components/NewsLetterSection'
import { fetchProjectItems } from '../services/graphcms'
export const dynamic = 'force-dynamic'; // Force dynamic rendering


const Projects = async () => {
  const projectItems = await fetchProjectItems();
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative flex justify-center h-[50vh] sm:h-[80vh] md:h-[100vh] mb-8">
              <Image
                src="/stock/couture.jpg"
                alt="Femmes Couturières"
                width={800}
                height={400}
                priority
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white font-bold">
              <p className="ml-4 sm:ml-8 md:ml-12 text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: 'Eagle Horizon' }}>Nos Projets</p>
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section className="mx-2 sm:mx-6 sm:px-4 md:px-10 lg:px-24 md:py-2 pt-1">
            <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Nos Projets</h2>
            <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
              Découvrez nos projets en cours et nos initiatives pour un avenir meilleur.
            </p>
            <div className="group">
              {projectItems && projectItems.length > 0 ? (
                  projectItems.map((projectItem, index) => (
                    <ProjectWidget index={index} project={projectItem} key={index} />
                  ))
                  ) : (
                  <p className="text-gray-500 dark:text-gray-400">Aucun projet disponible pour le moment.</p>
                  )}
            </div>
          </section>
          {/* Impact Metrics Section */}
          <section className="bg-gray-200 dark:bg-gray-800 sm:px-4 sm:px-6 md:px-12 lg:px-24 pt-1">
            <div className="">
              <ImpactMetrics />
            </div>
          </section>
          {/* Newsletter Section */}
          <NewsletterSection />
    </div>
  )
}

export default Projects
