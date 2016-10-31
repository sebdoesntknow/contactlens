// Reducer for lens templates component state
const lensTemplates = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEMPLATE':
      console.log('Adding clens template');
    default:
      return state;
  }
};

export default lensTemplates;
