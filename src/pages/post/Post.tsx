import React from 'react';
import './Post.scss';
import { useNavigate, useParams } from 'react-router-dom';
import posts from '../../data/posts.json';
import PageNotFound from '../404/PageNotFound';
import SinglePost from '../../components/singlePost/SinglePost';
import Button from '../../components/buttons/Button';

const Post = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  if (!id) {
    return null;
  }

  const postData = posts.find((post) => post.id === +id);

  if (!postData) {
    return <PageNotFound />;
  }

  const { title, body, userId } = postData;

  return (
    <section className="post-wrapper">
      <SinglePost title={title} id={`UserID: ${userId}`} body={body} />
      <Button title="Go Back" clickHandler={() => navigate(-1)} />
    </section>
  );
};

export default Post;
