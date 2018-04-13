import axios from 'axios';

const API = 'http://eggman.herokuapp.com/api';

export const ping = () => {
  axios.get(`${API}/ping`).then(response => console.log(response.data));
  return { type: 'PING' };
};
