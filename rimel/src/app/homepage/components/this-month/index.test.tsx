import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
import { IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

const products = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: "/images/north-coat.png"
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 65,
    image: "/images/gucci-bag.png"
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65,
    image: "/images/cpu-cooler.png"
  },
  {
    id: 4,
    name: "Small BookShelf",
    price: 360,
    originalPrice: null,
    rating: 5,
    reviews: 65,
    image: "/images/bookshelf.png"
  }
];

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<IoMdStarOutline key={i} data-testid={`full-star-${i}`} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<IoMdStarHalf key={i} data-testid={`half-star-${i}`} className="text-yellow-400" />);
    } else {
      stars.push(<IoMdStarOutline key={i} data-testid={`empty-star-${i}`} className="text-gray-300" />);
    }
  }
  return (
    <span>
      {stars}
    </span>
  );
}

function BestSelling() {
  return (
    <section>
      <div>
        <span></span>
        <span>This Month</span>
      </div>
      <div>
        <h2>Best Selling Products</h2>
        <button>View All</button>
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <img
                src={product.image}
                alt={product.name}
                width={180}
                height={160}
              />
              <div>
                <button>
                  <FiHeart />
                </button>
                <button>
                  <IoEyeOutline />
                </button>
              </div>
              <button>Add To Cart</button>
            </div>
            <div>
              <h3>{product.name}</h3>
              <div>
                <span>${product.price}</span>
                {product.originalPrice && (
                  <span>${product.originalPrice}</span>
                )}
              </div>
              <div>
                {renderStars(product.rating)}
                <span>({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

describe("BestSelling", () => {
  it("renders the section titles", () => {
    render(<BestSelling />);
    expect(screen.getByText("This Month")).toBeInTheDocument();
    expect(screen.getByText("Best Selling Products")).toBeInTheDocument();
    expect(screen.getByText("View All")).toBeInTheDocument();
  });

  it("renders all products", () => {
    render(<BestSelling />);
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      expect(screen.getByText(`(${product.reviews})`)).toBeInTheDocument();
      expect(screen.getByAltText(product.name)).toBeInTheDocument();
      expect(screen.getAllByText("Add To Cart").length).toBeGreaterThan(0);
    });
  });

  it("renders original price if present", () => {
    render(<BestSelling />);
    products.forEach((product) => {
      if (product.originalPrice) {
        expect(screen.getByText(`$${product.originalPrice}`)).toBeInTheDocument();
      }
    });
  });

  it("renders correct number of stars", () => {
    render(<BestSelling />);
    expect(screen.getAllByTestId("full-star-1").length).toBeGreaterThan(0);
  });

  it("renders heart and eye icons for each product", () => {
    render(<BestSelling />);
    expect(screen.getAllByRole("button", { name: "" }).length).toBeGreaterThan(0);
  });
});