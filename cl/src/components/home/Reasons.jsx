import React from "react";

import ReasonCheck from "../../assets/images/reason-check.png";
import ReasonsImage from "../../assets/images/reasons-img.webp";
import LeftTopBubble from "../../assets/images/left-top-bubble-reason.png";
import LeftBottomBubble from "../../assets/images/left-bottom-bubble-reason.png";
import RightBottomBubble from "../../assets/images/right-bottom-bubble-reason.png";

const Reasons = () => {
  return (
    <div className="relative">
      <div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold pb-5 pt-10 text-center"
          >
            Why Choose Us
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-2xl font-semibold pb-6 text-gray-400 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Just request through the profile to pick up your stuff. We will do
            the rest. We wash, dry, and iron your clothes; you just have to ask.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-20 md:space-x-10 relative">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={ReasonsImage}
              alt="reasons-img"
              data-aos="fade-right"
              data-aos-offset="50"
              style={{
                borderRadius: "2.5%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
          <div className="w-full md:w-1/2 text-2xl font-semibold pb-4 text-center">
            <div className="flex-start flex-col items-center" >
              {['100% Satisfaction', 'Quality Services', 'Fast Delivery', 'Cost Effective'].map((text, index) => (
                <div className="flex items-center py-5" key={index}>
                  <img src={ReasonCheck} alt="check-img" />
                  <h3 className="px-5">{text}</h3>
                </div>
              ))}
            </div>
          </div>
          <img
            src={LeftTopBubble}
            alt="left-top-bubble"
            className="absolute -z-2 -top-40 left-0 hidden md:block"
            data-aos="fade-right"
          />
          <img
            src={LeftBottomBubble}
            alt="left-bottom-bubble"
            className="absolute -z-2 -bottom-40 left-40 hidden md:block"
            data-aos="fade-right"
          />
          <img
            src={RightBottomBubble}
            alt="right-bottom-bubble"
            className="absolute -z-2 -bottom-80 right-20 hidden md:block"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
