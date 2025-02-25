import React from "react";
import { render, screen } from "@testing-library/react";
import { ItemStats } from "./ItemStats.tsx";

const mockItemStatsProps = {
  icon: "https://example.com/icon.png",
  label: "Speed",
  values: [90, 80, 70],
};

test("renders ItemStats component with correct label and values", () => {
  render(<ItemStats {...mockItemStatsProps} />);
  expect(screen.getByText("Speed")).toBeInTheDocument();
  expect(screen.getByText("90")).toBeInTheDocument();
  expect(screen.getByText("80")).toBeInTheDocument();
  expect(screen.getByText("70")).toBeInTheDocument();
});
