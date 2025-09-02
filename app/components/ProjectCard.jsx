import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ projectItem }) => {
  return (
    <Link 
      href={`/projects/${projectItem?.slug}`} 
      className="group bg-white dark:bg-gray-900 rounded-xl dark:border dark:border-gray-700 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <Image 
          src={projectItem?.profile.url} 
          alt={projectItem?.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-lg sm:text-xl font-bold text-green-800 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300 ease-in-out mb-2">
          {projectItem?.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white text-sm sm:text-base mb-4 transition-colors duration-300 ease-in-out text-balance">
          {projectItem?.headline}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full ring-1 ring-green-200 dark:ring-green-700 transition-colors duration-300 ease-in-out">
            {projectItem?.domain}
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full ring-1 ring-gray-200 dark:ring-gray-600 transition-colors duration-300 ease-in-out">
            {projectItem?.city}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
