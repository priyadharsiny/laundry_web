// components/Header.js
import React from 'react';
import  pricef  from '../../assets/images/pricef.webp'; // Ensure the path is correct

const Header = () => {
  return (
    <header className="relative bg-[#11B4F5] text-white py-16 min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={pricef}
          alt="Laundry Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#11B4F5] opacity-50"></div>
      </div>

      <div className="relative z-1 container mx-auto px-4">
        <h1 className="text-4xl font-bold">The Big Laundry Services</h1>
        <p className="text-lg">Clean your worries away, one load at a time.</p>
      </div>
    </header>
  );
};

export default Header;
