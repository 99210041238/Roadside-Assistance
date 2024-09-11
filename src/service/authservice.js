const API_URL = 'https://your-api-url.com/auth'; // Replace with your backend API

const AuthService = {
  // Login function with API call
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Store token or user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token); // Store token for auth
      return data;
    } else {
      throw new Error(data.message || 'Failed to log in');
    }
  },

  // Logout function
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  // Get the current user from localStorage
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  // Check if the user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return !!token;
  },

  // Optionally refresh the auth token if your backend supports it
  refreshToken: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await fetch(`${API_URL}/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // Update token
      return data.token;
    } else {
      throw new Error('Failed to refresh token');
    }
  }
};

export default AuthService;
