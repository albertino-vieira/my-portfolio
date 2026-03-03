import { render, screen, fireEvent } from '@testing-library/react';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders the AboutSection component', () => {
    render(<AboutSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('displays content based on selected tab', () => {
    render(<AboutSection />);

    const skillsTabButton = screen.getByText('Skills');
    const educationTabButton = screen.getByText('Education');

    fireEvent.click(skillsTabButton);
    expect(screen.getByText('React & Next.js')).toBeInTheDocument();

    fireEvent.click(educationTabButton);
    expect(screen.getByText(/Master's in Computer Engineering/i)).toBeInTheDocument();
  });
});
