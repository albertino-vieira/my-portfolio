import { render, screen } from '@testing-library/react';
import EmailSection from './EmailSection';

describe('EmailSection', () => {
  it('renders the EmailSection component', () => {
    render(<EmailSection />);
    
    // Check if the "Let's Connect" title is present
    const titleElement = screen.getByText(/Let's Connect/i);
    
    expect(titleElement).toBeInTheDocument();

    // Check if the contact text is present
    const contactTextElement = screen.getByText(
      /I'm currently looking for new opportunities, my inbox is always open./i
    );
    expect(contactTextElement).toBeInTheDocument();

    // Check if the Github and LinkedIn icons are present
    const githubIcon = screen.getByAltText('Github Icon');
    const linkedinIcon = screen.getByAltText('Linkedin Icon');
    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });
});