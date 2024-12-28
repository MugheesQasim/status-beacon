import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Website Status heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Website Status/i);
  expect(headingElement).toBeInTheDocument();
});