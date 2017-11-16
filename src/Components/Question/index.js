import React from 'react';
import { connect } from 'react-redux'

import { addAnswer } from '../../actions/quiz';

const DEFAULT_ANSWERS = [
  'yes',
  'no',
];

const mapStateToProps = (state, props) => ({
  answered: state.quiz.answers[props.id],
});

const mapDispachToProps = (dispatch) => ({
  answerQuestion: (questionId, answer) => dispatch(addAnswer(questionId, answer)),
});

const Question = ({
  id,
  prompt,
  icon,
  iconAlt,
  answers = DEFAULT_ANSWERS,
  answered = false,
  answerQuestion,
}) => (
  <div>
    {icon && <img src={icon} alt={iconAlt || prompt} />}
    <h3>{prompt} {answered && <i>Done</i>}</h3>
    {answers.map(answer =>
      <button
        key={answer}
        disabled={answered}
        onClick={() => !answered && answerQuestion(id, answer)}
      >
      {answer}
      </button>)
    }
  </div>
);

export default connect(mapStateToProps, mapDispachToProps)(Question);
