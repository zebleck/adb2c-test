import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
