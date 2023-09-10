import { render, screen } from '@testing-library/react';
import Footer from './Footer'; // Adjust the import path as needed

test('renders the Footer component', () => {
  render(<Footer />);
  
  // Check if the logo alt text is present
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();

  // Check if the "All rights reserved." text is present
  const rightsReservedText = screen.getByText('All rights reserved.');
  expect(rightsReservedText).toBeInTheDocument();
});