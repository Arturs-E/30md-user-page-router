import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../../data/posts.json';
import PageNotFound from '../404/PageNotFound';

const UserPosts = () => {
  const { id } = useParams<'id'>();

  if (!id) {
    return null;
  }

  const postData = posts.filter((post) => post.userId === +id);

  if (!postData) {
    return <PageNotFound />;
  }

  return (
    <div className="post-wrapper">
      <section className="user-posts">
        {
          postData.map((post) => (
            <div className="user-posts__post">
              <h2>{post.title}</h2>
              <h5>{`PostID: ${post.id}`}</h5>
              <p>{post.body}</p>
            </div>
          ))
        }
      </section>
    </div>
  );
};

export default UserPosts;
