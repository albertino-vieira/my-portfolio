import { render, screen } from '@testing-library/react';
import JobDetail from './JobDetail';

describe('JobDetail', () => {
  const jobTitle = 'Software Developer';
  const bullets = [
    'Developed web applications',
    'Collaborated with cross-functional teams',
    'Implemented new features',
  ];

  it('renders the job title and bullets', () => {
    // Arrange
    render(<JobDetail jobTitle={jobTitle} bullets={bullets} />);
    
    // Assert
    const jobTitleElement = screen.getByText(jobTitle);
    expect(jobTitleElement).toBeInTheDocument();

    bullets.forEach((bullet) => {
      const bulletElement = screen.getByText(bullet);
      expect(bulletElement).toBeInTheDocument();
    });
  });

  it('applies text gradient to the job title', () => {
    // Arrange
    render(<JobDetail jobTitle={jobTitle} bullets={bullets} />);
    
    // Assert
    const jobTitleElement = screen.getByText(jobTitle);
    expect(jobTitleElement).toHaveClass('bg-gradient-to-r');
  });

  it('renders each bullet as a list item', () => {
    // Arrange
    render(<JobDetail jobTitle={jobTitle} bullets={bullets} />);
    
    // Assert
    bullets.forEach((bullet) => {
      const bulletElement = screen.getByText(bullet);
      expect(bulletElement).toBeInTheDocument();
      expect(bulletElement.nodeName).toBe('LI');
    });
  });
});