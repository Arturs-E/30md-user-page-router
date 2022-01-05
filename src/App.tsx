import React from 'react';
import './App.scss';
import {
  BrowserRouter, HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Posts from './pages/posts/Posts';
import Post from './pages/post/Post';
import PageNotFound from './pages/404/PageNotFound';
import Users from './pages/users/Users';
import User from './pages/user/User';
import UserPosts from './pages/userPosts/UserPosts';

const App = () => (
  // Change to BrowserRouter for normal workflow
  <HashRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="users" />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
          <Route path="users/:id/posts" element={<UserPosts />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  </HashRouter>
);

export default App;
