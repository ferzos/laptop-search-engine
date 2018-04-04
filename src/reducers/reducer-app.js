const initialState = {
  headingText: 'Welcome to Ferzos React Template',
  copyrightText: 'Click me',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TEXT':
      return { ...state, copyrightText: action.payload };
    default:
      return state;
  }
}
