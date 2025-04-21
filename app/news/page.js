import Image from 'next/image'
import React from 'react'

const News = () => {
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 sm:bottom-4 md:bottom-8 left-8 text-white font-bold">
            <p className="text-2xl sm:text-4xl md:text-5xl">Informations</p>
          </div>
        </div>
      </section>
      <div className="mx-2 sm:mx-6 sm:px-4 md:px-24 py-4 md:py-6">
        <p className="text-center text-lg font-medium">Aucune Informations Disponibles</p>
      </div>
    </div>
  )
}
export default News
