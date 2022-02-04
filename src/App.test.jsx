import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('renders loading', () => {
  render(<App />);
  const loading = screen.getByText(/hold on.../i);
  expect(loading).toBeInTheDocument();
});

test('renders detail when clicking windy', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const item = await screen.findByText('The Windy');
  userEvent.click(item);
  const name = await screen.findByText('Spanish Name: Viento');
  expect(name).toBeInTheDocument();
});
