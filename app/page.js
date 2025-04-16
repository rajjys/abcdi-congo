import Image from "next/image";
import MainCarousel from "./components/MainCarousel";
import { Domain } from "@mui/icons-material";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import ImpactMetrics from "./components/ImpactMetrics";
import PartnersCarousel from "./components/PartnersCarousel";


export default function Home() {
  
  return (
    <div>
      <MainCarousel />
      <div className="border-b border-dashed border-green-300 dark:border-green-600 my-2 sm:my-4 md:my-6"></div>
      <div className="mx-2 sm:px-4 pb-4 ">
            <div className="flex flex-wrap justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-t-lg shadow-lg  md:px-24 md:p-2">
              <div className="flex-col md:basis-1/2">
                <Image
                  src="/stock/community.jpg"
                  alt="ABCDI Logo"
                  width={580}
                  height={400}
                  className="rounded-t-md md: rounded-md shadow-lg"/>
              </div>
              <div className="md:basis-1/2">
                <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 dark:text-green-300 font-bold font-mono my-2 ml-2">Qui Sommes Nous ?</h2>
                <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
                  ABCDI - asbl est une organisation à but non lucratif qui œuvre pour le bien-être de la communauté et le développement durable.
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2 text-xs sm:text-sm md:text-lg p-2 border-l-4 md:border-0 border-green-300 shadow-md">
                  Notre mission est de promouvoir l'agriculture durable, la sécurité alimentaire, la santé publique et l'entrepreneuriat au sein de notre communauté.
                  Nous croyons fermement que le développement durable est la clé pour un avenir meilleur et plus équitable pour tous.
                </p> 
              </div>
            </div>
      </div>
      <div className="border-b border-dashed border-green-300 dark:border-green-600 my-2 sm:my-4 md:my-6"></div>
      <div className="mx-2 sm:mx-6 sm:px-4 md:px-24 md:py-2 pt-1">
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
        <div className="border-b border-dashed border-green-300 dark:border-green-600 my-2 sm:my-4 md:my-6"></div>
        <div className="mx-2 md:mx-24 bg-gray-200 dark:bg-gray-800 rounded-t-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block mx-4 py-4">Notre Impact</h2>
        <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
          Découvrez l'impact de nos initiatives sur la communauté et l'environnement.
        </p>
        <ImpactMetrics />
        </div>
        <div className="border-b border-dashed border-green-300 dark:border-green-600 my-4 sm:my-6 md:my-8"></div>
        <div className="mx-2 sm:mx-6 sm:px-4 md:px-24 md:py-2 pt-1">
          <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Nos Partenaires</h2>
          <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
            Nous travaillons en collaboration avec divers partenaires pour maximiser notre impact.
          </p>
          <div className="">
            <PartnersCarousel />
          </div>
        </div>
        <div className="border-b border-dashed border-green-300 dark:border-green-600 my-2 sm:my-4 md:my-6"></div>
        <div className="mx-2 sm:mx-6 sm:px-4 md:px-24 md:py-2 pt-1">
          <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Inscrivez-vous</h2>
          <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
            Pour toute question ou information, n'hésitez pas à nous contacter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Add your contact information here */}
          </div>
        </div>
    </div>
  );
}

//This is for testing purposes. Need to be fetched serverside
const projects = [
  {
    title: "Projet Maman Autonaume",
    description: "Vise à autonomiser les femmes par la formation et le soutien. Augmente la production alimentaire et la sécurité alimentaire.",
    imageUrl: "/stock/black-woman-farm.webp",
    domain: "Santé",
    slug: "maman-autonome",
    city: "Goma",
  },
  {
    title: "Initiative Agricole Chakula",
    description: "Augmente la production alimentaire durable et la sécurité alimentaire.",
    imageUrl: "/stock/farm-initiative.jpg",
    domain: "Agriculture",
    slug: "ia-chakula",
    city: "Goma",
  },
  {
    title: "Santé Communautaire des Enfants",
    description: "Favorise l'accès aux soins de santé pour les enfants défavorisés.",
    imageUrl: "/stock/kids-health.jpg",
    domain: "Santé",
    slug: "sante-enfants",
    city: "Bukavu",
  },
  {
    title: "Programme d'Entrepreneuriat Féminin",
    description: "Soutient les femmes entrepreneures par la formation et le financement.",
    imageUrl: "/stock/woman-entrepreneur.jpg",
    domain: "Entrepreneuriat",
    slug: "entrepreneuriat-feminin",
    city: "Kinshasa",
  },
  {
    title: "Developpement Durable et Environnement",
    description: "Sensibilise à la protection de l'environnement et à la durabilité.",
    imageUrl: "/stock/construction.jpg",
    domain: "Environnement",
    slug: "developpement-durable",
    city: "Lubumbashi",
  },
  {
    title: "Formation en Compétences Numériques",
    description: "Fournit des compétences numériques aux jeunes pour l'employabilité.",
    imageUrl: "/stock/computer-training.jpg",
    domain: "Technologie",
    slug: "competences-numeriques",
    city: "Kisangani",
  }
];
