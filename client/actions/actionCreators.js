import uuid from 'uuid';
import moment from 'moment';

// Random string generator for uri codes
let randomStringGen = (len, charSet) => {
  charSet = charSet || 'ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghijklmnopkrstuvwxyz1234567890_';
  let result = '';

  for (let i = 0; i < len; i++) {
    let position = Math.floor(Math.random () * charSet.length);
    result += charSet[position];
  }
  return result;
};

// add Left Lens
export const addLeftLens = () => {
  const m = moment();
  const id = uuid.v4();
  const now = m.format('dddd, MMMM Do YYYY');
  const expire = m.set('days', 30).format('dddd, MMMM Do YYYY');
  const days_left = 30; // need to calculate this by subtracting expire and now
  const code = randomStringGen(10);
  return {
    type: 'ADD_LEFT_LENS',
    id,
    eye: 'Left',
    open_date: now,
    expiry_date: expire,
    days: days_left,
    expired: false,
    code
  };
}

// add Right Lens
export const addRightLens = () => {
  const m = moment();
  const id = uuid.v4();
  const now = m.format('dddd, MMMM Do YYYY');
  const expire = m.set('days', 30).format('dddd, MMMM Do YYYY');
  const days_left = 30;
  const code = randomStringGen(10);
  return {
    type: 'ADD_RIGHT_LENS',
    id,
    eye: 'Right',
    open_date: now,
    expiry_date: expire,
    days: days_left,
    expired: false,
    code
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
