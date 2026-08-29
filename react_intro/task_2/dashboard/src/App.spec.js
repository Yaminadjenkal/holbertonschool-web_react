import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests - Task 2', () => {
  test('renders the h1 element with School dashboard text', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { name: /school dashboard/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct text in App-body and App-footer paragraphs', () => {
    render(<App />);

    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(/copyright/i);

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders an image element', () => {
    render(<App />);
    const imgElement = screen.getByAltText(/holberton logo/i);
    expect(imgElement).toBeInTheDocument();
  });

  // ⭐ NEW TESTS FOR TASK 2 ⭐

  test('renders 2 input elements (email and password)', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length).toBe(1); // email is a textbox
    expect(passwordInput).toBeInTheDocument(); // password is not a textbox role
  });

  test('renders 2 label elements with Email and Password text', () => {
    render(<App />);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with OK text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
