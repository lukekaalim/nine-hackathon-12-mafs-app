export const LOG_USER_IN = 'LOG_USER_IN';
export const UPDATE_USER = 'UPDATE_USER';

export const logUserIn = (firstName, lastName, age, image, userId) => ({
  type: LOG_USER_IN,
  firstName,
  lastName,
  age,
  image,
  userId,
});

export const updateUser = (userId, updatedValues) => ({
  type: UPDATE_USER,
  userId,
  updatedValues,
});
