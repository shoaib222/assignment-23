import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { id } = props.match.params;
  // Fetch the user data based on the 'id' parameter and display the profile information

  return (
    <div>
      <h1>User Profile</h1>
      {/* Display user profile information here */}
      <Link to={`/edit-profile/${id}`} className="btn btn-primary mt-3">
        Edit Profile
      </Link>
      <Link to="/users" className="btn btn-secondary mt-3 ms-2">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Profile;