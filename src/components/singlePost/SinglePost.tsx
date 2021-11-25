import React, { FC } from 'react';
import './SinglePost.scss';

interface SinglePostProps {
  title: string;
  id: string;
  body: string;
}

const SinglePost:FC<SinglePostProps> = ({ title, id, body }) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <h5 className="post__userid">{id}</h5>
    <p className="post__content">{body}</p>
  </div>
);

export default SinglePost;
