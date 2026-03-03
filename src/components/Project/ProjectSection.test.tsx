import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';

import { expect, test, vi } from 'vitest';

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null;
  rootMargin = ``;
  thresholds: readonly number[] = [];

  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn();
  unobserve = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver;

test(`IntersectionObserver`, () => {
  expect(new IntersectionObserver((entries) => entries)).toBeInstanceOf(
    IntersectionObserver
  );
});

describe('ProjectsSection', () => {
  it('renders ProjectsSection component with default All tag', () => {
    render(<ProjectsSection />);

    const allTagElement = screen.getByText('All');
    expect(allTagElement).toHaveClass('text-white border-primary-500');
  });

  it('filters projects when a tag is clicked', () => {
    render(<ProjectsSection />);

    const webTagElement = screen.getByText('Web');
    fireEvent.click(webTagElement);

    const projectTitleElement = screen.getByText('New Case Study Coming Soon');
    expect(projectTitleElement).toBeInTheDocument();
  });

  it('renders ProjectTag components', () => {
    render(<ProjectsSection />);

    const webTagElement = screen.getByText('Web');
    const mobileTagElement = screen.getByText('Mobile');
    expect(webTagElement).toBeInTheDocument();
    expect(mobileTagElement).toBeInTheDocument();
  });

  it('renders ProjectCard components', () => {
    render(<ProjectsSection />);

    const project1TitleElement = screen.getByText('New Case Study Coming Soon');
    const project1DescriptionElement = screen.getByText(
      'Currently preparing a detailed case study from a recent enterprise project.'
    );
    expect(project1TitleElement).toBeInTheDocument();
    expect(project1DescriptionElement).toBeInTheDocument();
  });
});
