import React from 'react';

const notifications = [
  'Anna liked your post.',
  'Tom sent you a friend request.',
  'Your story got 50 views.',
  'Mark mentioned you in a comment.',
];

const Notifications = () => (
  <div className="container mt-4">
    <h3>Notifications</h3>
    <ul className="list-group">
      {notifications.map((note, index) => (
        <li className="list-group-item" key={index}>{note}</li>
      ))}
    </ul>
  </div>
);

export default Notifications;
