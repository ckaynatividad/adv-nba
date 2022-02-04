import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Cards from './Cards';

test('render first item ', async () => {
  render(
    <MemoryRouter>
      <Cards />;
    </MemoryRouter>
  );
  const item = await screen.findByText('The Windy');
  expect(item).toBeInTheDocument();
});

test('renders all list items', async () => {
  render(
    <MemoryRouter>
      <Cards />
    </MemoryRouter>
  );
  await waitForElementToBeRemoved(screen.getAllByText('hold on...'));
  const listItem = await screen.findAllByRole('heading');
  expect(listItem).toHaveLength(61);
});
