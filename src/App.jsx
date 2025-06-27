import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Notifications from './pages/Notifications';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  </Router>
);

export default App;
