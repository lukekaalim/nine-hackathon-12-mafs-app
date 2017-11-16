import kunnalImg from '../assets/users/kunaal.jpg';

console.log(kunnalImg);

const initalState = {
  myId: 0,
  allUsers: {
    0: {
      image: kunnalImg,
      firstName: 'Kunaal',
      lastName: 'Ramchandani',
      age: '34',
      bio: '"I will make your proud." - note to self',
    },
    1: {

    },
    2: {

    },
  },
};

const reduceUsers = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reduceUsers;
