import React from 'react';
import './App.scss';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Posts from './pages/posts/Posts';
import Post from './pages/post/Post';
import PageNotFound from './pages/404/PageNotFound';
import Users from './pages/users/Users';
import User from './pages/user/User';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="users" />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
