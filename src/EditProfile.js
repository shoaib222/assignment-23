import React from 'react';
import { Link } from 'react-router-dom';

const EditProfile = (props) => {
  const { id } = props.match.params;
  // Fetch the user data based on the 'id' parameter and pre-fill the form

  return (
    <div>
      <h1>Edit Profile</h1>
      {/* Add your user profile edit form here */}
      <Link to={`/profile/${id}`} className="btn btn-secondary mt-3">
        Cancel
      </Link>
    </div>
  );
};

export default EditProfile;