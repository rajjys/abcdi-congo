'use client';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('L\'email est obligatoire');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Remplacez par votre appel API réel
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      setError('Échec de l\'abonnement. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 dark:text-green-300 mb-4">
          Restez informé de nos actions communautaires
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-xs sm:text-sm md:text-base">
          Abonnez-vous à notre newsletter locale pour recevoir des actualités sur l'agriculture durable et le développement communautaire
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="Entrez votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-700"
            >
              {isSubmitting ? 'Abonnement...' : 'S\'abonner'}
            </button>
          </div>

          {error && (
            <p className="mt-2 text-red-600 dark:text-red-400 text-sm">{error}</p>
          )}

          {isSuccess && (
            <p className="mt-2 text-green-700 dark:text-green-400 text-sm">
              Merci pour votre abonnement !
            </p>
          )}
        </form>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Nous respectons votre vie privée. Pas de spam, jamais.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;