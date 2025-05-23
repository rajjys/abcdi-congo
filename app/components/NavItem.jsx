'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

const NavItem = ({
    href,
    label,
    onClick,
}) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        onClick?.(); // Close the mobile menu
        router.push(href); // Navigate programmatically
    };

    return (
        <li className='group-hover:opacity-100 transition-opacity duration-300'>
            <Link
                href={href}
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm md:text-base lg:text-lg text-gray-900 dark:text-white rounded-lg 
                cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group-hover:opacity-100 transition-opacity duration-300"
                onClick={handleClick} // Use the new handler
            >
                {label}
            </Link>
        </li>
    );
};
export default NavItem;