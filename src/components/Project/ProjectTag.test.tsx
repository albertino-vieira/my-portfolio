import { render, screen, fireEvent } from '@testing-library/react';
import ProjectTag from './ProjectTag';
import {vi} from 'vitest';


// Define a mock onClick function
const mockOnClick = vi.fn();

// Define mock data for testing
const mockTag = {
  name: 'Example Tag',
  isSelected: false,
};

test('renders ProjectTag component with correct data', () => {
  render(
    <ProjectTag
      name={mockTag.name}
      isSelected={mockTag.isSelected}
      onClick={mockOnClick}
    />
  );

  // Check if the tag name is rendered
  const tagNameElement = screen.getByText(mockTag.name);
  expect(tagNameElement).toBeInTheDocument();

  // Check if the button style matches the isSelected prop
  const buttonElement = screen.getByRole('button');
  if (mockTag.isSelected) {
    expect(buttonElement).toHaveClass('text-white border-primary-500');
  } else {
    expect(buttonElement).toHaveClass('text-[#ADB7BE] border-slate-600 hover:border-white');
  }

  // Simulate a click event on the button and check if the onClick function is called
  fireEvent.click(buttonElement);
  expect(mockOnClick).toHaveBeenCalledWith(mockTag.name);
});