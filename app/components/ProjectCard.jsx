import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ projectItem }) => {
  return (
    <Link 
      href={`/projects/${projectItem?.slug}`} 
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <Image 
          src={projectItem?.profile.url} 
          alt={projectItem?.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-lg sm:text-xl font-bold text-green-900 dark:text-green-300 group-hover:text-green-700 mb-2">
          {projectItem?.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
          {projectItem?.headline}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            {projectItem?.domain}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 text-xs rounded-full">
            {projectItem?.city}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
