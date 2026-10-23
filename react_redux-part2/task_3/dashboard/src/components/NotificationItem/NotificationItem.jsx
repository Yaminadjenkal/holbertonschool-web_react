import React from 'react';

class NotificationItem extends React.PureComponent {
  render() {
    const {
      id,
      type,
      value,
      markAsRead,
    } = this.props;

    return (
      <li
        data-notification-type={type}
        style={{
          color:
            type === 'urgent'
              ? 'red'
              : 'blue',
        }}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
