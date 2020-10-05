import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerapp-f543a.firebaseio.com/'
});

export default instance;