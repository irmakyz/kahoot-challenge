import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./List";
import { MemoryRouter } from "react-router-dom";

const mockListItems = [
  {
    id: 1,
    name: "Pikachu",
    types: ["Electric"],
    description: "A sample description",
    power: 55,
    level: 5,
    ability: "Static",
    experience: 112,
    imageUrl: "https://example.com/pikachu.png",
    detailsURL: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    id: 2,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    description: "A sample description",
    power: 49,
    level: 5,
    ability: "Overgrow",
    experience: 64,
    imageUrl: "https://example.com/bulbasaur.png",
    detailsURL: "https://pokeapi.co/api/v2/pokemon/2/",
  },
];

test("renders List component", () => {
  render(
    <MemoryRouter>
      <List listItems={mockListItems} />
    </MemoryRouter>
  );
  expect(screen.getByText("Pikachu")).toBeInTheDocument();
  expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
});
