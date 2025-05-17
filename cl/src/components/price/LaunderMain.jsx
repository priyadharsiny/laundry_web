import React from 'react';
import Price from "./price";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import the images for the services
import SpecialLaundryImage from '../../assets/gif/wash m.gif';
import DryCleaningImage from '../../assets/gif/cloth1.gif';
import IroningImage from '../../assets/gif/iron.gif';
import CurtainPackageImage from '../../assets/gif/cloth.gif';
import ComforterPackageImage from '../../assets/gif/sofa1.gif';
import SofaSetPackageImage from '../../assets/gif/sofa2.gif';
import SpringPackageImage from '../../assets/gif/high.gif';
import PremiumLaundryImage from '../../assets/gif/prime.gif';
import HolidaySpecialImage from '../../assets/gif/gem.gif';

const services = [
  { name: 'Special Laundry', image: SpecialLaundryImage, price: 1000, duration: '2-3 days' },
  { name: 'Dry Cleaning', image: DryCleaningImage, price: 500, duration: '3-4 days' },
  { name: 'Ironing', image: IroningImage, price: 1000, duration: '1-2 days' },
  { name: 'Curtain Package', image: CurtainPackageImage, price: 1000, duration: '4-5 days' },
  { name: 'Comforter Package', image: ComforterPackageImage, price: 1500, duration: '2-3 days' },
  { name: 'Sofa set Package', image: SofaSetPackageImage, price: 2000, duration: '3-4 days' },
  { name: 'Spring Package', image: SpringPackageImage, price: 2000, duration: '4-5 days' },
  { name: 'Premium Laundry', image: PremiumLaundryImage, price: 2500, duration: '1-2 days' }, // New service 1
  { name: 'Holiday Special', image: HolidaySpecialImage, price: 3000, duration: '5-7 days' }, // New service 2
];

const LaundryMain = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = (route) => {
    navigate(route); // Navigate to the service route
  };
  return (
    <main className="container mx-auto max-w-8xl px-4 py-6 mt-8 flex flex-col lg:flex-row"> 
      {/* Added mt-8 for top margin of the main container */}
      <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <img src={service.image} alt={service.name} className="w-20 h-20 mt-4 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">₹{service.price} / 5 kg load</p>
            <p className="text-sm text-gray-500 mb-4">{service.duration}</p>
            <button
            onClick={() => handleButtonClick('/dry-cleaning')} // Call handleButtonClick on click
              className="w-full bg-[#11B4F5] text-white py-2 rounded-md hover:bg-[#0FA4E2] transition-colors"
            >
              Choose Package
            </button>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0 lg:flex lg:justify-end"> 
        {/* Decreased mt-8 to mt-4 to reduce top margin for Price */}
        <Price />
      </div>
    </main>
  );
};

export default LaundryMain;
