import { render, screen } from '@testing-library/react';
import App from './App';

test('"ログイン"は表示しています', () => {
  render(<App />);
  expect(screen.getByText("ログイン")).toBeInTheDocument();
});
