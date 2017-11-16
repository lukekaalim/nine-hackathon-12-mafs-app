import React from 'react';
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';

import { setView } from '../../actions/view';
import { logUserIn } from '../../actions/users';

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onLogInSuccess: (response) => {
    dispatch(logUserIn(
      response['first_name'],
      response['last_name'],
      response['age_range'].min,
      response['picture'].data.url,
      response['id'],
    ));
    dispatch(setView('yourprofile'))
  },
});

const Login = ({ isLoggedIn, onLogInSuccess }) => (
  <div>
    <h1> Log up to get swiping! </h1>
    <FacebookLogin
      appId="143970709693445"
      autoLoad={true}
      fields="first_name,last_name,email,picture,age_range"
      callback={onLogInSuccess}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
