import Image from 'next/image';
import { TeamMember } from '../components/TeamMember';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative flex justify-center h-[40vh] sm:h-[80vh] md:h-[100vh] mb-8">
          <Image
            src="/stock/woman-farmer.webp"
            alt="Woman Farmer"
            width={800}
            height={400}
            priority
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white font-bold">
            <p className="text-3xl sm:text-4xl md:text-5xl">À Propos de Nous</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-8 text-center">
            À Propos d'ABCDI ONGD
          </h1>

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Mission Text */}
            <div className="flex-1 bg-gray-200 dark:bg-gray-900 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Notre Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                ABCDI ONGD a pour objet global la promotion de la sécurité alimentaire par l'agriculture, 
                la santé et le bien-être communautaire ainsi que le développement de toutes les couches 
                sociales et leur accompagnement.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-6 mb-4">
                Objectifs Spécifiques:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                <li>Promouvoir l'agriculture durable et la sécurité alimentaire en RDC</li>
                <li>Accompagner les populations vulnérables dans l'entreprenariat</li>
                <li>Développer la santé communautaire et la cohésion sociale</li>
                <li>Vulgariser les techniques agricoles et d'hygiène dans les communautés</li>
                <li>Encadrer les enfants sans abri et les couches sociales défavorisées</li>
                <li>Créer des centres de formation et de sensibilisation</li>
              </ul>
            </div>

            {/* Mission Image */}
            <div className="flex-1 shadow-lg">
              <Image
                src="/stock/community.jpg"
                alt="Community"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
</section>

      {/* Team Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 my-16">
        <h2 className="text-4xl font-extrabold text-green-700 mb-12 text-center">
          Notre Équipe
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <TeamMember 
            image="/stock/jospin2.jpg"
            name="Jospin Yampanya"
            role="Directeur Exécutif"
          />
          <TeamMember 
            image="/stock/judith.jpg"
            name="Judith Tussi"
            role="Coordinatrice des Projets"
          />
          <TeamMember 
            image="/stock/obama.jpg"
            name="Patrick Mbuyi"
            role="Agronome Principal"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;