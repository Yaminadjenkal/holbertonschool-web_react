import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../app/store';
import Header from './Header';

test('checks that the Header contains the Holberton Logo', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(
    screen.getByAltText(/holberton logo/i)
  ).toBeInTheDocument();
});

test('checks that the Header contains the correct heading', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(
    screen.getByRole('heading', {
      name: /school dashboard/i,
    })
  ).toBeInTheDocument();
});
