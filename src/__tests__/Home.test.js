import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";

describe("Home Component", () => {
  it("renders the component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const homeDiv = screen.getByTestId("home-div");
    expect(homeDiv).toBeInTheDocument();
  });

  it("has a background image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const homeDiv = screen.getByTestId("home-div");
    expect(homeDiv).toBeInTheDocument();

    const computedStyle = window.getComputedStyle(homeDiv);
    expect(computedStyle.backgroundImage).toContain(`url(another.png)`);
  });

  it("has a link that takes you to champIndex to meet all the champions", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: "Meet the Champions" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/champIndex");
  });
});
