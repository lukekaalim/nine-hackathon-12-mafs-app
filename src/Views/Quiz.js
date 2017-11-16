import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../actions/view';
import Question from '../components/Question';

const questions = [
  {
    id: 0,
    prompt: 'What comes first',
  },
  {
    id: 1,
    prompt: 'Would you relocate for love',
  },
  {
    id: 2,
    prompt: 'Do you like Dogs',
    answers: [
      'small ones',
      'big ones',
    ],
  },
];

const mapDispachToProps = (dispatch) => ({
  goHome: () => dispatch(setView('home')),
});

const mapStateToProps = (state) => ({
  answers: state.quiz.answers,
  answersSoFar: Object.keys(state.quiz.answers).length,
});

const Quiz = ({ answers, answersSoFar, goHome }) => (
  <div>
    <h2>Quiz</h2>
    Questions Answered: {answersSoFar}
    <br />
    Questions Total: {questions.length}
    {questions.map(({ id, prompt, icon, answers}) =>
      <Question key={id} id={id} prompt={prompt} icon={icon} answers={answers} />)
    }
    { answersSoFar === questions.length &&
      <div>
        Your Done!
        <button onClick={goHome}>Go Home</button>
      </div>
    }
  </div>
)

export default connect(mapStateToProps, mapDispachToProps)(Quiz);
