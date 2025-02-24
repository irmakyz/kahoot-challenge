import React from "react";
import { render, screen } from "@testing-library/react";
import { StatusBar } from "./StatusBar.tsx";

const mockStatusBarProps = {
  name: "Health",
  value: 75,
};

test("renders StatusBar component with correct name and value", () => {
  render(<StatusBar {...mockStatusBarProps} />);
  expect(screen.getByText("Health")).toBeInTheDocument();
  expect(screen.getByText("75")).toBeInTheDocument();
});

test("renders StatusBar component with correct width", () => {
  render(<StatusBar {...mockStatusBarProps} />);
  const fillElement = screen.getByTestId("status-bar");
  expect(fillElement).toHaveStyle(`width: 75%`);
});
