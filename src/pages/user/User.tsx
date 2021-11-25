import React from 'react';
import './User.scss';
import { useNavigate, useParams } from 'react-router-dom';
import users from '../../data/users.json';
import PageNotFound from '../404/PageNotFound';

const User = () => {
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  if (!id) {
    return null;
  }

  const userData = users.find((user) => user.id === +id);

  if (!userData) {
    return <PageNotFound />;
  }

  const {
    name, address, company, email, phone, username, website,
  } = userData;

  return (
    <section className="user-wrapper">
      <div className="user">
        <table>
          <tr>
            <th>Parameter</th>
            <th>Data</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              {address.street}
              {', '}
              {address.suite}
              {', '}
              {address.city}
              {', '}
              {address.zipcode}
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{website}</td>
          </tr>
          <tr>
            <td>Company</td>
            <td>{company.name}</td>
          </tr>
        </table>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('posts')}>See blog posts</button>
    </section>
  );
};

export default User;
