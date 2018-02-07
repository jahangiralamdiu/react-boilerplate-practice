import { take, takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectUserName, makeSelectPassword } from './selectors';
import { SUBMIT_LOGIN } from './constants';
import { setAuthStatus } from './actions';

export function* doLogin() {
  // Select username from store
  const username = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassword());
  console.log('Username: ' + username + ' Password: '+ password)
  try {
    if (username === 'abc' && password === '1234') {
      yield put(setAuthStatus(true));
    } else {
      yield put(setAuthStatus(false));
    }
    yield put(reposLoaded());
  } catch (err) {

  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* login() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SUBMIT_LOGIN, doLogin);
}
