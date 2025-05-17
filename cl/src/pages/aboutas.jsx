import React from "react";
import { useNavigate } from "react-router-dom";
import sb from "../assets/images/sb.png";
import mm from "../assets/video/vi.mp4";
import Features from "../components/about/Features";
import Services from "../components/about/Services";
import OurStory from "../components/about/OurStory";
import TeamSection from "../components/about/TeamSection"; // Import the TeamSection component
import ImageSection from "../components/about/ImageSection"; // Import the ImageSection component

export default function AboutPage() {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto shadow-lg rounded-lg bg-neutral-50">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-t-lg">
            <video
              src={mm}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center text-white px-6 text-center h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-title">We're reimagining</h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl">laundry and dry cleaning.</h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg">Bringing hassle-free laundry & dry cleaning services.</p>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => navigate("/prices")}
                  className="bg-primary text-white rounded-md px-4 py-2 lg:px-6 lg:py-3 lg:text-lg transition-transform transform hover:scale-105 hover:bg-primary-dark duration-300"
                >
                  View Packages
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-none text-primary border-primary border-2 rounded-md px-4 py-2 lg:px-6 lg:py-3 lg:text-lg transition-transform transform hover:scale-105 hover:bg-primary duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <ImageSection /> {/* Use the new component here */}

          {/* Large Image */}
          <div className="py-6 rounded-b-lg bg-bg-neutral-50 flex justify-center">
            {/* <img
              src={sb}
              alt="Other Services"
              className="rounded-md w-full max-w-4xl object-cover"
            /> */}
          </div>
        </div>

        {/* Services Section */}
        <Services />

        {/* Story Section */}
        <OurStory />

        {/* Team Section */}
        <TeamSection />

        {/* Features Section */}
        <Features />
      </main>
    </div>
  );
}
