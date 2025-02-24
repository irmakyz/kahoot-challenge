import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image.tsx";

const mockImageProps = {
  imageUrl: "https://example.com/pikachu.png",
  name: "Pikachu",
};

test("renders Image component with correct src and alt attributes", () => {
  render(<Image {...mockImageProps} />);
  const imageElement = screen.getByAltText("Pikachu");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", mockImageProps.imageUrl);
});
