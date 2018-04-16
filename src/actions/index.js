import axios from 'axios';

const API = 'http://eggman.herokuapp.com/api';

export const ping = () => {
  axios.get(`${API}/ping`);
  return { type: 'PING' };
};
