import { render, screen, fireEvent } from '@testing-library/react';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders the AboutSection component', () => {
    // Arrange and Act
    render(<AboutSection />);
    
    // Assert
    const aboutSectionElement = screen.getByText('About Me');
    expect(aboutSectionElement).toBeInTheDocument();
  });

  it('displays content based on selected tab', () => {
    // Arrange and Act
    render(<AboutSection />);
    
    // Assert
    const skillsTabButton = screen.getByText('Skills');
    const educationTabButton = screen.getByText('Education');

    fireEvent.click(skillsTabButton);
    const skillsContent = screen.getByText('React');
    expect(skillsContent).toBeInTheDocument();

    fireEvent.click(educationTabButton);
    const educationContent = screen.getByText('Bachelor in Software engineering');
    expect(educationContent).toBeInTheDocument();
  });

  it('changes active tab when a TabButton is clicked', () => {
    // Arrange and Act
    render(<AboutSection />);
    
    // Assert
    const skillsTabButton = screen.getByText('Skills');
    const educationTabButton = screen.getByText('Education');

    fireEvent.click(skillsTabButton);
    expect(skillsTabButton).toHaveClass('text-white');
    expect(educationTabButton).toHaveClass('text-[#ADB7BE]');

    fireEvent.click(educationTabButton);
    expect(educationTabButton).toHaveClass('text-white');
    expect(skillsTabButton).toHaveClass('text-[#ADB7BE]');
  });
});