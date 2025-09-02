import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectWidget = ({ index, project }) => {
  const isEven = index % 2 === 0;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`flex flex-col ${
        isEven ? "sm:flex-row" : "sm:flex-row-reverse"
      } justify-between rounded-lg overflow-hidden shadow-md hover:shadow-lg dark:shadow-white/20 transition-all duration-300`}
    >
      {/* Image Section */}
      <div className="flex-[0.8] relative aspect-video">
        <Image
          src={project.profile.url}
          alt={project.title}
          fill
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between bg-white dark:bg-gray-900 sm:px-4 md:px-6 lg:px-8 py-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold font-mono text-green-900 dark:text-green-300 border-b border-gray-300 pb-2 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base mt-2">
            {project.headline}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-300 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <span>
            Domaine: <span className="">
                {project.domain && project.domain.length > 0 &&
                project.domain.map((domainScope, index) => <span key={index} className="px-3 mx-1 py-1 bg-green-100 text-green-800 text-xs rounded-full">{domainScope}</span>)}</span>
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 text-xs rounded-full">{project.city}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectWidget;
