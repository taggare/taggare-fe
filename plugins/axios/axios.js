import axios from 'axios';

export default axios.create({
  baseURL: 'https://intense-hollows-88095.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
  proxyHeaders: false,
  credentials: false,
});
