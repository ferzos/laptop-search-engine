const initialState = {
  isReady: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'PING':
      return { ...state, isReady: true };
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
    default:
      return state;
  }
}
