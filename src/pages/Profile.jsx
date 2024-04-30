import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Profile = () => {
  const { userName } = useAuth();

  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
};

export default Profile;
