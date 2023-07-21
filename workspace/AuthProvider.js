import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Implement Azure AD B2C login logic here
    // Set the authenticated user in the state
  };

  const logout = () => {
    // Implement Azure AD B2C logout logic here
    // Clear the authenticated user from the state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
