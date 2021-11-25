import React from 'react';
import './User.scss';
import { useNavigate, useParams } from 'react-router-dom';
import users from '../../data/users.json';
import PageNotFound from '../404/PageNotFound';
import Button from '../../components/buttons/Button';

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
        <table className="user__table">
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Address</th>
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
            <th>Phone</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{website}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{company.name}</td>
          </tr>
        </table>
      </div>
      <div className="user__buttons-wrapper">
        <Button title="Go Back" clickHandler={() => navigate(-1)} />
        <Button title="See Blog Posts" clickHandler={() => navigate('posts')} />
      </div>
    </section>
  );
};

export default User;
