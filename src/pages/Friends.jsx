import React from 'react';
import friends from '../mock/mockFriends';

const Friends = () => (
  <div className="container mt-4">
    <h3>Friends</h3>
    <ul className="list-group">
      {friends.map((friend, idx) => (
        <li className="list-group-item d-flex justify-content-between" key={idx}>
          {friend.name}
          <span className={`badge ${friend.online ? 'bg-success' : 'bg-secondary'}`}>
            {friend.online ? 'Online' : 'Offline'}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Friends;
