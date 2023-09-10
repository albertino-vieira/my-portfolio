import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';

import { expect, test, vi } from 'vitest'

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin: string = ``
  thresholds: readonly number[] = []

  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

test(`IntersectionObserver`, () => {
  expect(new IntersectionObserver((entries) => entries)).toBeInstanceOf(
    IntersectionObserver
  )
})

describe('ProjectsSection', () => {
  // Mock projects data

  it('renders ProjectsSection component with default All tag', () => {
    render(<ProjectsSection />);
    
    // Check if the default tag is "All"
    const allTagElement = screen.getByText('All');
    console.log(allTagElement);
    expect(allTagElement).toHaveClass('text-white border-primary-500');
  });

 it('filters projects when a tag is clicked', () => {
    render(<ProjectsSection />);
    
    // Simulate clicking on a specific tag
    const webTagElement = screen.getByText('Web');
    fireEvent.click(webTagElement);
    
    // Check if the filtered projects are displayed
    const projectTitleElement = screen.getByText('Coming Soon');
    expect(projectTitleElement).toBeInTheDocument();
  });

  it('renders ProjectTag components', () => {
    render(<ProjectsSection />);
    
    // Check if ProjectTag components are rendered
    const webTagElement = screen.getByText('Web');
    const mobileTagElement = screen.getByText('Mobile');
    expect(webTagElement).toBeInTheDocument();
    expect(mobileTagElement).toBeInTheDocument();
  });

  it('renders ProjectCard components', () => {
    render(<ProjectsSection />);
    
    // Check if ProjectCard components are rendered
    const project1TitleElement = screen.getByText('Coming Soon');
    const project1DescriptionElement = screen.getByText('Project coming soon');
    expect(project1TitleElement).toBeInTheDocument();
    expect(project1DescriptionElement).toBeInTheDocument();
  });
});