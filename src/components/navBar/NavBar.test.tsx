import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders the Navbar component", () => {
    render(<NavBar />);

    // Check if the Navbar component is rendered
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });
});
