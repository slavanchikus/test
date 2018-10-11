export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_COMPLETE':
    case 'CREATE_USER_COMPLETE':
    case 'UPDATE_USER_COMPLETE': {
      return {
        ...action.payload
      };
    }
    default:
      break;
  }
  return state;
}
