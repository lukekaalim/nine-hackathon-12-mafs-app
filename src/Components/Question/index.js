import React from 'react';
import { identity } from 'lodash';
import { connect } from 'react-redux'
import cx from 'classnames'

import { addAnswer } from '../../actions/quiz';

import './style.css';

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
  active,
  answers = DEFAULT_ANSWERS,
  answered = false,
  answerQuestion,
  onAnswer = identity,
}) => (
  <div
    className={cx({
      answered,
      active,
    }, 'root')}
  >
    <div className="questionTagLineContainer">
      <h3 className="questionTagline">Find your Lover ...</h3>
    </div>
    {icon && <img src={icon} alt={iconAlt || prompt} className="questionIcon" />}
    <div className="questionCurve"/>
    <div className="questionAnswerArea">
      <h4 className="questionPrompt">{prompt} {answered && '✓'}</h4>
      <div className="questionAnswerList">
        {answers.map(answer =>
          <button
            className="questionAnswer"
            key={answer}
            disabled={answered}
            onClick={() => {
              if (!answered) {
                onAnswer(answer);
                answerQuestion(id, answer);
              }
            }}
          >
          {answer}
          </button>)
        }
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispachToProps)(Question);
