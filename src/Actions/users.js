export const LOG_USER_IN = 'LOG_USER_IN';

export const logUserIn = (firstName, lastName, age, image, userId) => ({
  type: LOG_USER_IN,
  firstName,
  lastName,
  age,
  image,
  userId,
});
