// Created by: Jonathan Idy
// Date: 10-05-25
// Description: This component is used to render a news widget.
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { formatDate } from '../utils/format';

const NewsWidget = ({ index, news }) => {
    const isEven = true;
    
    return (
        <Link 
            href={`/news/${news.slug}`} 
            className={`flex flex-col ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"} justify-between rounded shadow-md dark:shadow-white/20 md:shadow-none mb-4 sm:mb-6 md:mb-8 lg:mb-12 group-hover:opacity-100 transition-opacity duration-300`}
        >
            {/* Image container - scaled to 80% of original size */}
            <div className="flex-[0.8] relative aspect-video overflow-hidden rounded-md">
                <Image 
                    src={news.profile.url} 
                    alt={news.title} 
                    fill
                    className="object-cover w-full h-full sm:px-3 md:px-5 lg:px-6"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
                />
            </div>
            
            {/* Text content - takes remaining space */}
            <div className='flex-1 flex flex-col justify-between sm:px-4 md:px-6 lg:px-8 group-hover:opacity-100 transition-opacity duration-300'>
                <div>
                    <h3 className="text-base sm:text-md md:text-lg lg:text-xl font-semibold font-mono text-green-900 
                    dark:text-green-300 mt-2 px-2 pb-2 sm:pb-4 md:border-b border-gray-400 group-hover:text-green-700 
                    dark:group-hover:text-green-400 transition-colors duration-300">{news.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm lg:text-base mx-2 pt-2">{news.headline}</p>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm my-2 pt-2 mt-2 border-t border-gray-400 md:px-2">
                    <span className=" mx-2 text-gray-500 dark:text-gray-400 overflow-hidden whitespace-nowrap"> 
                        <span className="font-bold">{news.author}</span>
                    </span>
                    <span className=" mx-2 text-gray-500 dark:text-gray-400">
                        {formatDate(news.date)}
                    </span>
                </div>
            </div> 
        </Link>
    )
}

export default NewsWidget