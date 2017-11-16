export const ADD_ANSWER = 'ADD_ANSWER';

export const addAnswer = (questionId, answer) => ({
  type: ADD_ANSWER,
  questionId,
  answer,
});
