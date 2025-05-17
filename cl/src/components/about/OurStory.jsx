// src/components/about/OurStory.js
import React from 'react';
import bg from '../../assets/images/aboubg.webp';
import sb from "../../assets/images/sb.png";

const OurStory = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, CleanPress has been at the forefront of the
              laundry industry, providing top-notch services to our valued
              customers.
            </p>
            <p className="text-gray-700 mb-4">
              We've grown from a small local shop to a trusted name in
              laundry services, all while maintaining our commitment to
              quality, sustainability, and customer satisfaction.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <img
              src={bg}
              alt="CleanPress Laundry Facility"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
