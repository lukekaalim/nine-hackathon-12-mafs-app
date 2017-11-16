import React from 'react';
import { connect } from 'react-redux'

import './style.css';

import { setView } from '../../actions/view';
import { resetAnswers } from '../../actions/quiz';

const mapDispachToProps = (dispatch) => ({
  goToQuiz: () => {
    dispatch(resetAnswers());
    dispatch(setView('quiz'));
  },
  goToLogin: () => dispatch(setView('login')),
  goToBroken: () => dispatch(setView('kgjhgkjbgfnmajusd')),
  goToProfile: () => dispatch(setView('yourprofile')),
  goToCommittment: () => dispatch(setView('committment')),
});

const Home = ({ goToQuiz, goToLogin, goToBroken, goToProfile, goToCommittment }) => (
  <div>
    <h2> Testing Zone </h2>
    <button className='loginButton viewButton' onClick={goToLogin}>Go to the Login</button>
    <button className='quizButton viewButton' onClick={goToQuiz}>Go to the Quiz</button>
    <button className='viewButton' onClick={goToProfile}>Go to Your Profile</button>
    <button className='viewButton' onClick={goToCommittment}>Go to Committment</button>
    <button className='viewButton' onClick={goToBroken}>Go somewhere broken</button>
  </div>
);

export default connect(null, mapDispachToProps)(Home);
