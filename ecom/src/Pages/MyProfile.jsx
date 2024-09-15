import React from 'react';

const MyProfile = () => {
  // Retrieve the user data from localStorage and parse it
  const userdata = JSON.parse(localStorage.getItem('user'));  
  
  // Check if userdata exists before trying to access properties
  if (!userdata) {
    return <p>No user data available. Please login first.</p>;
  }

  return (
    <div>
      <h1>My Profile</h1>
      {/* Display the user data */}
      <p><strong>Username:</strong> {userdata.username}</p>
      <p><strong>Password:</strong> {userdata.password}</p> {/* Be careful with displaying sensitive information */}
      <p><strong>Token:</strong> {userdata.token}</p>
    </div>
  );
};

export default MyProfile;
