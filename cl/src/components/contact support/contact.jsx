import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#11B4F5] mb-2">We're Here to Help You</h1>
          <p className="text-xl text-gray-600">Get in touch now!</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          <div className="w-full md:w-2/3 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">We'd love to hear from you!</h2>
            <p className="text-gray-600 mb-6">Share your queries, comments, feedback, or requests!</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-[#11B4F5] focus:border-[#11B4F5] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Email Id"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Your Comments"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#11B4F5] hover:bg-[#0f99da] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/3 bg-[#11B4F5] p-8 text-white">
  <h3 className="text-2xl font-semibold mb-6">More Ways to Contact Us</h3>
  <div className="space-y-4">
    <p className="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      No.1/56, Pudupakkam (Behind Hanuman Temple), Vandalar - Kelambakkam Road, Kanchipuram District - 603 103 Tamil Nadu, India
    </p>
    <p className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      care@Cleanex.com
    </p>
    <p className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      +91 9965852455
    </p>
  </div>

  {/* Social Media Icons */}
  <div className="mt-8 flex justify-center space-x-6">
    <a href="#" className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300">
      <i className="fab fa-facebook-f text-2xl"></i>
    </a>
    <a href="#" className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300">
      <i className="fab fa-twitter text-2xl"></i>
    </a>
    <a href="#" className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300">
      <i className="fab fa-instagram text-2xl"></i>
    </a>
    <a href="#" className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300">
      <i className="fab fa-linkedin-in text-2xl"></i>
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
