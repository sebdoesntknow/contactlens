// Lenses state Reducer

const lenses = (state = [], action) => {
  //console.log('Lenses will update');
  switch (action.type) {
    case 'ADD_LEFT_LENS':
      return [...state, {
        id: action.id,
        eye: action.eye,
        open_date: action.open_date,
        expiry_date: action.expiry_date,
        days: action.days,
        expired: action.expired,
        code: action.code
      }];
    case 'ADD_RIGHT_LENS':
      return [...state, {
        id: action.id,
        eye: action.eye,
        open_date: action.open_date,
        expiry_date: action.expiry_date,
        days: action.days,
        expired: action.expired,
        code: action.code
      }];
    case 'DELETE_LENS':
      return [
        // get the start until the index of the lens
        // we are removing
        ...state.slice(0, action.i),
        // and return the rest of the state array
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
};

export default lenses;
