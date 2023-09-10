import { render, screen, fireEvent } from '@testing-library/react';
import TabButton from './TabButton';
import { vi } from 'vitest';

describe('TabButton', () => {
  it('renders the TabButton component', () => {
    // Arrange
    const mockHandleSelectTab = vi.fn();
    
    // Act
    render(
      <TabButton active={false} handleSelectTab={mockHandleSelectTab}>
        Tab Label
      </TabButton>
    );
    
    // Assert
    const tabButtonElement = screen.getByText('Tab Label');
    expect(tabButtonElement).toBeInTheDocument();
  });

  it('calls handleSelectTab when clicked', () => {
    // Arrange
    const mockHandleSelectTab = vi.fn();
    
    // Act
    render(
      <TabButton active={false} handleSelectTab={mockHandleSelectTab}>
        Tab Label
      </TabButton>
    );

    const tabButtonElement = screen.getByText('Tab Label');
    fireEvent.click(tabButtonElement);

    // Assert
    expect(mockHandleSelectTab).toHaveBeenCalledTimes(1);
  });

  it('applies "text-white" class when active is true', () => {
    // Arrange
    const mockHandleSelectTab = vi.fn();
    
    // Act
    render(
      <TabButton active={true} handleSelectTab={mockHandleSelectTab}>
        Tab Label
      </TabButton>
    );

    const tabLabelElement = screen.getByText('Tab Label');

    // Assert
    expect(tabLabelElement).toHaveClass('text-white');
  });

  it('applies "text-[#ADB7BE]" class when active is false', () => {
    // Arrange
    const mockHandleSelectTab = vi.fn();
    
    // Act
    render(
      <TabButton active={false} handleSelectTab={mockHandleSelectTab}>
        Tab Label
      </TabButton>
    );

    const tabLabelElement = screen.getByText('Tab Label');

    // Assert
    expect(tabLabelElement).toHaveClass('text-[#ADB7BE]');
  });
});