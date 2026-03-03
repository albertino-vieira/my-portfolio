import { render, screen } from "@testing-library/react";
import CareerSection from "./CareerSection";

describe("CareerSection", () => {
  it("renders the career section with job details", () => {
    render(<CareerSection />);

    expect(screen.getByText("Career")).toBeInTheDocument();

    const jobTitles = [
      "Lead Full Stack Developer · Hitachi Digital Services",
      "Guest Lecturer · Escola Superior de Tecnologia e Gestão de Felgueiras",
      "Full Stack Developer · Runtime Revolution",
      "Full Stack Developer · Porto Editora",
    ];

    jobTitles.forEach((jobTitle) => {
      expect(screen.getByText(jobTitle)).toBeInTheDocument();
    });
  });
});
