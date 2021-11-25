import React, { useState } from 'react';
import './Users.scss';
import { Link, useSearchParams } from 'react-router-dom';
import users from '../../data/users.json';

const Users = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const user = searchParams.get('user');

  const showAllUsers = () => (
    users.map((item) => (
      <tr key={item.id}>
        <td>
          <Link to={`${item.id}`}>
            {item.id}
          </Link>
        </td>
        <td>
          <Link to={`${item.id}`}>
            {item.name}
          </Link>
        </td>
      </tr>
    ))
  );

  const showFilteredUsers = () => (
    users
      .filter((value) => value.name.toLowerCase().includes(user!.toLowerCase()))
      .map((item) => (
        <tr key={item.id}>
          <td>
            <Link to={`${item.id}`}>
              {item.id}
            </Link>
          </td>
          <td>
            <Link to={`${item.id}`}>
              {item.name}
            </Link>
          </td>
        </tr>
      ))
  );

  return (
    <section className="users-wrapper">
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          setSearchParams({ user: inputValue });
        }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Search Users</button>
        </form>
      </div>
      <div className="users">
        <table className="result-table">
          <tr>
            <th>User ID</th>
            <th>Name</th>
          </tr>
          {
            user === null
              ? (showAllUsers())
              : (showFilteredUsers())
          }
        </table>
      </div>
    </section>
  );
};

export default Users;
