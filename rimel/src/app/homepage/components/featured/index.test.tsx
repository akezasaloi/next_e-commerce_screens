import React from "react";
import { render, screen } from "@testing-library/react";

function CountdownTimer() {
  const items = [
    { value: "23", label: "Hours" },
    { value: "05", label: "Days" },
    { value: "59", label: "Minutes" },
    { value: "35", label: "Seconds" }
  ];
  return (
    <div>
      {items.map(({ value, label }) => (
        <div key={label}>
          <span>{value}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturedBanner() {
  return (
    <section>
      <span>Categories</span>
      <h2>
        Enhance Your<br />Music Experience
      </h2>
      <CountdownTimer />
      <button>Buy Now!</button>
      <img src="/images/speaker-featured.png" alt="JBL Speaker" />
    </section>
  );
}

describe("FeaturedBanner", () => {
  it("renders headline and countdown", () => {
    render(<FeaturedBanner />);
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText(/Enhance Your/)).toBeInTheDocument();
    expect(screen.getByText(/Music Experience/)).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("05")).toBeInTheDocument();
    expect(screen.getByText("59")).toBeInTheDocument();
    expect(screen.getByText("35")).toBeInTheDocument();
    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Days")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Seconds")).toBeInTheDocument();
  });
  it("renders Buy Now button", () => {
    render(<FeaturedBanner />);
    expect(screen.getByRole("button", { name: "Buy Now!" })).toBeInTheDocument();
  });
  it("renders speaker image", () => {
    render(<FeaturedBanner />);
    expect(screen.getByAltText("JBL Speaker")).toBeInTheDocument();
  });
});