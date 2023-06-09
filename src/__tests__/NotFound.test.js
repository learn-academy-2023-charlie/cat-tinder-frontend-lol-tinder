import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound.js";
import notfoundbg from "../assets/notfoundbg.png";

describe("<NotFound />", () => {
  it("renders the not found message", () => {
    render(<NotFound />);
    const notFoundMessage = screen.getByText("There's nothing to see here");
    expect(notFoundMessage).toBeInTheDocument();
  });

  it("has a background image", () => {
    render(<NotFound />);
    const notFoundDiv = screen.getByTestId("notfound-div");
    expect(notFoundDiv).toHaveStyle(`background-image: url(${notfoundbg})`);
  });
});
