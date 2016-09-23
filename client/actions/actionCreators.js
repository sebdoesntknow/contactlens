import uuid from 'uuid';
import moment from 'moment';

// add Left Lens
export const addLeftLens = () => {
  const m = moment();
  const now = m.format('dddd, MMMM Do YYYY');
  const expire = m.set('days', 30).format('dddd, MMMM Do YYYY');
  const days_left = 30; // need to calculate this by subtracting expire and now
  return {
    type: 'ADD_LEFT_LENS',
    id: uuid.v4(),
    eye: 'Left',
    open_date: now,
    expiry_date: expire,
    days: days_left
  };
}

// add Right Lens
export const addRightLens = () => {
  const m = moment();
  const now = m.format('dddd, MMMM Do YYYY');
  const expire = m.set('days', 30).format('dddd, MMMM Do YYYY');
  const days_left = 30; // need to calculate this by subtracting expire and now
  return {
    type: 'ADD_RIGHT_LENS',
    id: uuid.v4(),
    eye: 'Right',
    open_date: now,
    expiry_date: expire,
    days: days_left
  };
}

export const deleteLens = (id, i) => {
  return {
    type: 'DELETE_LENS',
    i,
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
