import {
  fork, call, put, takeEvery
} from 'redux-saga/effects';

import { getUser } from '../api/api';

function* fetchUser({ test }) {
  try {
    const payload = yield call(getUser, test);
    yield put({ type: 'GET_USER_COMPLETE', payload });
  } catch (error) {
    yield put({ type: 'GET_USER_ERROR' });
    throw error;
  }
}

function* watchUserRequest() {
  yield takeEvery('GET_USER', fetchUser);
}


export function* audioSagas() {
  yield fork(watchUserRequest);
}
