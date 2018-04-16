const initialState = {
  processor: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'PING':
      return { ...state };
    default:
      return state;
  }
}
