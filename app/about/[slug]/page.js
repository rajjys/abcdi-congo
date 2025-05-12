// Created by: Jonathan Idy
// Date: 11-05-25
// Description: This file is a Next.js page component that fetches and displays information about a team member based on the provided slug in the URL. 
// It includes their name, role, profile image, and a rich text description. 
// The page also handles cases where no information is found for the given slug.
import RichTextViewer from '@/app/components/RichTextViewer';
import { fetchTeamMember } from '@/app/services/graphcms';
import Image from 'next/image';



const NewsPage = async ({ params }) => {
  const { slug } = await params; // Extract the slug from the URL
  // Fetch the team member data based on the slug
  const teamMember = await fetchTeamMember(slug);
  if (!teamMember) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Aucune Information Trouvee</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 md:flex">
      <section className="relative md:w-1/2 md:sticky md:top-0 lg:h-screen md:overflow-hidden">
        <div className="relative flex justify-center lg:h-full">
          <Image
            src={teamMember.profile.url}
            alt={teamMember.name}
            width={800}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 left-4 sm:left-8 md:left-12 text-white w-full max-w-4xl">
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {teamMember.name}
            </p>
            <div className="text-sm sm:text-base md:text-lg mt-2 text-gray-400">
              <span>{teamMember.role}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-1/2 py-6 md:pb-18 md:mt-[5vh] lg:mt-[15vh]">
        <div className="prose dark:prose-invert max-w-none px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Render the rich text content */}
          <RichTextViewer description={teamMember.description} title={teamMember.name} />
        </div>
      </section>
    </div>
  );
};

export default NewsPage;