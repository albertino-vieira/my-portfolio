import { render, screen } from "@testing-library/react";
import CareerSection from "./CareerSection";

describe("CareerSection", () => {
  it("renders the career section with job details", () => {
    // Arrange
    render(<CareerSection />);

    // Assert
    const careerSectionTitle = screen.getByText("Career");
    expect(careerSectionTitle).toBeInTheDocument();

    const jobTitles = [
      "Fullstack Developer at RuntimeRevolution (October2021-September2023, Remote)",
      "Fullstack Developer at PortoEditora (January2020-September2021, Porto,Portugal)",
      "Fullstack Developer (September2018-December2019, Lousada,Portugal)",
    ];

    jobTitles.forEach((jobTitle) => {
      const jobTitleElement = screen.getByText(jobTitle);
      expect(jobTitleElement).toBeInTheDocument();

    });
  });
});
