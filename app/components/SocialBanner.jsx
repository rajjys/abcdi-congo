// Created by: Jonathan Idy
// Date: 10-05-25
// Description: This component is used to display social media sharing buttons for Facebook, Twitter, LinkedIn, and Instagram. 
// It takes a share URL and share text as props and generates the appropriate sharing links for each platform.
import Link from 'next/link'
import React from 'react'

const SocialBanner = (shareUrl, shareText) => {
  return (
    <div className="flex justify-end items-center space-x-4 mt-4 text-sm sm:text-base md:text-lg mt-2 text-gray-400 mb-4 sm:mb-6 md:mb-8 pb-2 sm:pb-4 md:pb-6 border-b border-gray-400">
                <span>PARTAGER:</span>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </Link>
                <Link
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600" >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </Link>
                <Link href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900" >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 13H16.9v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.29z" />
                  </svg>
                </Link>
                <Link href={`https://www.instagram.com/`}
                  target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.771.13 4.548.396 3.5 1.444c-1.048 1.048-1.314 2.271-1.372 3.552C2.013 6.668 2 7.092 2 12s.013 5.332.072 6.612c.058 1.281.324 2.504 1.372 3.552 1.048 1.048 2.271 1.314 3.552 1.372C8.332 23.987 8.756 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.504-.324 3.552-1.372 1.048-1.048 1.314-2.271 1.372-3.552.058-1.281.072-1.705.072-6.612s-.013-5.332-.072-6.612c-.058-1.281-.324-2.504-1.372-3.552-1.048-1.048-2.271-1.314-3.552-1.372C15.668.013 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </Link>
          </div>
  )
}

export default SocialBanner
