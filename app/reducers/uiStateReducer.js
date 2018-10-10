const initialState = {
  isFetchingUser: false
};

export default function uiStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
    case 'CREATE_USER': {
      return {
        ...state,
        isFetchingUser: true
      };
    }
    case 'GET_USER_FAILED':
    case 'GET_USER_COMPLETE':
    case 'CREATE_USER_FAILED':
    case 'CREATE_USER_COMPLETE': {
      return {
        ...state,
        isFetchingUser: false
      };
    }
    default:
      break;
  }
  return state;
}
