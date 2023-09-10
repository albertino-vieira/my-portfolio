import { render, screen } from '@testing-library/react';
import MenuOverlay from './MenuOverlay';

describe('MenuOverlay', () => {
  it('renders navigation links correctly', () => {
    // Define a mock array of links
    const mockLinks = [
      { href: '/home', title: 'Home' },
      { href: '/about', title: 'About' },
      { href: '/contact', title: 'Contact' },
    ];

    // Render the MenuOverlay component with mock links
    render(<MenuOverlay links={mockLinks} />);

    // Check if the navigation links are rendered
    mockLinks.forEach(({ href, title }) => {
      const linkElement = screen.getByRole('link', { name: title });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });
});