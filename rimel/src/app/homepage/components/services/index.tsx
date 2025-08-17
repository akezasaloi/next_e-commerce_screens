"use client";

import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaTruck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    id: 2,
    icon: FaHeadphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.id} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-200 rounded-full p-3">
                  <div className="bg-black rounded-full p-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}