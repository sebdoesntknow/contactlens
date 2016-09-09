import uuid from 'uuid';
import moment from 'moment';

// add Lens
export const addLeftLens = () => {
  const jsDate = new Date();
  const now = moment(jsDate, 'MM-DD-YYYY');
  const expire = now.add(30, 'days');
  const days_left = 'none' //expire.subtract(now);
  console.log('Moments for now, expire and days_left', now, expire, days_left);
  return {
    type: 'ADD_LEFT_LENS',
    id: uuid.v4(),
    eye: 'Left',
    open_date: now.date(),
    expiry_date: expire.date(),
    days: days_left
  };
}

export const addRightLens = () => {
  return {
    type: 'ADD_RIGHT_LENS',
    id: uuid.v4(),
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
