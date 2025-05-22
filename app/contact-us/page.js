
import Image from 'next/image';
import ContactForm from '../components/ContactForm';




const ContactUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">

      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative flex justify-center h-[50vh] sm:h-[80vh] md:h-[100vh] mb-8">
          <Image
            src="/stock/black-farmer.jpg"
            alt="Contact Us"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white font-bold">
          <p className="ml-4 sm:ml-8 md:ml-12 text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: 'Eagle Horizon' }}>
            Nous Contacter
          </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-8 text-center">
          Envoyez-nous un message
        </h2>
        <ContactForm />
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 pb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-8 text-center">
          Nos Coordonnées
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Address */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Adresse</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Avenue Maendeleo<br />
              Quartier Mugunga n°12<br />
              Ville de Goma, RDC
            </p>
          </div>

          {/* Contact Details */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Email:</strong> support@abcdi.org<br />
              <strong>Téléphone:</strong>+243 990 332 378
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

export async function generateMetadata({ params }) {
  const title = "Nous Contacter | ABCDI";
  const description = "Nos Contacts et Addresse Physique";
  const url = "https://abcdi.org/contact-us";
  const siteName = "ABCDI";
  const card = "summary_large_image";
  const icon = "https://abcdi.org/logo_abcdi_flamme.svg";
  ///const logo = "https://abcdi.org/logo_abcdi.png";
  const previewImage = "https://abcdi.org/stock/reunion-abcdi.jpeg"
  return {
            title,
            description,
            alternates: {
              canonical: url
            },
            openGraph: {
              title,
              description,
              url,
              siteName,
              images: [{ url: previewImage }]
            },
            // Twitter Card Metadata
            twitter: {
              card,
              title,
              description,
              images: [{ url: previewImage }]
            },
            icons: {
              icon: [{ url: icon }],
            },
          };
}