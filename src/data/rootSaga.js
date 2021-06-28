import { call, fork, all } from 'redux-saga/effects';

export default function* () {
yield all([
 call(welcomeSaga),
 fork(authSaga),
 fork(todoSaga),
 fork(alertsSaga)
 ]);
}
