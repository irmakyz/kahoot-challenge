import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItemInfo } from "./ListItemInfo.tsx";
import "@testing-library/jest-dom";

const mockListItemInfoProps = {
  name: "Pikachu",
  types: ["Electric"],
  abilities: ["Static"],
  baseExperience: 112,
  stats: [{ name: "Speed", value: 90 }],
};

test("renders ListItemInfo component with correct name and description", () => {
  render(<ListItemInfo {...mockListItemInfoProps} />);
  expect(screen.getByText("Pikachu")).toBeInTheDocument();
  expect(screen.getByText("Static")).toBeInTheDocument();
  expect(screen.getByText("Speed")).toBeInTheDocument();
  expect(screen.getByText("Electric")).toBeInTheDocument();
});