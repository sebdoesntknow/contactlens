// Lenses state Reducer

const lenses = (state = [], action) => {
  console.log('Lenses will update');
  switch (action.type) {
    case 'ADD_LEFT_LENS':
      console.log(action);
    default:
      return state;
  }
  return state;
};

export default lenses;
