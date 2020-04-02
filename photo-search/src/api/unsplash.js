import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID Pxr57vX7HJtjc3SIYX1BYkoUZsWiALAiLSr3eWBB4Yk'
  }
});