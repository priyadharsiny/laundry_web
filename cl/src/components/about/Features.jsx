
import React from "react";
import {
  HandThumbUpIcon,
  UsersIcon,
  ClockIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <HandThumbUpIcon className="w-8 h-8 text-primary" />,
    title: "Quality Guaranteed",
    description:
      "We use the best detergents and state-of-the-art machines to ensure your clothes are treated with care.",
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-primary" />,
    title: "Expert Staff",
    description:
      "Our team of laundry professionals is trained to handle all types of fabrics and stains.",
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-primary" />,
    title: "Timely Service",
    description:
      "We value your time and always strive to deliver your laundry on schedule.",
  },
  {
    icon: <TruckIcon className="w-8 h-8 text-primary" />,
    title: "Convenient Solutions",
    description:
      "With our pickup and delivery service, doing laundry has never been easier.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose CleanPress?
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 text-primary flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
