import Image from 'next/image'
import React from 'react'
import ImpactMetrics from '../components/ImpactMetrics'
import projects from '../dummyFiles/projects.json'
import ProjectWidget from '../components/ProjectWidget'
import NewsletterSection from '../components/NewsLetterSection'

const Projects = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative flex justify-center h-[40vh] sm:h-[80vh] md:h-[100vh] mb-8">
              <Image
                src="/stock/couture.jpg"
                alt="Femmes Couturières"
                width={800}
                height={400}
                priority
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white font-bold">
                <p className="text-3xl sm:text-4xl md:text-5xl">Nos Projets</p>
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section className="mx-2 sm:mx-6 sm:px-4 md:px-24 md:py-2 pt-1">
            <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Nos Projets</h2>
            <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
              Découvrez nos projets en cours et nos initiatives pour un avenir meilleur.
            </p>
            <div className="">
              {projects.map((project, index) => (
                <ProjectWidget index={index} project={project} key={index}/>
                // <ProjectCard
              ))}
            </div>
          </section>
          {/* Impact Metrics Section */}
          <div className="border-b border-dashed border-green-300 dark:border-green-600 my-4"></div>
          <section className="bg-gray-200 dark:bg-gray-800 mx-2 md:mx-24 sm:px-4 md:px-2 pt-1">
            <div className="">
              <ImpactMetrics />
            </div>
          </section>
          <div className="border-b border-dashed border-green-300 dark:border-green-600 my-4 sm:my-6 md:my-8"></div>
          {/* Newsletter Section */}
          <NewsletterSection />
    </div>
  )
}

export default Projects
