
import React from "react";
import { CheckCircleIcon, TruckIcon, ClockIcon } from "@heroicons/react/24/outline";

const services = [
  {
    icon: <CheckCircleIcon className="w-6 h-6 text-primary" />,
    title: "Wash & Fold",
    description:
      "Professional washing and folding services for all your garments.",
  },
  {
    icon: <TruckIcon className="w-6 h-6 text-primary" />,
    title: "Pickup & Delivery",
    description: "Convenient door-to-door pickup and delivery options.",
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-primary" />,
    title: "Express Service",
    description: "Quick turnaround for those urgent laundry needs.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
