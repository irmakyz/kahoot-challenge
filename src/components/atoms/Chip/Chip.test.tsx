import React from "react";
import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip.tsx";

const mockChipProps = {
  label: "Electric",
  color: "yellow",
};

test("renders Chip component with correct label and color", () => {
  render(<Chip {...mockChipProps} />);
  const chipElement = screen.getByText("Electric");
  expect(chipElement).toBeInTheDocument();
  expect(chipElement).toHaveStyle(`color: ${mockChipProps.color}`);
});
