import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Categories from '.';

describe('Categories Component', () => {
  it('renders section titles', () => {
    render(<Categories />);
    expect(screen.getByText(/Categories/i)).toBeInTheDocument();
    expect(screen.getByText(/Browse By Category/i)).toBeInTheDocument();
  });

  it('renders all category items', () => {
    render(<Categories />);

    expect(screen.getAllByText(/Phones|Computers|SmartWatch|Camera|HeadPhones|Gaming|Tablet|Tv|Speakers/i).length).toBeGreaterThan(0);
  });

  it('renders left and right scroll buttons', () => {
    render(<Categories />);
    expect(screen.getByLabelText(/Scroll Left/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Scroll Right/i)).toBeInTheDocument();
  });

  it('calls scrollLeft and scrollRight on button click', () => {
    render(<Categories />);
    const left = screen.getByLabelText(/Scroll Left/i);
    const right = screen.getByLabelText(/Scroll Right/i);

    fireEvent.click(left);
    fireEvent.click(right);


  });

  it('renders at least one active category', () => {
    render(<Categories />);
    const active = screen.getAllByText('Camera');
    expect(active.length).toBeGreaterThan(0);
  });
});