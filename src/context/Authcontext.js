import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap your app and manage authentication
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds authenticated user
  const [loading, setLoading] = useState(true); // Manages loading state during auth checks

  // Simulate fetching user authentication status from API/localStorage
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    setLoading(false);
  }, []);

  // Login function: call backend for real implementation
  const login = (email, password) => {
    // Simulate an API call
    const mockUser = { email }; 
    localStorage.setItem('user', JSON.stringify(mockUser)); // Store user info locally
    setUser(mockUser);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user'); // Clear user info from localStorage
    setUser(null);
  };

  // Auth context value to provide to components
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user, // Return true if the user is logged in
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <p>Loading...</p>} {/* Renders loading state until auth status is determined */}
    </AuthContext.Provider>
  );
};
