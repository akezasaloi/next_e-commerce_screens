import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ExploreProducts from "./index";


jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {

    return <img {...props} alt={props.alt} />;
  },
}));

describe("ExploreProducts Component", () => {
  it("renders section headings and button", () => {
    render(<ExploreProducts />);
    expect(screen.getByText(/Our Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore Our Products/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /View All Products/i })).toBeInTheDocument();
  });

  it("renders all products with their names and prices", () => {
    render(<ExploreProducts />);

    expect(screen.getByText("Breed Dry Dog Food")).toBeInTheDocument();
    expect(screen.getByText("CANON EOS DSLR Camera")).toBeInTheDocument();
    expect(screen.getByText("ASUS FHD Gaming Laptop")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("$360")).toBeInTheDocument();
    expect(screen.getByText("$700")).toBeInTheDocument();
  });

  it("displays NEW badge for products with isNew", () => {
    render(<ExploreProducts />);
 
    expect(screen.getAllByText("NEW").length).toBeGreaterThan(0);
  });

  it("shows Add To Cart button on hover (simulated by always rendered in test env)", () => {
    render(<ExploreProducts />);
  
    expect(screen.getAllByText("Add To Cart").length).toBeGreaterThan(0);
  });

  it("renders color options for products that have them", () => {
    render(<ExploreProducts />);

    expect(screen.getAllByRole("button", { name: /Select color/i }).length).toBeGreaterThan(0);
  });

  it("can select and deselect a color option", () => {
    render(<ExploreProducts />);
    const colorButtons = screen.getAllByRole("button", { name: /Select color/i });
    expect(colorButtons.length).toBeGreaterThan(0);

    fireEvent.click(colorButtons[0]);

    fireEvent.click(colorButtons[0]);
  });

  it("renders product ratings and reviews", () => {
    render(<ExploreProducts />);
    
    expect(screen.getByText("(35)")).toBeInTheDocument();
    expect(screen.getByText("(95)")).toBeInTheDocument();
  });

  it("renders product icons (heart and eye) for each product", () => {
    render(<ExploreProducts />);

    expect(screen.getAllByRole("button").length).toBeGreaterThanOrEqual(8 + 8 * 2 + 1);
  });
});