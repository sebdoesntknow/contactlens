// Reducer for lens templates component state
const lensTemplates = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEMPLATE':
      return state;
    case 'SET_TEMPLATE':
      const newState = state.map(template => {
        template.default = false;
        return template;
      });
      return [
        ...newState.slice(0, action.i),
        Object.assign({}, newState[action.i], {default: true}),
        ...newState.slice(action.i + 1)
      ];
    default:
      return state;
  }
};

export default lensTemplates;
