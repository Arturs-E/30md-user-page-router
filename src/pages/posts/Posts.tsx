import React from 'react';
import './Posts.scss';
import { Link } from 'react-router-dom';
import posts from '../../data/posts.json';

const Posts = () => (
  <section className="posts-wrapper">
    <div className="posts">
      <table>
        <tr>
          <th>Post ID</th>
          <th>Post Title</th>
        </tr>
        {
          posts.map((post) => (
            <tr>
              <td>
                <Link to={`${post.id}`}>
                  {post.id}
                </Link>
              </td>
              <td>
                <Link to={`${post.id}`}>
                  {post.title}
                </Link>
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  </section>
);

export default Posts;
