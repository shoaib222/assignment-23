import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more sample users here...
  ]);

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <Link to="/create-user" className="btn btn-primary mb-3">
        Create User
      </Link>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> - {user.email}
            <div>
              <Link to={`/edit-user/${user.id}`} className="btn btn-sm btn-primary me-2">
                Edit
              </Link>
              <Link to={`/profile/${user.id}`} className="btn btn-sm btn-secondary">
                View Profile
              </Link>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="btn btn-sm btn-danger ms-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;