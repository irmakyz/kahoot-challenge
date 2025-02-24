import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";

const queryClient = new QueryClient();

test("renders Details component", async () => {
  const encodedURL = encodeURIComponent("https://pokeapi.co/api/v2/pokemon/1/");
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/details/" + encodedURL]}>
        <Routes>
          <Route path='/details/:detailsURL' element={<Details />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
  expect( screen.getByTestId("details")).toBeInTheDocument();
});
