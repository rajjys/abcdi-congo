'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false);

  const volunteeringOpportunities = [
    { id: 1, title: 'Volontaire Agricole', location: 'Goma, RDC', duration: '3 mois' },
    { id: 2, title: 'Volontaire en Éducation', location: 'Kinshasa, RDC', duration: '6 mois' },
    { id: 3, title: 'Volontaire en Santé Communautaire', location: 'Lubumbashi, RDC', duration: '4 mois' },
  ];

  const jobOpenings = [
    { id: 1, title: 'Agronome', location: 'Goma, RDC', type: 'Temps plein' },
    { id: 2, title: 'Coordinateur de Projet', location: 'Kinshasa, RDC', type: 'Temps plein' },
    { id: 3, title: 'Assistant Administratif', location: 'Lubumbashi, RDC', type: 'Temps partiel' },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApplicationSent(false);

    // Simulate a delay for processing (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setApplicationSent(true);
    setFormData({ name: '', email: '', resume: null, coverLetter: '' });
    setSelectedJob('');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative flex justify-center h-[50vh] sm:h-[80vh] md:h-[100vh] mb-8">
          <Image
            src="/stock/black-girls.webp"
            alt="Careers"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white font-bold">
          <p className="ml-4 sm:ml-8 md:ml-12 text-3xl sm:text-4xl md:text-6xl" style={{ fontFamily: 'Eagle Horizon' }}>Rejoindre Notre Equipe</p>
          </div>
        </div>
      </section>

      {/* Volunteering Opportunities Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-8 text-center">
          Opportunités de Volontariat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteeringOpportunities.map((volunteer) => (
            <div
              key={volunteer.id}
              className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold">{volunteer.title}</h3>
              <p className="text-sm mt-2">
                <strong>Lieu:</strong> {volunteer.location}
              </p>
              <p className="text-sm">
                <strong>Durée:</strong> {volunteer.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 pb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-8 text-center">
          Offres d'Emploi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${
                selectedJob === job.title ? 'bg-green-700 text-white' : 'bg-white dark:bg-gray-800'
              }`}
              onClick={() => setSelectedJob(job.title)}
            >
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-sm mt-2">
                <strong>Lieu:</strong> {job.location}
              </p>
              <p className="text-sm">
                <strong>Type:</strong> {job.type}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      {selectedJob && (
        <section className="container mx-auto px-4 sm:px-8 lg:px-16 pb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-8 text-center">
            Postuler pour: {selectedJob}
          </h2>
          <form
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Votre email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CV (PDF uniquement)
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf"
                onChange={handleFileChange}
                disabled={isSubmitting}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Lettre de Motivation
              </label>
              <textarea
                id="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows="5"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Votre lettre de motivation"
                required
              ></textarea>
            </div>
            {applicationSent && (
              <p className="text-green-600 dark:text-green-400 text-sm mb-4">
                Votre candidature a été envoyée avec succès!
              </p>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-700 hover:bg-green-800'
                } text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-700`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default CareerPage;