import notificationsReducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from '../notifications/notificationsSlice';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  test('should return initial state', () => {
    expect(
      notificationsReducer(undefined, { type: '' })
    ).toEqual(initialState);
  });

  test('should remove notification when markNotificationAsRead is dispatched', () => {
    const state = {
      notifications: [
        { id: 1, value: 'test 1' },
        { id: 2, value: 'test 2' },
      ],
      displayDrawer: true,
    };

    const result = notificationsReducer(
      state,
      markNotificationAsRead(1)
    );

    expect(result.notifications).toHaveLength(1);
    expect(result.notifications[0].id).toBe(2);
  });

  test('should show drawer', () => {
    const state = {
      notifications: [],
      displayDrawer: false,
    };

    const result = notificationsReducer(
      state,
      showDrawer()
    );

    expect(result.displayDrawer).toBe(true);
  });

  test('should hide drawer', () => {
    const state = {
      notifications: [],
      displayDrawer: true,
    };

    const result = notificationsReducer(
      state,
      hideDrawer()
    );

    expect(result.displayDrawer).toBe(false);
  });
});
