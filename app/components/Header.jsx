'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('fr');
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);
  
    const languages = [
      { code: 'fr', label: 'Français', flag: '/flags/fr.svg' },
      { code: 'en', label: 'English', flag: '/flags/us.svg' },
    ];
  
    // Close dropdowns when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsLanguageDropdownOpen(false);
        }
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    // Close dropdowns on ESC press
    useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          setIsLanguageDropdownOpen(false);
          setIsMobileMenuOpen(false);
        }
      };
  
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);
  
    const handleLanguageSelect = (code) => {
      setSelectedLanguage(code);
      setIsLanguageDropdownOpen(false);
    };
  
    return (
      <nav className="bg-white/50 border-gray-200 dark:bg-gray-900/50 mx-1 md:mx-2 mt-1 md:mt-4 rounded-lg md:rounded-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-2">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image 
              src="/logo_abcdi_flamme.svg" 
              width={50}
              height={50}
              alt="ABCDI Logo"
              className="w-10 h-10"
            />
            <span className="self-center text-base md:text-xl font-semibold whitespace-nowrap">
                    <span className='text-blue-500 md:pr-2'>A</span>
                    <span className='text-green-600 md:pr-2'>B</span>
                    <span className='text-red-700 md:pr-2'>C</span>
                    <span className='text-yellow-500 md:pr-2'>D</span>
                    <span className='text-blue-500'>I</span>
            </span>
          </Link>
  
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="inline-flex items-center font-medium justify-center px-2 md:px-5 py-2.5 text-sm text-gray-900 dark:text-white rounded-lg 
                cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" >
                <Image
                  src={languages.find(l => l.code === selectedLanguage)?.flag}
                  width={20}
                  height={20}
                  alt="Language flag"
                  className="rounded-full me-1 md:me-3"
                />
                {languages.find(l => l.code === selectedLanguage)?.label}
              </button>
  
              <div className={`z-50 absolute right-0 my-4 text-base list-none bg-white/50 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-900/50 ${
                  isLanguageDropdownOpen ? 'block' : 'hidden'
                }`}
                style={{ top: '100%' }} >
                <ul className="font-medium" role="menu">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageSelect(lang.code)}
                        className="w-full text-left block px-2 md:px-6 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="inline-flex items-center">
                          <Image
                            src={lang.flag}
                            width={16}
                            height={16}
                            alt={lang.label}
                            className="rounded-full me-2"
                          />
                          {lang.label}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  >
                <span className="sr-only">Open menu</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
  
          <div ref={mobileMenuRef} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all 
                        duration-300 ${ isMobileMenuOpen ? 'block' : 'hidden' }`} >
            <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg md:rounded-full md:space-x-4 rtl:space-x-reverse md:flex-row">
              <NavItem href="/about" label="About Us" className="md:rounded-l-full" />
              <NavItem href="/projects" label="Projects" />
              <NavItem href="/news" label="News" />
              <NavItem href="/career" label="Career" />
              <NavItem href="/contactus" label="Contact Us" />
              
              {/* Donate Button */}
              <li>
                <Link
                  href="/donate"
                  className="inline-flex items-center font-medium justify-center px-6 py-2 rounded-full cursor-pointer text-sm md:text-lg text-gray-900 dark:text-white  
                          dark:hover:text-white bg-green-600 hover:bg-green-800 dark:hover:bg-green-800 border border-white transition-colors" >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  const NavItem = ({ href, label, className }) => (
    <li >
      <Link
        href={href}
        className={`inline-flex items-center font-medium justify-center px-4 py-2 text-sm md:text-lg text-gray-900 dark:text-white rounded-lg 
                cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white ${className}`}>
        {label}
      </Link>
    </li>
  );
  
export default Header;