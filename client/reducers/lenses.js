// Lenses state Reducer

const lenses = (state = [], action) => {
  console.log('Lenses will update');
  console.log(action.type, state);
  return state;
};

export default lenses;
