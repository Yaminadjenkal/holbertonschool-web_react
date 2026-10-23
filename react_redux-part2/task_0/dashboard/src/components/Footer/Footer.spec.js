import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Footer from './Footer';
import authReducer from '../../features/auth/authSlice';

const renderFooter = (isLoggedIn = false) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState: {
      auth: {
        isLoggedIn,
        email: '',
        password: '',
      },
    },
  });

  return render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
};

test('renders the correct copyright text', () => {
  renderFooter();

  const currentYear = new Date().getFullYear();

  expect(
    screen.getByText(
      `Copyright ${currentYear} - Holberton School`
    )
  ).toBeInTheDocument();
});

test('does not display Contact us when user is logged out', () => {
  renderFooter(false);

  expect(
    screen.queryByText(/contact us/i)
  ).not.toBeInTheDocument();
});

test('display Contact us when user is logged in', () => {
  renderFooter(true);

  expect(
    screen.getByText(/contact us/i)
  ).toBeInTheDocument();
});
