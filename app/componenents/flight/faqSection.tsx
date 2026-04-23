"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a hotel?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet, diam sit amet porta eleifend, turpis justo maximus eros, rhoncus ullamcorper mi tortor et libero."
  },
  {
    question: "Can I Cancel Or Change My Hotel Booking?",
    answer: "Yes, you can manage your bookings through your dashboard. Cancellation policies vary by hotel."
  },
  {
    question: "How Will I Receive My Booking Confirmation?",
    answer: "Once the payment is processed, a confirmation email will be sent to your registered address."
  },
  {
    question: "What If I Need Help During My Stay?",
    answer: "Our 24/7 support team is available via chat, or you can contact the hotel front desk directly."
  },
  {
    question: "Are Taxes And Fees Included In The Price?",
    answer: "Transparency is key. All estimated taxes and service fees are shown before you finalize payment."
  },
  {
    question: "Can I Request Early Check-In Or Late Check-Out?",
    answer: "Requests can be made during booking, though they are subject to room availability at the hotel."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 font-sans">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Accordion */}
        <div className="w-full lg:w-1/2 space-y-2 order-2 lg:order-1">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-100 transition-all duration-300 ${
                openIndex === index ? 'bg-blue-50/50 rounded-lg' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-5 px-4 text-left group"
              >
                <span className={`text-sm md:text-base font-medium transition-colors ${
                  openIndex === index ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {item.question}
                </span>
                <ChevronDown 
                  size={18} 
                  className={`text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-blue-600' : ''
                  }`} 
                />
              </button>
              
              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="px-4 pb-6 text-xs md:text-sm text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Text and Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Got Questions? We’re here to help
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Everything you need to know about hotel bookings.<br />
              From reservations to check-in and beyond.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Modern architecture with pool" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;