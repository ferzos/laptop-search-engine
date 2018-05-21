const initialState = {
  processor: [],
  ram: [],
  storage: [],
  vga: [],
  ssd: undefined,
  brand: [],
  maxPrice: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PROCESSOR':
      return { ...state, processor: action.payload };
    case 'SELECT_RAM':
      return { ...state, ram: action.payload };
    case 'SELECT_STORAGE':
      return { ...state, storage: action.payload };
    case 'SELECT_GPU':
      return { ...state, vga: action.payload };
    case 'SELECT_SSD':
      return { ...state, ssd: action.payload };
    case 'SELECT_BRAND':
      return { ...state, brand: action.payload };
    case 'SELECT_MAX_PRICE':
      return { ...state, maxPrice: action.payload };
    case 'RESET_STATE':
      return {};
    default:
      return state;
  }
}
