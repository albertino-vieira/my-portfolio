import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

const mockProject = {
  imgUrl: "mock-image-url",
  title: "Mock Project",
  description: "Mock project description",
  gitUrl: "mock-git-url",
  previewUrl: "mock-preview-url",
};

test("renders ProjectCard component with correct data", () => {
  render(
    <ProjectCard
      imgUrl={mockProject.imgUrl}
      title={mockProject.title}
      description={mockProject.description}
      gitUrl={mockProject.gitUrl}
      previewUrl={mockProject.previewUrl}
    />,
  );

  expect(screen.getByText(mockProject.title)).toBeInTheDocument();
  expect(screen.getByText(mockProject.description)).toBeInTheDocument();

  expect(screen.getByLabelText(/source code/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/live preview/i)).toBeInTheDocument();
});
