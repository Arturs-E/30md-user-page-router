import React from 'react';
import './Post.scss';
import { useParams } from 'react-router-dom';
import posts from '../../data/posts.json';
import PageNotFound from '../404/PageNotFound';

const Post = () => {
  const { id } = useParams<'id'>();

  if (!id) {
    return null;
  }

  const postData = posts.find((post) => post.id === +id);

  if (!postData) {
    return <PageNotFound />;
  }

  const { title, body, userId } = postData;

  return (
    <div className="post-wrapper">
      <section className="post">
        <h2>{title}</h2>
        <h5>{`UserID: ${userId}`}</h5>
        <p>{body}</p>
      </section>
    </div>
  );
};

export default Post;
