/*
 *
 * TestPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SUBMIT_LOGIN,
  SET_AUTH_STATUS,
} from './constants';

const initialState = fromJS({});

function testPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.name);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case SET_AUTH_STATUS:
      return state.set('authstatus', action.status);
    default:
      return state;
  }
}

export default testPageReducer;
