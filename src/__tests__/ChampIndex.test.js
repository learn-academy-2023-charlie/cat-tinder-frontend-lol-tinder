import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ChampIndex from "../pages/ChampIndex";
import championsData from "../championsData";

describe("ChampIndex", () => {
  const mockChampions = championsData;

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/champShow/:id"
            element={<div>Mock Champ Show Page</div>}
          />
          <Route path="/" element={<ChampIndex />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it("renders all champion cards", () => {
    mockChampions.forEach((champion) => {
      const championCard = screen.getByAltText(
        `profile of a champ named ${champion.name}`
      );
      expect(championCard).toBeInTheDocument();
    });
  });

it("navigates to champion profile when clicking card or name", () => {
  mockChampions.forEach((champion) => {
    const championCard = screen.queryByAltText(
      `profile of a champ named ${champion.name}`
    );

    if (championCard) {
      fireEvent.click(championCard);
      const champShowPage = screen.getByText("Mock Champ Show Page");
      expect(champShowPage).toBeInTheDocument();
    }
  });
});
});
