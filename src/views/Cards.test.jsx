import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import Cards from './Cards';
import { act } from 'react-dom/test-utils';

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
