import { render, screen } from '@testing-library/react';
import EmailSection from './EmailSection';

describe('EmailSection', () => {
  it('renders the EmailSection component', () => {
    render(<EmailSection />);

    const titleElement = screen.getByText(/Let's Connect/i);
    expect(titleElement).toBeInTheDocument();

    const contactTextElement = screen.getByText(/I'm currently open to new opportunities/i);
    expect(contactTextElement).toBeInTheDocument();

    const githubIcon = screen.getByAltText('Github Icon');
    const linkedinIcon = screen.getByAltText('Linkedin Icon');
    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });
});
