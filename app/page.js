import Image from "next/image";
import MainCarousel from "./components/MainCarousel";
import ProjectCard from "./components/ProjectCard";
import ImpactMetrics from "./components/ImpactMetrics";
import PartnersCarousel from "./components/PartnersCarousel";
import NewsletterSection from "./components/NewsLetterSection";
import projects from "./dummyFiles/projects.json";


export default function Home() {
  
  return (
    <div>
      <MainCarousel />
      <div className="py-4 sm:py-6 md:py-8"></div>
      <div className="mx-2 md:mx-0 sm:px-4">
            <div className="flex flex-wrap justify-center items-center sm:px-4 md:px-8 lg:px-24">
              <div className="flex-col md:basis-1/2">
                <Image
                  src="/stock/community.jpg"
                  alt="ABCDI Logo"
                  width={580}
                  height={400}
                  className="rounded-t-md md:rounded-none"/>
              </div>
              <div className="md:basis-1/2">
                <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 dark:text-green-300 font-bold font-mono my-2 ml-2">Qui Sommes Nous ?</h2>
                <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
                  ABCDI - asbl est une organisation à but non lucratif qui œuvre pour le bien-être de la communauté et le développement durable.
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2 text-xs sm:text-sm md:text-lg p-2 shadow-md">
                  Notre mission est de promouvoir l'agriculture durable, la sécurité alimentaire, la santé publique et l'entrepreneuriat au sein de notre communauté.
                  Nous croyons fermement que le développement durable est la clé pour un avenir meilleur et plus équitable pour tous.
                </p> 
              </div>
            </div>
      </div>
      <div className="py-4 sm:py-6 md:py-8"></div>
      <div className="sm:px-4 md:px-8 lg:px-24 md:py-2 pt-1">
        <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Nos Projets</h2>
        <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
          Découvrez nos projets en cours et nos initiatives pour un avenir meilleur.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
          </div>
        </div>
        <div className="py-4 sm:py-6 md:py-8"></div>
        <div className="bg-gray-200 dark:bg-gray-800 sm:px-4 md:px-8 lg:px-32 md:py-2 pt-1">
          <div className="">
            <ImpactMetrics />
          </div>
        </div>
        <div className="py-4 sm:py-6 md:py-8"></div>
        <div className="sm:px-4 md:px-8 lg:px-32 md:py-2 pt-1">
          <div className="">
            <PartnersCarousel />
          </div>
        </div>
        <div className="py-4 sm:py-6 md:py-8"></div>
        <div className="sm:px-4 md:px-24 md:py-2 pt-1 bg-gray-200 dark:bg-gray-800 ">
            <NewsletterSection />
        </div>
        <div className="py-4 sm:py-6 md:py-8"></div>
    </div>
  );
}