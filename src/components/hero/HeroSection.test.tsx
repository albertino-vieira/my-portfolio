import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders the HeroSection component', () => {
    render(<HeroSection />);
    
    // Check if the title text is present
    const titleElement = screen.getByText(/Hello, I'm/);
    expect(titleElement).toBeInTheDocument();

    // Check if the "Hire Me" button is present
    const hireMeButton = screen.getByText(/Hire Me/i);
    expect(hireMeButton).toBeInTheDocument();

    // Check if the "Download CV" button is present
    const downloadCVButton = screen.getByText(/Download CV/i);
    expect(downloadCVButton).toBeInTheDocument();
  });
});