import axios from 'axios';

const instance = axios.create({
  baseURL: '/', // replace with your API base URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default instance;
