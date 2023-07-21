import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const SecurePage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Secure Page</h2>
      <p>Welcome, {user.email}!</p>
    </div>
  );
};

export default SecurePage;
