const API_URL = 'https://your-api-url.com/requests'; // Replace with your backend API

const RequestService = {
  // Create a roadside assistance request
  createRequest: async (requestData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Attach token for authenticated request
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Failed to create request');
    }
  },

  // Get request status by ID
  getRequestStatus: async (requestId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/status/${requestId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Failed to fetch request status');
    }
  },

  // Cancel an existing request
  cancelRequest: async (requestId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/cancel/${requestId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Failed to cancel request');
    }
  },

  // Fetch all active requests (for the user)
  getAllRequests: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/all`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Failed to fetch requests');
    }
  }
};

export default RequestService;
