import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';

import { expect, test, vi } from 'vitest';

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null;
  rootMargin = '';
  thresholds: readonly number[] = [];

  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn();
  unobserve = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver;

test('IntersectionObserver', () => {
  expect(new IntersectionObserver((entries) => entries)).toBeInstanceOf(IntersectionObserver);
});

describe('ProjectsSection', () => {
  it('renders ProjectsSection component with default All tag', () => {
    render(<ProjectsSection />);

    const allTagElement = screen.getByText('All');
    expect(allTagElement).toHaveClass('text-white border-primary-500');
  });

  it('filters projects when a tag is clicked', () => {
    render(<ProjectsSection />);

    const mobileTagElement = screen.getByText('Mobile');
    fireEvent.click(mobileTagElement);

    const projectTitleElement = screen.getByText('Mobile Product Work');
    expect(projectTitleElement).toBeInTheDocument();
  });

  it('renders ProjectTag components', () => {
    render(<ProjectsSection />);

    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
  });

  it('renders ProjectCard components', () => {
    render(<ProjectsSection />);

    expect(screen.getByText('Next.js Dashboard')).toBeInTheDocument();
    expect(
      screen.getByText(/Interactive dashboard with authentication/i),
    ).toBeInTheDocument();
  });
});
