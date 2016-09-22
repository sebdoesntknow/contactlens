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
        days: action.days
      }];
    case 'ADD_RIGHT_LENS':
      return [...state, {
        id: action.id,
        eye: action.eye,
        open_date: action.open_date,
        expiry_date: action.expiry_date,
        days: action.days
      }];
    default:
      return state;
  }
  return state;
};

export default lenses;
