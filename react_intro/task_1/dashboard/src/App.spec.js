import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
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
});
