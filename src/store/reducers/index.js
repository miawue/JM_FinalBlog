/* eslint-disable */

import { articleReducer } from './articleReducer';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  articleReducer,
  userReducer,
});
