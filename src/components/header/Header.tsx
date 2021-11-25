import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="header__navigation">
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? 'navigation navigation--active' : 'navigation')}
      >
        Users
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? 'navigation navigation--active' : 'navigation')}
      >
        Posts
      </NavLink>
    </nav>
  </div>
);

export default Header;
