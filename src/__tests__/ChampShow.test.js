import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ChampShow from "../pages/ChampShow";
import championsData from "../championsData";

describe("ChampShow", () => {
  const mockChamps = championsData;
  const champId = 1;
  const currentChamp = mockChamps.find((champ) => champ.id === champId);

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[`/champ/${champId}`]}>
        <Routes>
          <Route
            path="/champ/:id"
            element={<ChampShow champs={mockChamps} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });

  it("renders champ information correctly", () => {
    expect(screen.getByText(currentChamp.name)).toBeInTheDocument();
    expect(
      screen.getByAltText(`profile of a champ named ${currentChamp.name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Age: ${currentChamp.age}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Ability: ${currentChamp.ability}`)
    ).toBeInTheDocument();
  });

  it("renders a Back to Index button", () => {
    const backButton = screen.getByRole("link", { name: "Back to Index" });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute("href", "/champIndex");
  });
});
