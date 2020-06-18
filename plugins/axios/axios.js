import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.43.201:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  proxyHeaders: false,
  credentials: false
});
