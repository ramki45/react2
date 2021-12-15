import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/For Team of 3-5 members/i);
  expect(linkElement).toBeInTheDocument();
});
