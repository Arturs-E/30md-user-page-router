import React from 'react';
import './UserPosts.scss';
import { useNavigate, useParams } from 'react-router-dom';
import posts from '../../data/posts.json';
import PageNotFound from '../404/PageNotFound';
import SinglePost from '../../components/singlePost/SinglePost';
import Button from '../../components/buttons/Button';

const UserPosts = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

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
        <div className="user-posts__post-wrapper">
          {
            postData.map((post) => (
              <SinglePost title={post.title} id={`PostID: ${post.id}`} body={post.body} />
            ))
          }
        </div>
      </section>
      <Button title="Go Back" clickHandler={() => navigate(-1)} />
    </div>
  );
};

export default UserPosts;
