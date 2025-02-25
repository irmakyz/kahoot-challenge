import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button.tsx";
import { BUTTON_SIZES } from "./constants";

test("renders Button component", () => {
  render(
    <Button size={BUTTON_SIZES.LARGE} onClick={() => {}}>
      Click Me
    </Button>
  );
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("calls onClick handler when clicked", () => {
  const handleClick = jest.fn();
  render(
    <Button size={BUTTON_SIZES.LARGE} onClick={handleClick}>
      Click Me
    </Button>
  );
  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
