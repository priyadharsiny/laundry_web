// src/components/about/TeamSection.js
import React from 'react';
import teamImage1 from '../../assets/images/FN.webp'; // Import your team images
import teamImage2 from '../../assets/images/FN.webp'; // Import your team images
import teamImage3 from '../../assets/images/FN.webp'; // Import your team images

const team = [
  { name: "Jane Doe", role: "Founder & CEO", image: teamImage1 },
  { name: "John Smith", role: "Operations Manager", image: teamImage2 },
  { name: "Emily Brown", role: "Customer Service Lead", image: teamImage3 },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg">
              <div className="p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
