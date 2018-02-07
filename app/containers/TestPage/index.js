/**
 *
 * TestPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUserName, makeSelectPassword, makeSelectAuthStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeUserName, changePassword, submitLogin } from './actions';

export class TestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const status = this.props.authstatus ? 'Valid credential' : '';
    return (
      <div>
        <Helmet>
          <title>TestPage</title>
          <meta name="description" content="Description of TestPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <form onSubmit={this.props.onSubmitForm}>
            <input type="text" name="username" value={this.props.username} onChange={this.props.onChangeUserName} />
            <input type="password" name="password" value={this.props.password} onChange={this.props.onChangePassword} />
            <input type="submit" onSubmit={this.props.onSubmitForm} value="Login" />
        </form>
        <p>{status}</p>
      </div>
    );
  }
}

TestPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  authstatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUserName(),
  password: makeSelectPassword(),
  authstatus: makeSelectAuthStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUserName: (evt)=> dispatch(changeUserName(evt.target.value)),
    onChangePassword: (evt)=> dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitLogin());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testPage', reducer });
const withSaga = injectSaga({ key: 'testPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TestPage);
