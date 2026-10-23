import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Login from './Login';
import authReducer from '../../features/auth/authSlice';

const renderLogin = () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });

  return render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

test('Verify whether the login include 2 label, 2 inputs and 1 button', () => {
  renderLogin();

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /ok/i })
  ).toBeInTheDocument();
});

test('checks that inputs get focused when their label are clicked', async () => {
  const user = userEvent.setup();

  renderLogin();

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  await user.click(screen.getByText(/email/i));
  expect(emailInput).toHaveFocus();

  await user.click(screen.getByText(/password/i));
  expect(passwordInput).toHaveFocus();
});

test('checks that submit button is enabled only with valid email and password', async () => {
  const user = userEvent.setup();

  renderLogin();

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', {
    name: /ok/i,
  });

  expect(submitButton).toBeDisabled();

  await user.type(emailInput, 'test@example.com');
  expect(submitButton).toBeDisabled();

  await user.type(passwordInput, '12345678');
  expect(submitButton).toBeEnabled();
});
