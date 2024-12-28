import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the heading with "Status Checking website"', () => {
    render(<App />);

    // Check if the heading is present
    const heading = screen.getByText(/Status Checking website/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the Signup component', () => {
    render(<App />);

    // Check if the Signup component is rendered
    const signupForm = screen.getByText(/Signup Page/i);
    expect(signupForm).toBeInTheDocument();
  });
});
