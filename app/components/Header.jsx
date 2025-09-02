'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';
import DonateButton from './ui/DonateButton';

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
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          !dropdownRef.current?.contains(event.target) &&
          !mobileMenuRef.current?.contains(event.target) &&
          event.target instanceof Element && !event.target.closest('.menu-toggle')
        ) {
          setIsLanguageDropdownOpen(false);
          setIsMobileMenuOpen(false);
        }
      };

      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          setIsLanguageDropdownOpen(false);
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, []);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prevState) => !prevState);
    };

    const toggleLanguageDropdown = () => {
      setIsLanguageDropdownOpen((prevState) => !prevState);
    };

    const handleLanguageSelect = (code) => {
      setSelectedLanguage(code);
      setIsLanguageDropdownOpen(false);
    };

    const handleNavLinkClick = () => {
      setIsMobileMenuOpen(false);
    }

    return (
      <nav className="bg-white/50 border-gray-200 dark:bg-gray-900/50 mx-1 lg:mx-2 mt-1 lg:mt-4 rounded-lg lg:rounded-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 lg:p-2">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image 
              src="/logo_abcdi_flamme.svg" 
              width={50}
              height={50}
              alt="ABCDI Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="self-center text-sm md:text-xl font-semibold whitespace-nowrap">
              {['text-blue-500', 'text-green-600', 'text-red-700', 'text-yellow-500', 'text-blue-500'].map((color, i) => (
                <span key={i} className={`${color} ${i < 4 ? 'pr-1 md:pr-2' : ''}`}>
                  {'ABCDI'[i]}
                </span>
              ))}
            </span>
          </Link>
  
          <div className="flex items-center lg:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={toggleLanguageDropdown}
                className="inline-flex items-center font-medium justify-center px-2 md:px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg 
                cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Image
                  src={languages.find(l => l.code === selectedLanguage)?.flag}
                  width={20}
                  height={20}
                  alt="Language flag"
                  className="rounded-full me-1 md:me-2"
                />
                <span className="hidden sm:inline">
                  {languages.find(l => l.code === selectedLanguage)?.label}
                </span>
              </button>
  
              <div 
                className={`z-50 absolute right-0 my-2 text-base list-none bg-white/50 divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-900/50 ${
                  isLanguageDropdownOpen ? 'block' : 'hidden'
                }`}
                style={{ top: '100%' }} >
                <ul className="font-medium" role="menu">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleLanguageSelect(lang.code)}
                        className="w-full text-left block px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
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
              onClick={toggleMobileMenu}
              type="button"
              className="menu-toggle inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open menu</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
  
          <div 
            ref={mobileMenuRef} 
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 transition-all 
              duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col font-medium p-4 lg:p-0 rounded-lg lg:rounded-full lg:space-x-2 xl:space-x-4 rtl:space-x-reverse lg:flex-row group">
              <NavItem href="/about" label="A Propos" className="lg:rounded-l-full" onClick={handleNavLinkClick} />
              <NavItem href="/projects" label="Projets" onClick={handleNavLinkClick} />
              <NavItem href="/news" label="Actualites" onClick={handleNavLinkClick}/>
              <NavItem href="/contact-us" label="Contacts" onClick={handleNavLinkClick}/>
              
              {/* Donate Button */}
              <li className="lg:pt-2.5 flex justify-center lg:inline">
                <DonateButton label={"Faire un Don"} link={"/donate"} onClick={handleNavLinkClick} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;