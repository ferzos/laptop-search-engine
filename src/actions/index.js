import axios from 'axios';

const API = 'http://eggman.herokuapp.com/api';

export const ping = () => {
  axios.get(`${API}/ping`);
  return { type: 'PING' };
};

export const selectProcessor = processor => {
  return { type: 'SELECT_PROCESSOR', payload: processor };
};

export const selectRam = ram => {
  return { type: 'SELECT_RAM', payload: ram };
};

export const selectStorage = storage => {
  return { type: 'SELECT_STORAGE', payload: storage };
};

export const selectGPU = gpu => {
  return { type: 'SELECT_GPU', payload: gpu };
};

export const selectSSD = ssd => {
  return { type: 'SELECT_SSD', payload: ssd };
};

export const selectBrand = brand => {
  return { type: 'SELECT_BRAND', payload: brand };
};

export const selectMaxPrice = maxPrice => {
  return { type: 'SELECT_MAX_PRICE', payload: maxPrice };
};
