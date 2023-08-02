import React from 'react';
import { Link } from 'react-router-dom';

const EditUser = (props) => {
  const { id } = props.match.params;
  // Fetch the user data based on the 'id' parameter and pre-fill the form

  return (
    <div>
      <h1>Edit User</h1>
      {/* Add your user edit form here */}
      <Link to="/users" className="btn btn-secondary mt-3">
        Cancel
      </Link>
    </div>
  );
};

export default EditUser;