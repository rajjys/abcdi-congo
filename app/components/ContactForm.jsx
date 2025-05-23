'use client'
import React, { useState } from 'react'

const ContactForm = () => {
    const [messageSent, setMessageSent] = useState(false);
      const [isSending, setIsSending] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [id]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setMessageSent(false); // Reset the message state
        setIsSending(true); // Indicate that the message is being sent
    
        // Simulate a 1-second delay (replace this with your API call later)
        await new Promise((resolve) => setTimeout(resolve, 1000));
    
        setIsSending(false); // Stop the "Sending" state
        setMessageSent(true); // Show the "Message sent" confirmation
        setFormData({ name: '', email: '', message: '' }); // Clear the form fields
      };
  return (
        <form
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSending}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSending}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Votre email"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSending}
              rows="5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Votre message"
              required
            ></textarea>
            {messageSent && (
              <p className="mt-2 text-green-600 dark:text-green-400 text-sm">
                Message envoyé avec succès!
              </p>
            )}
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={isSending}
              className={`px-6 py-3 ${
                isSending
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-700 hover:bg-green-800'
              } text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-700`}
            >
              {isSending ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </form>
  )
}

export default ContactForm
