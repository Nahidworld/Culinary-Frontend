import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export const registerUser = async (data: { email: string; password: string }) => {
  return axios.post(`${API_URL}/register`, data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return axios.post(`${API_URL}/login`, data);
};
