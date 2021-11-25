import React from 'react';
import { Link } from 'react-router-dom';
import users from '../../data/users.json';

const Users = () => (
  <section className="users-wrapper">
    <div className="users">
      <table>
        <tr>
          <th>User ID</th>
          <th>Name</th>
        </tr>
        {
          users.map((user) => (
            <tr>
              <td>
                <Link to={`${user.id}`}>
                  {user.id}
                </Link>
              </td>
              <td>
                <Link to={`${user.id}`}>
                  {user.name}
                </Link>
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  </section>
);

export default Users;
