import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home.js";
import another from "../assets/another.png";

describe("Home Component", () => {
  it("renders the component", () => {
    const { getByTestId } = render(<Home />);

    const homeDiv = getByTestId("home-div");
    expect(homeDiv).toBeInTheDocument();
  });

  it("has a background image", () => {
    const { getByTestId } = render(<Home />);

    const homeDiv = getByTestId("home-div");
    expect(homeDiv).toBeInTheDocument();

    const computedStyle = window.getComputedStyle(homeDiv);
    expect(computedStyle.backgroundImage).toContain(`url(${another})`);
  });
});
