export const getUser = id => ({
  type: 'GET_USER',
  id
});

export const createUser = id => ({
  type: 'CREATE_USER',
  id
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
});
