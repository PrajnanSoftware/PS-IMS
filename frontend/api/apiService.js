import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
  return response.data;
};
