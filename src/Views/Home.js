import React from 'react';
import { connect } from 'react-redux'

import './Home.css';

import { setView } from '../actions/view';

const mapDispachToProps = (dispatch) => ({
  goToQuiz: () => dispatch(setView('quiz')),
  goToLogin: () => dispatch(setView('login')),
  goToBroken: () => dispatch(setView('kgjhgkjbgfnmajusd')),
});

const Home = ({ goToQuiz, goToLogin, goToBroken }) => (
  <div>
    <h2> Welcome Home </h2>
    <button className='loginButton viewButton' onClick={goToLogin}>Go to the Login</button>
    <button className='quizButton viewButton' onClick={goToQuiz}>Go to the Quiz</button>
    <button className='viewButton' onClick={goToBroken}>Go somewhere broken</button>
  </div>
);

export default connect(null, mapDispachToProps)(Home);
