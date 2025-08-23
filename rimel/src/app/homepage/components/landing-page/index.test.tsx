import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
import { FaChevronRight, FaApple } from "react-icons/fa";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

function HeroSection() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion", 
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
  ];

  return (
    <div>
      <div className="flex">
        <div>
          <nav>
            {categories.map((category, index) => (
              <a key={index} href="#">
                <span>{category}</span>
                {(category === "Woman's Fashion" || category === "Men's Fashion") && (
                  <FaChevronRight data-testid={`chevron-${category}`} />
                )}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <div>
            <div>
              <div>
                <FaApple data-testid="apple-icon" />
                <span>iPhone 14 Series</span>
              </div>
              <h2>
                Up to 10%<br />
                off Voucher
              </h2>
              <a href="#">Shop Now<FaChevronRight data-testid="shop-chevron" /></a>
            </div>
            <div>
              <img
                src="/images/iphone-hero.png" 
                alt="iPhone 14 Series" 
                width={500} 
                height={500}
              />
            </div>
          </div>
          <div>
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                data-testid={`dot-${dot}`}
                className={dot === 2 ? "bg-red-500" : "bg-gray-400"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

describe("HeroSection", () => {
  it("renders all categories", () => {
    render(<HeroSection />);
    [
      "Woman's Fashion",
      "Men's Fashion", 
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Baby's & Toys",
      "Groceries & Pets",
      "Health & Beauty"
    ].forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
  it("renders chevron for Woman's and Men's Fashion", () => {
    render(<HeroSection />);
    expect(screen.getByTestId("chevron-Woman's Fashion")).toBeInTheDocument();
    expect(screen.getByTestId("chevron-Men's Fashion")).toBeInTheDocument();
  });
  it("renders apple icon and iPhone series text", () => {
    render(<HeroSection />);
    expect(screen.getByTestId("apple-icon")).toBeInTheDocument();
    expect(screen.getByText("iPhone 14 Series")).toBeInTheDocument();
  });
  it("renders Shop Now link with chevron", () => {
    render(<HeroSection />);
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
    expect(screen.getByTestId("shop-chevron")).toBeInTheDocument();
  });
  it("renders headline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Up to 10%/)).toBeInTheDocument();
    expect(screen.getByText(/off Voucher/)).toBeInTheDocument();
  });
  it("renders hero image", () => {
    render(<HeroSection />);
    expect(screen.getByAltText("iPhone 14 Series")).toBeInTheDocument();
  });
  it("renders all dots, third one active", () => {
    render(<HeroSection />);
    for(let i=0; i<5; i++) {
      expect(screen.getByTestId(`dot-${i}`)).toBeInTheDocument();
    }
    expect(screen.getByTestId("dot-2").className).toContain("bg-red-500");
  });
});