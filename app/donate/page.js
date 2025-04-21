'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    ccv: '',
  });

  // Validation functions
  const isPhoneNumberValid = () => {
    const phoneRegex = /^[0-9]{10,15}$/; // Validates phone numbers with 10-15 digits
    return phoneRegex.test(phoneNumber);
  };

  const isCardDetailsValid = () => {
    const cardNumberRegex = /^[0-9]{16}$/; // Validates 16-digit card numbers
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Validates MM/YY format
    const ccvRegex = /^[0-9]{3}$/; // Validates 3-digit CCV
    return (
      cardNumberRegex.test(cardDetails.cardNumber) &&
      expiryDateRegex.test(cardDetails.expiryDate) &&
      ccvRegex.test(cardDetails.ccv)
    );
  };

  const isFormValid = () => {
    if (!amount || !paymentMethod) return false;
    if (paymentMethod === 'Airtel Money' || paymentMethod === 'M-Pesa') {
      return isPhoneNumberValid();
    }
    if (paymentMethod === 'Visa') {
      return isCardDetailsValid();
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setDonationSuccess(false);

    // Simulate a delay for processing (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setDonationSuccess(true);
    setAmount('');
    setPaymentMethod('');
    setPhoneNumber('');
    setCardDetails({ cardNumber: '', expiryDate: '', ccv: '' });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="relative flex justify-center h-[50vh] sm:h-[80vh] md:h-[100vh] mb-8">
          <img
            src="/stock/food-donation.jpg"
            alt="Donate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white font-bold">
            <p className="text-3xl sm:text-4xl md:text-5xl">Faites un Don</p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="container mx-auto px-4 sm:px-8 lg:px-16 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-8 text-center">
          Soutenez Notre Mission
        </h2>
        <form
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Montant en USD
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={isProcessing}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Entrez le montant"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Méthode de Paiement
            </label>
            <div className="flex flex-wrap gap-4 mt-4">
              {/* Airtel Money */}
              <button
                type="button"
                onClick={() => setPaymentMethod('Airtel Money')}
                disabled={isProcessing}
                className={`flex items-center px-4 py-2 border rounded-lg shadow-sm transition-colors duration-200 ${
                  paymentMethod === 'Airtel Money'
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Image
                  src="/logos/airtel-money-logo.png"
                  alt="Airtel Money"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                Airtel Money
              </button>

              {/* M-Pesa */}
              <button
                type="button"
                onClick={() => setPaymentMethod('M-Pesa')}
                disabled={isProcessing}
                className={`flex items-center px-4 py-2 border rounded-lg shadow-sm transition-colors duration-200 ${
                  paymentMethod === 'M-Pesa'
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Image
                  src="/logos/m-pesa-logo.png"
                  alt="M-Pesa"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                M-Pesa
              </button>

              {/* Visa */}
              <button
                type="button"
                onClick={() => setPaymentMethod('Visa')}
                disabled={isProcessing}
                className={`flex items-center px-4 py-2 border rounded-lg shadow-sm transition-colors duration-200 ${
                  paymentMethod === 'Visa'
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Image
                  src="/logos/visa-logo.png"
                  alt="Visa"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                Visa
              </button>
            </div>
          </div>

          {/* Conditional Fields */}
          {paymentMethod === 'Airtel Money' || paymentMethod === 'M-Pesa' ? (
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Numéro de Téléphone
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isProcessing}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Entrez votre numéro de téléphone"
                required
              />
            </div>
          ) : paymentMethod === 'Visa' ? (
            <div className="mb-6">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Numéro de Carte
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  setCardDetails((prev) => ({ ...prev, cardNumber: e.target.value }))
                }
                disabled={isProcessing}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="1234 5678 9012 3456"
                required
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date d'Expiration
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={(e) =>
                      setCardDetails((prev) => ({ ...prev, expiryDate: e.target.value }))
                    }
                    disabled={isProcessing}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ccv" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    CCV
                  </label>
                  <input
                    type="text"
                    id="ccv"
                    value={cardDetails.ccv}
                    onChange={(e) =>
                      setCardDetails((prev) => ({ ...prev, ccv: e.target.value }))
                    }
                    disabled={isProcessing}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          ) : null}

          {donationSuccess && (
            <p className="text-green-600 dark:text-green-400 text-sm mb-4">
              Merci pour votre don! Votre contribution fait une différence.
            </p>
          )}
          <div className="text-center">
            <button
              type="submit"
              disabled={isProcessing || !isFormValid()}
              className={`px-6 py-3 ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-700 hover:bg-green-800'
              } text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-700`}
            >
              {isProcessing ? 'Traitement...' : 'Faire un Don'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Donate;