import React from 'react';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  // Add your logic to handle form submission and user creation here...

  return (
    <div>
      <h1>Create User</h1>
      {/* Add your user creation form here */}
      <Link to="/users" className="btn btn-secondary mt-3">
        Cancel
      </Link>
    </div>
  );
};

export default CreateUser;