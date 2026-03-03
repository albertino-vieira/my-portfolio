import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the Footer component', () => {
  render(<Footer />);

  const logo = screen.getByAltText('Albertino Vieira logo');
  expect(logo).toBeInTheDocument();

  const rightsReservedText = screen.getByText(/All rights reserved./i);
  expect(rightsReservedText).toBeInTheDocument();
});
