import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="header__navigation">
      <Link to="/">Users</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  </div>
);

export default Header;
