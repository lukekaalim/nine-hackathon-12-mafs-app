import { combineReducers } from 'redux'

import view from './view';
import quiz from './quiz';
import chat from './chat';
import users from './users';

const reducer = combineReducers({
  view,
  quiz,
  users,
  chat,
})

export default reducer;
