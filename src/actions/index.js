export const selectProcessor = processor => {
  return { type: 'SELECT_PROCESSOR', payload: processor };
};

export const selectRam = ram => {
  return { type: 'SELECT_RAM', payload: ram };
};

export const selectStorage = storage => {
  return { type: 'SELECT_STORAGE', payload: storage };
};

export const selectGPUBrand = gpu => {
  return { type: 'SELECT_GPUBrand', payload: gpu };
};

export const selectGPUVersion = gpu => {
  return { type: 'SELECT_GPUVersion', payload: gpu };
};

export const selectSSD = ssd => {
  return { type: 'SELECT_SSD', payload: ssd };
};

export const selectBrand = brand => {
  return { type: 'SELECT_BRAND', payload: brand };
};

export const selectMaxPrice = maxPrice => {
  if (maxPrice === 21000000) {
    return { type: 'SELECT_MAX_PRICE', payload: undefined };
  } else {
    return { type: 'SELECT_MAX_PRICE', payload: maxPrice };
  }
};

export const resetState = () => {
  return { type: 'RESET_STATE', payload: '' };
};
