import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../actions/view';
import Question from '../components/Question';

const mapDispachToProps = (dispatch) => ({
  goHome: () => dispatch(setView('home')),
});

const mapStateToProps = (state) => ({
  answers: state.quiz.answers,
  questions: state.quiz.questions,
  answersSoFar: Object.keys(state.quiz.answers).length,
});

const Quiz = ({ answers, answersSoFar, goHome, questions }) => (
  <div>
    {questions.map(({ id, prompt, icon, answers}, index) =>
      <Question
        key={id}
        id={id}
        prompt={prompt}
        icon={icon}
        answers={answers}
        active={index === answersSoFar}
      />)
    }
  </div>
)

export default connect(mapStateToProps, mapDispachToProps)(Quiz);
