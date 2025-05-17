// src/components/about/ImageSection.js
import React from 'react';
import eco from '../../assets/images/eco.png';
import det from '../../assets/images/det.png';
import mc from '../../assets/images/mc2.png';

const ImageSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 my-8">
      {[eco, det, mc].map((img, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center rounded-md bg-neutral-50 shadow-md p-4"
        >
          <img
            src={img}
            alt={`Laundry ${idx + 1}`}
            className="rounded-md w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover"
          />
          <p className="mt-2 text-center text-sm sm:text-base">
            {idx === 0 && "Eco friendly solutions"}
            {idx === 1 && "Quality detergents"}
            {idx === 2 && "Certified machinery"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
