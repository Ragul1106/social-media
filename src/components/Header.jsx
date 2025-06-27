import React from 'react';
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    <span className="navbar-brand">SocialApp</span>
    <ul className="navbar-nav me-auto">
      <li className="nav-item"><Link className="nav-link" to="/">Feed</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/friends">Friends</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/chat">Chat</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/notifications">Notifications</Link></li>
    </ul>
    <NotificationBell />
  </nav>
);

export default Header;
