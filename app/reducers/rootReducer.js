import { combineReducers } from 'redux';

import user from './userReducer';
import uiState from './uiStateReducer';

const rootReducer = combineReducers({
  user,
  uiState
});

export default rootReducer;
