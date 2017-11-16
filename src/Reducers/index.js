import { combineReducers } from 'redux'

import view from './view';
import quiz from './quiz';

const reducer = combineReducers({
  view,
  quiz,
})

export default reducer;
