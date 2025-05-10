import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Mission */}
        <div className="space-y-4">
          <Image 
            src="/logo_abcdi_flamme.svg"
            width={100}
            height={100} 
            alt="ABCDI Logo" 
            className="h-16 w-auto mb-4"
          />
          <p className="text-sm">
            ABCDI asbl a pour Objet global la Promotion de la securite alimentaire par l'agriculture, la sante et le bien-être communautaire
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-3">Liens Rapides</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-300 transition">À Propos</a></li>
            <li><a href="/impact" className="hover:text-green-300 transition">Notre Impact</a></li>
            <li><a href="/get-involved" className="hover:text-green-300 transition">S'impliquer</a></li>
            <li><a href="/news" className="hover:text-green-300 transition">Actualites</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-3">Nous Contacter</h4>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +243 997 741 312
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@abcdi.org
            </p>
            <address className="not-italic mt-4 text-sm">
              Avenue Maendeleo<br/>
              Quartier Mugunga n°12<br/>
              Ville de Goma, RDC
            </address>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h4 className="font-semibold mb-3">Nous Suivre</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/abcdi-ongd" target="_blank" rel="noopener" className="hover:text-green-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/abcdi-ongd" target="_blank" rel="noopener" className="hover:text-green-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/abcdi-ongd" target="_blank" rel="noopener" className="hover:text-green-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 text-sm space-y-1">
            <p>Numéro d'enregistrement: 012-345/F12345</p>
            <p>Compte Bancaire: XXXXXXXX (Rawbank)</p>
            <a href="/privacy" className="block hover:text-green-300">Politique de confidentialité</a>
            <a href="/annual-report" className="block hover:text-green-300">Rapport Annuel 2023</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ABCDI-ONGD. Tous droits réservés.</p>
        <p className="mt-2">
          Site conçu par <a href="https://asimila.com" target="_blank" rel="noopener" className="hover:text-green-300">Asimila Technology</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;