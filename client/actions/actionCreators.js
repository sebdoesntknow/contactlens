// add Lens
export const addLens = (id, eye, open_date, expiry_date, days) => {
  return {
    type: 'ADD_LENS',
    eye,
    open_date,
    expiry_date,
    days
  };
}

export const deleteLens = (id) => {
  return {
    type: 'DELETE_LENS',
    id
  };
};

export const activateEditing = (id, field) => {
  return {
    type: 'LENS_ACTIVATE_EDIT',
    id,
    field
  };
};

export const editLens = (id, value) => {
  return {
    type: 'EDIT_LENS',
    id,
    value
  };
};
