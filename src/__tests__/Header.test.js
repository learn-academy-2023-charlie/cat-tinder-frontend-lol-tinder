import { render, screen } from "@testing-library/react";
import Header from "../components/Header.js";
import eeriebg from "../assets/eeriebg.png";

describe("<Header />", () => {
  it("renders to the browser", () => {
    render(<Header />);
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(<Header />);
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the title text", () => {
    render(<Header />);
    const titleText = screen.getByText("League of Legends Tinder");
    expect(titleText).toBeInTheDocument();
  });

  it("has a clickable logo link", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
  it("has the correct background image", () => {
      render(<Header />);
      const header = screen.getByRole("navigation");
      const backgroundImage = header.style.backgroundImage;
      const expectedImage = `url(${eeriebg})`;

      expect(backgroundImage).toBe(expectedImage);
});
});