import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItem } from "./ListItem.tsx";
import { MemoryRouter } from "react-router-dom";

const mockItem = {
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
};

test("renders ListItem component", () => {
  render(
    <MemoryRouter>
      <ListItem {...mockItem} />
    </MemoryRouter>
  );
  expect(screen.getByText("Pikachu")).toBeInTheDocument();
});
