export const ADD_ANSWER = 'ADD_ANSWER';
export const RESET_ANSWERS = 'RESET_ANSWERS';

export const addAnswer = (questionId, answer) => ({
  type: ADD_ANSWER,
  questionId,
  answer,
});

export const resetAnswers = () => ({
  type: RESET_ANSWERS,
})
