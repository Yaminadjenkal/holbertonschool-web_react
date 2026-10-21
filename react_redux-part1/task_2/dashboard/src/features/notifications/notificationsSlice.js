import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLatestNotification } from '../../utils/utils';

const API_BASE_URL = 'http://localhost:5173';

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await fetch(ENDPOINTS.notifications);
    const notifications = await response.json();

    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === 3) {
        return {
          ...notification,
          html: {
            __html: getLatestNotification(),
          },
        };
      }
      return notification;
    });

    return updatedNotifications;
  }
);

const initialState = {
  notifications: [],
  displayDrawer: true,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      console.log(
        `Notification ${action.payload} has been marked as read`
      );

      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },

    showDrawer: (state) => {
      state.displayDrawer = true;
    },

    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchNotifications.fulfilled,
      (state, action) => {
        state.notifications = action.payload;
      }
    );
  },
});

export const {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
