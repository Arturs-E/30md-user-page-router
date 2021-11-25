import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => (
  <>
    <div className="content-wrapper">
      <Header />
    </div>
    <Outlet />
  </>
);

export default Layout;
