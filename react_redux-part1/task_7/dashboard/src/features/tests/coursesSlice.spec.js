import coursesReducer, {
  fetchCourses,
} from '../courses/coursesSlice';

import { logout } from '../auth/authSlice';

describe('coursesSlice', () => {
  const initialState = {
    courses: [],
  };

  test('should return initial state', () => {
    expect(
      coursesReducer(undefined, { type: '' })
    ).toEqual(initialState);
  });

  test('should populate courses when fetchCourses is fulfilled', () => {
    const action = {
      type: fetchCourses.fulfilled.type,
      payload: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
      ],
    };

    const state = coursesReducer(initialState, action);

    expect(state.courses).toHaveLength(2);
    expect(state.courses[0].name).toBe('ES6');
  });

  test('should reset courses when logout is dispatched', () => {
    const loggedState = {
      courses: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
      ],
    };

    const state = coursesReducer(
      loggedState,
      logout()
    );

    expect(state.courses).toEqual([]);
  });
});
