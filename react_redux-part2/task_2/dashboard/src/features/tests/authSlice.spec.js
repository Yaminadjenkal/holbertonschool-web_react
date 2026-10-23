import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle login', () => {
    const action = login({
      email: 'test@test.com',
      password: 'password123',
    });

    const state = authReducer(initialState, action);

    expect(state.user.email).toBe('test@test.com');
    expect(state.user.password).toBe('password123');
    expect(state.isLoggedIn).toBe(true);
  });

  it('should handle logout', () => {
    const loggedState = {
      user: {
        email: 'test@test.com',
        password: 'password123',
      },
      isLoggedIn: true,
    };

    const state = authReducer(loggedState, logout());

    expect(state.user.email).toBe('');
    expect(state.user.password).toBe('');
    expect(state.isLoggedIn).toBe(false);
  });
});
