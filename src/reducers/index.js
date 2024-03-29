import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import articleReducer from './articleReducer.js';

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootReducer;
