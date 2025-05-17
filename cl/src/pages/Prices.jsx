import React from 'react';

import Footer from "../components/footer/Footer";
import Header from '../components/price/Header'; // Import the Header component
import LaundryMain from '../components/price/LaunderMain'; // Import the new LaundryMain component

const faqs = [
  { question: 'How do we get started?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { question: 'What will be the cost of dry cleaning?', answer: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { question: 'How many days package complete?', answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
];

export default function LaundryServices() {
  return (
    // <div className="bg-lighter-blue">
    <div className="min-h-screen bg-gray-100 relative">
      <Header /> {/* Use the Header component */}
      
      <div> 
        <LaundryMain /> {/* Use the new LaundryMain component */}
      </div>
      
      <section className="mt-12 container mx-auto px-4 pb-12" id="faqs"> {/* Add padding-bottom (pb-12) */}
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions, Answered</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-lg shadow-md p-4">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer /> {/* Use the Footer component */}
    </div>
  );
}
