import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import '@testing-library/jest-dom';

test('renders Loader component', () => {
  render(<Loader />);
  expect(screen.getByTestId('loader')).toHaveClass('loader');
});