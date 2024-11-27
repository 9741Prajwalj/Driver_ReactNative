// /services/authService.js

import axios from 'axios';  // You can use axios or fetch to make API requests

const API_URL = 'https://your-backend-url.com/api';  // Replace with your actual API endpoint

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });

    // Check if login is successful, and return user data or token
    if (response.status === 200) {
      return response.data;  // Data could be user info or auth token
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error logging in', error);
    throw error;  // Propagate the error
  }
};
