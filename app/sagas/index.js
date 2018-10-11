import { fork } from 'redux-saga/effects';

import { userSagas } from './mainSagas';

export default function* sagas() {
  yield fork(userSagas);
}
