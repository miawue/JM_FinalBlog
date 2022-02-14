import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { userReducer } from './userReducer';
import { customArticleReducer } from './customArticleReducer';

export const rootReducer = combineReducers({
  articleReducer,
  userReducer,
  customArticleReducer,
});
