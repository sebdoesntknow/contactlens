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

/* Start of Lenses related actions */

// add Left Lens
export const addLeftLens = () => {
  const id = uuid.v4();
  const m = moment();
  const now = m.format('YYYY-MM-DD');
  const expire = m.set('days', 30).format('YYYY-MM-DD');
  const days_left = 30; // need to calculate this by subtracting expire and now
  const code = randomStringGen(10);
  const editing = false;
  return {
    type: 'ADD_LEFT_LENS',
    id,
    eye: 'Left',
    open_date: now,
    expiry_date: expire,
    days: days_left,
    expired: false,
    code,
    editing
  };
}

// add Right Lens
export const addRightLens = () => {
  const id = uuid.v4();
  const m = moment();
  const now = m.format('YYYY-MM-DD');
  const expire = m.set('days', 30).format('YYYY-MM-DD');
  const days_left = 30;
  const code = randomStringGen(10);
  const editing = false;
  return {
    type: 'ADD_RIGHT_LENS',
    id,
    eye: 'Right',
    open_date: now,
    expiry_date: expire,
    days: days_left,
    expired: false,
    code,
    editing
  };
}

export const deleteLens = (id, i) => {
  return {
    type: 'DELETE_LENS',
    i,
    id
  };
};

export const updateLens = (updatedLens) => {
  return {
    type: 'UPDATE_LENS',
    updatedLens
  };
};

/* End of Lenses related actions */
///////////////////////////////////

////////////////////////////////////////
/* Start of Templates related actions */

export const setTemplate = (selectedTemplate) => {
  return {
    type: 'SET_TEMPLATE',
    selectedTemplate
  };
};

export const deleteTemplate = (id) => {
  console.log('Deleting template');
};

export const addTemplate = (newTemplate) => {
  console.log('adding new Template!');
};

/* End of Templates related actions */
//////////////////////////////////////

// Get local storage data
//export const getLensLocalData = JSON.parse(localStorage.getItem('contactlens'));

// Save state to localStorage
// export const saveStateToLocal = localStorage.
