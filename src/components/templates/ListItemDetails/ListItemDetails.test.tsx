import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItemDetails } from "./ListItemDetails.tsx";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

const mockItemDetails = {
  name: "Pikachu",
  types: ["Electric"],
  stats: [{ name: "Speed", value: 90 }],
  abilities: ["Static"],
  baseExperience: 112,
  imageUrl: "https://example.com/pikachu.png",
};

test("renders ListItemDetails component", () => {
  render(
    <MemoryRouter>
      <ListItemDetails {...mockItemDetails} />
    </MemoryRouter>
  );
  expect(screen.getByText("Pikachu")).toBeInTheDocument();
  expect(screen.getByText("Electric")).toBeInTheDocument();
  expect(screen.getByText("Speed")).toBeInTheDocument();
  expect(screen.getByText("Static")).toBeInTheDocument();
});
