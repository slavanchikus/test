import {
  fork, call, put, takeEvery
} from 'redux-saga/effects';

import apiClient from '../api/api';


function* getUser({ id }) {
  try {
    const payload = yield call(apiClient.getUser, id);
    yield put({ type: 'GET_USER_COMPLETE', payload });
  } catch (error) {
    yield put({ type: 'GET_USER_ERROR' });
    throw error;
  }
}

function* watchGetUserRequest() {
  yield takeEvery('GET_USER', getUser);
}


function* createUser({ id }) {
  try {
    const payload = yield call(apiClient.createUser, id);
    yield put({ type: 'CREATE_USER_COMPLETE', payload });
  } catch (error) {
    yield put({ type: 'CREATE_USER_ERROR' });
    throw error;
  }
}

function* watchCreateUserRequest() {
  yield takeEvery('CREATE_USER', createUser);
}


export function* audioSagas() {
  yield fork(watchGetUserRequest);
  yield fork(watchCreateUserRequest);
}
