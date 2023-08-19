import axios from 'axios';

export const $instance = axios.create({
  baseURL: `https://64da70cce947d30a260b45a1.mockapi.io`,
});
