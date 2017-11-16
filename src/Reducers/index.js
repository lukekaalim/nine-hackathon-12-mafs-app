import { combineReducers } from 'redux'

import view from './view';
import quiz from './quiz';
import users from './users';

const reducer = combineReducers({
  view,
  quiz,
  users,
})

export default reducer;
