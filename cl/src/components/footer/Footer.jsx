import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si"; // Removed SiTwitter
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

// If you find the correct Twitter icon, add it back here
// import { SiTwitter } from "react-icons/si"; 

import LogoWhite from "../../assets/images/logo-white.png";

const Footer = () => {
  const navigate = useNavigate(); 

  return (
    <footer className="bg-[#11B4F5] text-white pt-10">
      {/* New Footer Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
            <p className="text-sm">Our support team is available 24/7</p>
          </div>
          <button 
          onClick={() => navigate("/contact")}
          className="bg-white text-[#0A94D4] px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>

      {/* Old Footer Section */}
      <div className="bg-light-blue pt-10">
        <div className="flex flex-col md:flex-row mx-auto max-w-screen-2xl justify-between items-start md:items-center px-5 sm:px-10 min-h-12">
          <div className="mb-10 md:mb-0">
            <img src={LogoWhite} alt="footer-logo" className="w-32 md:w-40" />
            <div>
              <p className="max-w-md pt-5 text-sm md:text-base">
                We are professionals in the laundry and dry cleaning business,
                which means we always stay up to date on the latest technologies
                and cleaning methods.
              </p>
            </div>
            <div className="flex text-xl justify-between w-40 py-5">
              <SiFacebook />
              <SiYoutube />
              <SiInstagram />
              {/* <SiTwitter /> Uncomment and use if you find the correct Twitter icon */}
            </div>
            <p className="pb-5 text-xs md:text-sm">CLEANEX 2024 - All rights reserved &copy;</p>
          </div>
          <div>
            <div className="flex justify-start md:justify-end items-start pt-5">
              <div className="text-2xl pr-5 pt-1">
                <TiLocation />
              </div>
              <p className="text-sm md:text-base">
                99 Street, Anna Nager, <br /> India.
              </p>
            </div>
            <div className="flex justify-start md:justify-end items-center pt-5">
              <div className="text-2xl pr-5">
                <IoMail />
              </div>
              <p className="text-sm md:text-base">example@cleanex.com</p>
            </div>
            <div className="flex justify-start md:justify-end items-center pt-5">
              <div className="text-2xl pr-5">
                <IoIosCall />
              </div>
              <p className="text-sm md:text-base">+91 1234567898</p>
            </div>
            <div className="flex flex-wrap w-full md:w-80 justify-between pt-5 pb-5">
              <Link to="#" className="text-sm md:text-base">Home</Link>
              <Link to="#" className="text-sm md:text-base">Services</Link>
              <Link to="#" className="text-sm md:text-base">About</Link>
              <Link to="#" className="text-sm md:text-base">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
