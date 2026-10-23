import notificationsReducer, {
  markNotificationAsRead,
} from '../notifications/notificationsSlice';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    loading: false,
  };

  test('should return initial state', () => {
    expect(
      notificationsReducer(undefined, { type: '' })
    ).toEqual(initialState);
  });

  test('should remove notification when markNotificationAsRead is dispatched', () => {
    const state = {
      notifications: [
        { id: 1, value: 'New course available' },
        { id: 2, value: 'New resume available' },
      ],
      loading: false,
    };

    const result = notificationsReducer(
      state,
      markNotificationAsRead(1)
    );

    expect(result.notifications).toHaveLength(1);
    expect(result.notifications[0].id).toBe(2);
  });
});
