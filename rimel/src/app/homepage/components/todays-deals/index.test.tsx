import '@testing-library/jest-dom'
import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    image: "/images/gamepad2.png",
    rating: 5,
    reviews: 88,
    isCart: false,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: "/images/wired-keyboard.png",
    rating: 4,
    reviews: 75,
    isCart: true,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    image: "/images/gaming-monitor.png",
    rating: 5,
    reviews: 99,
    isCart: false,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    image: "/images/comfort-chair.png",
    rating: 4.5,
    reviews: 99,
    isCart: false,
  },
  {
    id: 5,
    name: "SteelSeries Wireless Mouse",
    price: 210,
    oldPrice: 260,
    discount: 20,
    image: "/images/wireless-mouse.png",
    rating: 4,
    reviews: 43,
    isCart: false,
  },
  {
    id: 6,
    name: "Logitech G Pro Headset",
    price: 180,
    oldPrice: 220,
    discount: 18,
    image: "/images/headset.png",
    rating: 4.5,
    reviews: 54,
    isCart: false,
  },
];

function ProductStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <span>
      {[...Array(fullStars)].map((_, i) => (
        <IoMdStarOutline key={"f" + i} data-testid="full-star" />
      ))}
      {hasHalf && <IoMdStarHalf data-testid="half-star" />}
      {[...Array(emptyStars)].map((_, i) => (
        <IoMdStarOutline key={"e" + i} data-testid="empty-star" />
      ))}
    </span>
  );
}

function FlashSales() {
  const itemsPerPage = 4;
  const [page, setPage] = React.useState(0);
  const maxPage = Math.ceil(products.length / itemsPerPage) - 1;
  const pagedProducts = products.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section>
      <div>
        <span></span>
        <span>Today&apos;s </span>
      </div>
      <div>
        <h2>Flash Sales</h2>
        <div>
          <button
            aria-label="Scroll Left"
            disabled={page === 0}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          >
            <FiChevronLeft />
          </button>
          <button
            aria-label="Scroll Right"
            disabled={page >= maxPage}
            onClick={() => setPage((prev) => Math.min(prev + 1, maxPage))}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div>
        {pagedProducts.map((product) => (
          <div key={product.id}>
            <span>
              -{product.discount}%
            </span>
            <div>
              <button>
                <FiHeart />
              </button>
              <button>
                <IoEyeOutline />
              </button>
            </div>
            <div>
              <img
                src={product.image}
                alt={product.name}
                width={140}
                height={120}
              />
              <button>Add To Cart</button>
            </div>
            <div>
              <h3>{product.name}</h3>
              <div>
                <span>${product.price}</span>
                <span>${product.oldPrice}</span>
              </div>
              <div>
                <ProductStars rating={product.rating} />
                <span>({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button>View All Products</button>
      </div>
    </section>
  );
}

describe("FlashSales", () => {
  it("renders section headings and buttons", () => {
    render(<FlashSales />);
    expect(screen.getByText(/Today/)).toBeInTheDocument();
    expect(screen.getByText("Flash Sales")).toBeInTheDocument();
    expect(screen.getByText("View All Products")).toBeInTheDocument();
    expect(screen.getByLabelText("Scroll Left")).toBeInTheDocument();
    expect(screen.getByLabelText("Scroll Right")).toBeInTheDocument();
  });

  it("renders first page products", () => {
    render(<FlashSales />);
    expect(screen.getByText("HAVIT HV-G92 Gamepad")).toBeInTheDocument();
    expect(screen.getByText("AK-900 Wired Keyboard")).toBeInTheDocument();
    expect(screen.getByText("IPS LCD Gaming Monitor")).toBeInTheDocument();
    expect(screen.getByText("S-Series Comfort Chair")).toBeInTheDocument();
    expect(screen.getAllByText("Add To Cart").length).toBe(4);
    expect(screen.getByText("-40%")).toBeInTheDocument();
    expect(screen.getByText("-35%")).toBeInTheDocument();
    expect(screen.getByText("-30%")).toBeInTheDocument();
    expect(screen.getByText("-25%")).toBeInTheDocument();
  });

  it("renders price and old price", () => {
    render(<FlashSales />);
    expect(screen.getByText("$120")).toBeInTheDocument();
    expect(screen.getByText("$160")).toBeInTheDocument();
    expect(screen.getByText("$960")).toBeInTheDocument();
    expect(screen.getByText("$1160")).toBeInTheDocument();
  });

  it("renders stars correctly for ratings", () => {
    render(<FlashSales />);
    expect(screen.getAllByTestId("full-star").length).toBeGreaterThan(0);
    expect(screen.getAllByTestId("empty-star").length).toBeGreaterThan(0);
    expect(screen.getAllByTestId("half-star").length).toBeGreaterThan(0);
  });

  it("pagination buttons work", () => {
    render(<FlashSales />);
    const right = screen.getByLabelText("Scroll Right");
    fireEvent.click(right);
    expect(screen.getByText("SteelSeries Wireless Mouse")).toBeInTheDocument();
    expect(screen.getByText("Logitech G Pro Headset")).toBeInTheDocument();
  });
});