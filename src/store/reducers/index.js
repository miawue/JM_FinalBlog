/* eslint-disable */

import { articleReducer } from './articleReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { customArticleReducer } from './customArticleReducer';

export const rootReducer = combineReducers({
  articleReducer,
  userReducer,
  customArticleReducer,
});
