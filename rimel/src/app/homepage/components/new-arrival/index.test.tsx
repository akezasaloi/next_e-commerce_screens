import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

function NewArrival() {
  return (
    <section>
      <div>
        <div></div>
        <span>Featured</span>
      </div>
      <h2>New Arrival</h2>
      <div>
        <div>
          <div>
            <img src="/images/ps5-console.png" alt="PlayStation 5" />
          </div>
          <div>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a>Shop Now</a>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src="/images/womens-collection.png" alt="Women Collections" />
            </div>
            <div>
              <h3>Women Collections</h3>
              <p>
                Featured woman collections that give you another vibe.
              </p>
              <a>Shop Now</a>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src="/images/speakers.png" alt="Speakers" />
              </div>
              <div>
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <a>Shop Now</a>
              </div>
            </div>
            <div>
              <div>
                <img src="/images/perfume.png" alt="Perfume" />
              </div>
              <div>
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <a>Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

describe("NewArrival", () => {
  it("renders main section headings", () => {
    render(<NewArrival />);
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByText("New Arrival")).toBeInTheDocument();
  });
  it("renders PlayStation 5 card", () => {
    render(<NewArrival />);
    expect(screen.getByText("PlayStation 5")).toBeInTheDocument();
    expect(screen.getByText("Black and White version of the PS5 coming out on sale.")).toBeInTheDocument();
    expect(screen.getAllByText("Shop Now")[0]).toBeInTheDocument();
    expect(screen.getByAltText("PlayStation 5")).toBeInTheDocument();
  });
  it("renders Women Collections card", () => {
    render(<NewArrival />);
    expect(screen.getByText("Women Collections")).toBeInTheDocument();
    expect(screen.getByText("Featured woman collections that give you another vibe.")).toBeInTheDocument();
    expect(screen.getAllByText("Shop Now")[1]).toBeInTheDocument();
    expect(screen.getByAltText("Women Collections")).toBeInTheDocument();
  });
  it("renders Speakers card", () => {
    render(<NewArrival />);
    expect(screen.getByText("Speakers")).toBeInTheDocument();
    expect(screen.getByText("Amazon wireless speakers")).toBeInTheDocument();
    expect(screen.getAllByText("Shop Now")[2]).toBeInTheDocument();
    expect(screen.getByAltText("Speakers")).toBeInTheDocument();
  });
  it("renders Perfume card", () => {
    render(<NewArrival />);
    expect(screen.getByText("Perfume")).toBeInTheDocument();
    expect(screen.getByText("GUCCI INTENSE OUD EDP")).toBeInTheDocument();
    expect(screen.getAllByText("Shop Now")[3]).toBeInTheDocument();
    expect(screen.getByAltText("Perfume")).toBeInTheDocument();
  });
});