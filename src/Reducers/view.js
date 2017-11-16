import { SET_VIEW } from '../actions/view';

const initalState = {
  currentView: 'home',
};


const reduceView = (state = initalState, action) => {
  switch(action.type) {
    case SET_VIEW:
      return {
        ...state,
        currentView: action.view,
      }
    default:
      return state;
  }
};

export default reduceView;
