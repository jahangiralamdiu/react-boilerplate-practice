import { createSelector } from 'reselect';

/**
 * Direct selector to the testPage state domain
 */
const selectTestPageDomain = (state) => state.get('testPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestPage
 */

const makeSelectUserName = () => createSelector(
  selectTestPageDomain,
  (testState) => testState.get('username')
);

const makeSelectPassword = () => createSelector(
  selectTestPageDomain,
  (testState) => testState.get('password')
);

const makeSelectAuthStatus = () => createSelector(
  selectTestPageDomain,
  (testState) => testState.get('authstatus')
);

export {
  selectTestPageDomain,
  makeSelectUserName,
  makeSelectPassword,
  makeSelectAuthStatus
};
