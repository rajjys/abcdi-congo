// Created by: Jonathan Idy
// Date: 10-05-25
// Description: This is the page that will be rendered when a user visits the project page
// It will fetch the project data from the GraphCMS and display it
// It will also include a social media sharing banner and a rich text viewer for the project description
// It will also include a project image
import RichTextViewer from '@/app/components/RichTextViewer';
import SocialBanner from '@/app/components/SocialBanner';
import {fetchProjectItem } from '@/app/services/graphcms';
import { formatDate } from '@/app/utils/format';
import Image from 'next/image';



const ProjectPage = async ({ params }) => {
  const { slug } = await params; // Extract the slug from the URL
  const projectItem = await fetchProjectItem(slug);
  
  const shareUrl = `https://abcdi.org/news/${slug}`;
  const shareText = encodeURIComponent(projectItem.title); 
  
  if (!projectItem) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Aucun Projet trouve</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <section className="relative mb-8">
        <div className="relative flex justify-center h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] mb-8">
          <Image
            src={projectItem.profile.url}
            alt={projectItem.title}
            width={800}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/50 to-transparent"></div>
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 left-4 sm:left-8 md:left-12 text-white  w-full max-w-4xl">
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {projectItem.title}
            </p>
              <div className="text-sm sm:text-base md:text-lg mt-2 text-gray-400">
                <span className="">{projectItem.author || "abcdi"}</span>
                <span className="mx-2 sm:mx-4 md:mx-6">|</span>
                <span className=''>{projectItem.city}</span>
                <span className="mx-2 sm:mx-4 md:mx-6">|</span>
                <span className="">{formatDate(projectItem.date)}</span>
              </div>
            </div>
        </div>
      </section>
      <section className='container mx-auto px-4 sm:px-8 lg:px-16 mb-8 pb-8'>
          {/* Social Media Links */}
          <SocialBanner shareUrl={shareUrl} shareText={shareText} />
          <div className="prose dark:prose-invert max-w-none margin-auto px-4 sm:px-6 md:px-8 lg:px-12 md:mx-12 lg:mx-18">  
          {/* Render the rich text content */}
          <RichTextViewer description={projectItem.description} title = {projectItem.title}/>
        </div>
      </section>
    </div>
  );
};
export default ProjectPage
