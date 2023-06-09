import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer.js";
import eeriebg from "../assets/eeriebg.png";

describe("<Footer />", () => {
  it("renders to the browser", () => {
    render(<Footer />);
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  })
   it("has a clickable link", () => {
     render(<Footer />);
     const linkElement = screen.getByRole("link", { name: /Go back to Home/i });
     expect(linkElement).toHaveAttribute("href", "/");
   });
    it("has the correct background image", () => {
      render(<Footer />);
      const footer = screen.getByRole("navigation");
      const backgroundImage = footer.style.backgroundImage;
      const expectedImage = `url(${eeriebg})`;

      expect(backgroundImage).toBe(expectedImage);
    });
})