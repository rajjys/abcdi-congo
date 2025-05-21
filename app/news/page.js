import Image from 'next/image'
import React from 'react'
import { fetchNewsItems } from '../services/graphcms';
import NewsWidget from '../components/NewsWidget';
export const dynamic = 'force-dynamic'; // Force dynamic rendering

const News = async () => {
  const newsItems = await fetchNewsItems();
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative flex justify-center h-[50vh] sm:h-[80vh] md:h-[100vh] mb-8">
          <Image
            src="/stock/oldmanradio.jpg"
            alt="Femmes Couturières"
            width={800}
            height={400}
            priority
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 sm:bottom-4 md:bottom-8 left-8 text-white font-bold">
          <p className="ml-4 sm:ml-8 md:ml-12 text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: 'Eagle Horizon' }}>Actualites</p>
          </div>
        </div>
      </section>
      {/* News Section */}
      <div className="mx-2 sm:mx-6 sm:px-4 md:px-10 lg:px-24 pb-8">
        <div className="group">
        {newsItems && newsItems.length > 0 ? (
            newsItems.map((news, index) => (
              <NewsWidget index={index} news={news} key={index}/>
            ))
          
        ) : (
          <p className="text-center text-lg font-medium">Aucune Informations Disponibles</p>
        )}
        </div>
      </div>
    </div>
  )
}
export default News
