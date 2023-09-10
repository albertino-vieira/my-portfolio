import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

// Define mock data for testing
const mockProject = {
  imgUrl: "mock-image-url",
  title: "Mock Project",
  description: "Mock project description",
  gitUrl: "mock-git-url",
  previewUrl: "mock-preview-url",
};

test("renders ProjectCard component with correct data", () => {
    const { container } = render(
        <ProjectCard
          imgUrl={mockProject.imgUrl}
          title={mockProject.title}
          description={mockProject.description}
          gitUrl={mockProject.gitUrl}
          previewUrl={mockProject.previewUrl}
        />
      );

  // Check if the project title is rendered
  const titleElement = screen.getByText(mockProject.title);
  expect(titleElement).toBeInTheDocument();

  // Check if the project description is rendered
  const descriptionElement = screen.getByText(mockProject.description);
  expect(descriptionElement).toBeInTheDocument();

  // Simulate hover over the container element to trigger the link rendering
  const containerElement = container.firstChild;
  if(containerElement)
  fireEvent.mouseEnter(containerElement );

  // Simulate mouse leave to check that the link disappears
  if(containerElement)
  fireEvent.mouseLeave(containerElement);
  const codeLinkAfterMouseLeave = screen.queryByRole("link", {
    name: /View Code/i,
  });
  expect(codeLinkAfterMouseLeave).toBeNull();
  
  // Simulate mouse leave to check that the link disappears
  if(containerElement)
  fireEvent.mouseLeave(containerElement);
  const codeLinkPreviewAfterMouseLeave = screen.queryByRole("link", {
    name: /Preview/i,
  });
  expect(codeLinkPreviewAfterMouseLeave).toBeNull();
});
