/* eslint-disable */

import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from '../types';

const initialState = {
  user: {
    email: null,
    token: null,
    username: null,
    image: null,
  },
  response: {
    errors: null,
    user: null,
  },
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, error: null, response: action.payload };

    case REGISTER_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
