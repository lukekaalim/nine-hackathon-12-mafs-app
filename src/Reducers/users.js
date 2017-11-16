import kunnalImg from '../assets/users/kunaal.jpg';

console.log(kunnalImg);

const initalState = {
  myId: 0,
  matchedId: 1,
  allUsers: {
    0: {
      image: kunnalImg,
      firstName: 'Kunaal',
      lastName: 'Ramchandani',
      distance: 0,
      age: '34',
      bio: '"I will make your proud." - note to self',
    },
    1: {
      image: kunnalImg,
      firstName: 'Michelle',
      distance: 0,
      lastName: '',
      age: '21',
      bio: 'huh',
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
