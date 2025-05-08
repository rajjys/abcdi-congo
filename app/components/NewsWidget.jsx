import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { formatDate } from '../utils/format';

const NewsWidget = ({ index, news }) => {
    
    const isEven = index % 2 === 0;
return (
            <Link href={`/news/${news.slug}`} 
            className={`flex flex-col ${ isEven? "sm:flex-row" : "sm:flex-row-reverse"} justify-between rounded shadow-md dark:shadow-white/20 md:shadow-none mb-4 sm:mb-6 md:mb-8 lg:mb-10 group`}>
                    <div className="flex-1">
                            <Image src={news.profile.url} alt={news.title} width={200} height={120} className="rounded-md w-full sm:px-4 md:px-6 lg:px-8" />
                    </div>
                    <div className='flex-1 flex flex-col justify-between'>
                            <div>
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-mono text-green-900 
                                    dark:text-green-300 mt-2 px-2 pb-2 sm:pb-4 md:border-b border-gray-400 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">{news.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-200 text-xs sm:text-sm md:text-base mx-2 pt-2">{news.headline}</p>
                            </div>
                            <div className="flex justify-between items-center my-2 pt-2 mt-2 border-t border-gray-400 md:px-2">
                                    <span className="text-xs sm:text-sm  mx-2 text-gray-500 dark:text-gray-400 overflow-hidden whitespace-nowrap"> <span className="font-bold">{news.author}</span></span>
                                    <span className="text-xs sm:text-sm md:text-base mx-2 text-gray-500 dark:text-gray-400">{formatDate(news.date)}</span>
                            </div>
                    </div> 
            </Link>
)
}

export default NewsWidget
