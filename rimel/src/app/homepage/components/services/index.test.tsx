import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
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

function Services() {
  return (
    <section>
      <div>
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.id}>
              <div>
                <div>
                  <div>
                    <IconComponent data-testid={`icon-${service.id}`} />
                  </div>
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

describe("Services", () => {
  it("renders all service titles and descriptions", () => {
    render(<Services />);
    services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });
  it("renders all service icons", () => {
    render(<Services />);
    services.forEach((service) => {
      expect(screen.getByTestId(`icon-${service.id}`)).toBeInTheDocument();
    });
  });
});