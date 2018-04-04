export const fetchText = text => {
  return {
    type: 'FETCH_TEXT',
    payload: text,
  };
};
