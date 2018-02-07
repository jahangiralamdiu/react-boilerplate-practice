/*
 *
 * TestPage actions
 *
 */
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SUBMIT_LOGIN,
  SET_AUTH_STATUS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUserName(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  }
};

export function submitLogin() {
  return {
    type: SUBMIT_LOGIN,
  }
}

export function setAuthStatus(status) {
  return {
    type: SET_AUTH_STATUS,
    status,
  }
}
