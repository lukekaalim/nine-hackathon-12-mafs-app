import { ADD_ANSWER } from '../actions/quiz';

const initalState = {
  answers: {},
};

const reduceQuiz = (state = initalState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.answer,
        }
      }
    default:
      return state;
  }
};

export default reduceQuiz;
