import React from 'react';
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login';

import { setView } from '../../actions/view';
import { logUserIn } from '../../actions/users';

import './style.css';

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
  goToLoginPage: () => dispatch(setView('yourprofile')),
});

const Login = ({ isLoggedIn, onLogInSuccess, goToLoginPage }) => (
  <div className="loginRoot">
    <h1 className="loginTitle"> Start Your Journey </h1>
    <FacebookLogin
      appId="143970709693445"
      autoLoad={false}
      cssClass="loginFacebookButton"
      fields="first_name,last_name,email,picture,age_range"
      callback={onLogInSuccess}
      textButton="Sign up with Facebook"
    />
    <div className="loginSeperator">Or</div>
    <form onSubmit={(event) => {
      event.preventDefault();
      event.stopPropagation();
      goToLoginPage();
      return false;
    }} className="loginForm">
      <label className="loginTextLabel">Enter name</label>
      <input className="loginTextInput" type="text" />
        <label className="loginTextLabel">Enter password</label>
      <input className="loginTextInput" type="password" />
        <label className="loginTextLabel">Reenter password</label>
      <input className="loginTextInput" type="password" />
      <input className="loginSubmit" type="submit" value="Sign Up" />
    </form>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
