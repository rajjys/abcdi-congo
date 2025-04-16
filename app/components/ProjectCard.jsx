import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <Link href={`/projects/${project.slug}`} className="flex flex-col justify-between rounded shadow-md dark:shadow-white/20 m-2">
        <div className="flex-1 mb-2 md:mb-4">
            <Image src={project.imageUrl} alt={project.title} width={380} height={300} className="rounded-t-md w-full" />
            <h3 className="text-lg sm:text-xl font-semibold font-mono text-green-900 dark:text-green-300 mt-2 px-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm md:text-base mx-2 pt-2">{project.description}</p>
        </div>
          <div className="flex justify-between items-center my-2 pt-2 mt-2 border-t border-gray-400 md:px-2">
            <span className="text-xs sm:text-sm  mx-2 text-gray-500 dark:text-gray-400 overflow-hidden whitespace-nowrap">Domaine: <span className="font-bold">{project.domain}</span></span>
            <span className="text-xs sm:text-sm md:text-base mx-2 text-gray-500 dark:text-gray-400">{project.city}</span>
          </div>
      </Link>
  )
}

export default ProjectCard
