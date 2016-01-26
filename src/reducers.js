const initialState = {
  pinsLeft: 10,
};

export default function rootReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'SOMETHING':
      return state;
    default:
      return state;
  }
}
