import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

test("renders the home page without crashing", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  expect(await screen.findByText("Catch a Pokemon!")).toBeInTheDocument();
});
