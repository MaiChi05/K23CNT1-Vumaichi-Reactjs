import { render, screen } from '@testing-library/react';
import App from './vmcApp';

test('renders learn react link', () => {
  render(<vmcApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
