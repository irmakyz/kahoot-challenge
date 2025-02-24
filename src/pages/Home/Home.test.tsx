import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home.tsx';

const queryClient = new QueryClient();

test('renders Home component', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
  expect(screen.getByText('Catch a Pokemon!')).toBeInTheDocument();
});