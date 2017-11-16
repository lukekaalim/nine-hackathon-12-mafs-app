import { ADD_ANSWER, RESET_ANSWERS } from '../actions/quiz';

import BabyImg from '../assets/baby.png';
import CareerImg from '../assets/career.png';
import HouseImg from '../assets/house.png';

const questions = [
  {
    id: 0,
    icon: BabyImg,
    prompt: 'Do you want children?',
  },
  {
    id: 1,
    icon: CareerImg,
    prompt: 'What comes first?',
    answers: [
      'Love',
      'Career',
    ],
  },
  {
    id: 2,
    icon: HouseImg,
    prompt: 'Would you relocate for love?',
  },
];

const initalState = {
  questions,
  answers: {},
  answersSoFar: 0,
};

const reduceQuiz = (state = initalState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        answersSoFar: Object.keys(state.answers).length + 1,
        answers: {
          ...state.answers,
          [action.questionId]: action.answer,
        }
      }
    case RESET_ANSWERS:
      return {
        ...state,
        answersSoFar: 0,
        answers: {},
      }
    default:
      return state;
  }
};

export default reduceQuiz;
