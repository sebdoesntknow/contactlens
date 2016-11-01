// Reducer for lens templates component state
const lensTemplates = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEMPLATE':
      return state;
    case 'SET_TEMPLATE':
      let new_state = state.map(template => {
        return Object.assign({}, template, {default: false});
      });
      return [
        ...new_state.slice(0, action.i),
        Object.assign({}, new_state[action.i], {default: true}),
        ...new_state.slice(action.i + 1)
      ];
    default:
      return state;
  }
};

export default lensTemplates;
