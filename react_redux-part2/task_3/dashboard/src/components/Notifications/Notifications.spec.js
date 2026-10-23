import { StyleSheetTestUtils } from 'aphrodite';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Notifications from './Notifications';
import notificationsReducer, {
  markNotificationAsRead,
} from '../../features/notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

jest.mock('../../utils/utils', () => ({
  getLatestNotification: jest.fn(),
}));

describe('Notifications component', () => {
  beforeEach(() => {
    getLatestNotification.mockReturnValue(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });

  const defaultNotifications = [
    {
      id: 1,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      type: 'urgent',
      html: {
        __html: getLatestNotification(),
      },
    },
  ];

  const renderWithRedux = ({
    notifications = defaultNotifications,
  } = {}) => {
    const store = configureStore({
      reducer: {
        notifications: notificationsReducer,
      },
      preloadedState: {
        notifications: {
          notifications,
        },
      },
    });

    return {
      store,
      ...render(
        <Provider store={store}>
          <Notifications />
        </Provider>
      ),
    };
  };

  test('renders notification title', () => {
    renderWithRedux();

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders close button', () => {
    renderWithRedux();

    expect(
      screen.getByRole('button', {
        name: /close/i,
      })
    ).toBeInTheDocument();
  });

  test('displays three notification items', () => {
    renderWithRedux();

    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(3);
  });

  test('displays empty message when no notifications exist', () => {
    renderWithRedux({
      notifications: [],
    });

    expect(
      screen.getByText(/no new notifications for now/i)
    ).toBeInTheDocument();

    expect(
      screen.queryAllByRole('listitem')
    ).toHaveLength(0);
  });

  test('always displays notification title', () => {
    renderWithRedux();

    expect(
      screen.getByText(/your notifications/i)
    ).toBeInTheDocument();
  });

  test('removes notification when clicked', () => {
    const { store } = renderWithRedux();

    fireEvent.click(
      screen.getAllByRole('listitem')[0]
    );

    expect(
      store.getState().notifications.notifications
    ).toHaveLength(2);

    expect(
      store
        .getState()
        .notifications.notifications.some(
          (notification) => notification.id === 1
        )
    ).toBe(false);
  });

  test('updates list when notification is removed', () => {
    const { store } = renderWithRedux({
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'Notification 1',
        },
      ],
    });

    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(1);

    act(() => {
      store.dispatch(
        markNotificationAsRead(1)
      );
    });

    expect(
      screen.queryAllByRole('listitem')
    ).toHaveLength(0);
  });

  test('maintains content when notifications do not change', () => {
    renderWithRedux({
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'Notification 1',
        },
        {
          id: 2,
          type: 'urgent',
          value: 'Notification 2',
        },
      ],
    });

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent(
      'Notification 1'
    );
  });
});

