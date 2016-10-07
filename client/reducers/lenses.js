// Lenses state Reducer

const lenses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LEFT_LENS':
      return [...state, {
        id: action.id,
        eye: action.eye,
        open_date: action.open_date,
        expiry_date: action.expiry_date,
        days: action.days,
        expired: action.expired,
        code: action.code,
        editing: action.editing
      }];
    case 'ADD_RIGHT_LENS':
      return [...state, {
        id: action.id,
        eye: action.eye,
        open_date: action.open_date,
        expiry_date: action.expiry_date,
        days: action.days,
        expired: action.expired,
        code: action.code,
        editing: action.editing
      }];
    case 'DELETE_LENS':
      return [
        // get the start until the index of the lens
        // we are removing
        ...state.slice(0, action.i),
        // and return the rest of the state array
        ...state.slice(action.i + 1)
      ];
    case 'UPDATE_LENS':
      return state.map(lens => {
        if (lens.id === action.updatedLens.id) {
          return Object.assign({}, lens, action.updatedLens);
        }
        return lens;
      });
    default:
      return state;
  }
  return state;
};

export default lenses;
