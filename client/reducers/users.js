// users state Reducer

const users = (state = [], action) => {
  console.log('The users will update');
  console.log(action.type, state);
  return state;
};

export default users;
