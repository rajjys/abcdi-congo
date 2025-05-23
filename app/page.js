import Image from "next/image";
import MainCarousel from "./components/MainCarousel";
import ProjectCard from "./components/ProjectCard";
import ImpactMetrics from "./components/ImpactMetrics";
import PartnersCarousel from "./components/PartnersCarousel";
import NewsletterSection from "./components/NewsLetterSection";
import DonateButton from "./components/ui/DonateButton";
import { fetchProjectItems } from "./services/graphcms";
import { SchemaMarkup } from "./components/seo/SchemaMarkup";


export default async function Home() {
  // Fetch data from the GraphQL API
   const projectItems = await fetchProjectItems();
  // const partners = await fetchPartners();
  // const impactMetrics = await fetchImpactMetrics();
  // const news = await fetchNews();
  // const teamMembers = await fetchTeamMembers();
  // const testimonials = await fetchTestimonials();
  // const events = await fetchEvents();
  // const articles = await fetchArticles();

  return (
    <div>
      <SchemaMarkup schema={localBusinessSchema} />{/* For SEO purposes */}
      <MainCarousel />
      <div className="py-4 sm:py-6 md:py-8"></div>
      <div className="flex flex-col sm:flex-row justify-center items-stretch lg:px-24 bg-white/50 dark:bg-gray-900/50">
        {/* Image Container */}
        <div className="w-full sm:basis-1/2 flex items-stretch">
          <Image
            src="/stock/community.jpg"
            alt="ABCDI Logo"
            width={580}
            height={400}
            className="rounded-t-md sm:rounded-none object-cover w-full h-full"
          />
        </div>
        
        {/* About Section */}
        <div className="w-full sm:basis-1/2 flex flex-col justify-center p-4 h-full md:ml-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 dark:text-green-300 font-bold font-mono my-2">
            Qui Sommes Nous ?
          </h2>
          <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md">
            ABCDI - asbl est une organisation à but non lucratif qui œuvre pour le bien-être de la communauté et le développement durable.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-2 text-xs sm:text-sm md:text-lg p-2 shadow-md">
            Notre mission est de promouvoir l'agriculture durable, la sécurité alimentaire, la santé publique et l'entrepreneuriat au sein de notre communauté.
          </p> 
        </div>
      </div>
      <div className="py-4 sm:py-6 md:py-8"></div>
      <div className="sm:px-4 md:px-8 lg:px-24 md:py-2 pt-1">
        <h2 className="text-xl sm:text-2xl md:text-4xl text-green-900 font-bold font-mono dark:text-green-300 text-start block my-2 ml-2">Nos Projets</h2>
        <p className="text-gray-600 dark:text-gray-200 my-2 text-sm sm:text-base md:text-lg p-2 border-l-4 border-green-300 shadow-md bg-white/50 dark:bg-gray-900/50">
          Découvrez nos projets en cours et nos initiatives pour un avenir meilleur.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 group">
          {projectItems && projectItems.length > 0 &&
            projectItems.slice(0, 3).map((projectItem, index) => (
              <ProjectCard
                key={index}
                projectItem={projectItem}
              />
          ))}
          </div>
          <div className="flex justify-end items-center my-2">
              <DonateButton label={"Nos Projets >>"} link={"/projects"} className="" />
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
        <div className="pb-1"></div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const title = "Actions Humanitaires | Construisons Ensemble | ABCDI";
  const description = "ABCDI - Promotion de la securite Alimentaire par l'agriculture, la sante, le Developpement Communautaire et l'Accompagnement social";
  const url = "https://abcdi.org/";
  const siteName = "ABCDI";
  const card = "summary_large_image";
  const logo = "https://abcdi.org/logo_abcdi.png";
  return {
            title,
            description,
            alternates: {
              canonical: url
            },
            openGraph: {
              title,
              description,
              url,
              siteName,
              images: [{ url: logo }]
            },
            // Twitter Card Metadata
            twitter: {
              card,
              title,
              description,
              images: [{ url: logo }]
            },
          };
}

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Humanitarian",
    "name": "ABCDI",
    "logo": "/logo_abcdi.png",
    "image": ["https://abcdi.org/logo_abcdi_flamme.svg", "https://abcdi.org/stock/reunion.jpg", "https://abcdi.org/stock/potatoes1.jpg"],
    "telephone": "+243 990 332 378",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av Maendeleo, Q.Mugunga",
      "addressLocality": "Goma",
      "addressRegion": "Nord-Kivu",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.6167404,
      "longitude": 29.1535604,
    },
  };