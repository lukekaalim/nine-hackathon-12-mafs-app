import BabyImg from '../assets/baby.png';
import CareerImg from '../assets/career.png';
import HouseImg from '../assets/house.png';

const questions = {
  0: {
    categoryId: 0,
    prompt: 'Do you want children?',
    followupQuestionIdsByAnswerIndex: [
      1,
      2,
    ],
  },
  1: {
    categoryId: 0,
    prompt: 'How do you feel about a partner who already children?',
    answers: [
      'comfortable',
      'uncomfortable',
    ],
    followupQuestionIdsByAnswerIndex: [
      1,
      2,
    ],
  }
  2: {
    categoryId: 1,
    prompt: 'How do you feel about a partner who already children?',
  }
};

const categories = {
  0: {
    image: BabyImg,
    shortName: 'Family',
  },
  1: {
    image: CareerImg,
    shortName: 'Career',
  },
  2: {
    image: HouseImg,
    shortName: 'Home',
  },
}
