import { render, screen } from '@testing-library/react';
import App from './App';

test('"Sign In"は表示しています', () => {
  render(<App />);
  expect(screen.getByText("Sign In")).toBeInTheDocument();
});
