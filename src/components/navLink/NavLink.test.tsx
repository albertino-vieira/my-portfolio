import { render, screen } from '@testing-library/react';
import NavLink, {type NavLinkProps } from './NavLink';
// Define a test case
test('NavLink renders with the correct href and title', () => {
    // Arrange: Prepare the test data
    const props: NavLinkProps = {
      href: '/example',
      title: 'Example Link',
    };
  
    // Act: Render the component with test data
    render(<NavLink {...props} />);
  
    // Assert: Check if the component renders correctly
    const linkElement = screen.getByText(props.title);
  
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', props.href);
  });