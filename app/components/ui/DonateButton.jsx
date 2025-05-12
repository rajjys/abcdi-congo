import Link from 'next/link'
import React from 'react'

const DonateButton = ({label, link, onClick}) => {
return (
    <Link href={link} className="text-xs sm:text-sm md:text-base py-4 px-6 sm:px-8 md:px-10 md:text-base font-bold text-green-700 dark:text-green-300 hover:text-green-600 
    dark:hover:text-green-100 bg-gray-100 dark:bg-gray-900/80 hover:bg-green-50 hover:dark:bg-green-900/50 rounded-md shadow-md transition duration-300 backdrop-blur-md"
    onClick={onClick}>
            {label}
    </Link>
)
}

export default DonateButton
