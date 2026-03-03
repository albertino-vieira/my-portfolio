import { render, screen } from "@testing-library/react";
import CareerSection from "./CareerSection";

describe("CareerSection", () => {
  it("renders the experience section with key job details", () => {
    render(<CareerSection />);

    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText(/Hitachi Digital Services/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Escola Superior de Tecnologia e Gestão de Felgueiras/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Runtime Revolution/i)).toBeInTheDocument();
  });
});
