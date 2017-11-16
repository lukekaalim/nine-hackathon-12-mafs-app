import { ADD_ANSWER } from '../actions/quiz';

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
    prompt: 'Would you relocate for love',
  },
  {
    id: 2,
    icon: HouseImg,
    prompt: 'Do you like Dogs',
    answers: [
      'small ones',
      'big ones',
    ],
  },
];

const initalState = {
  questions,
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
