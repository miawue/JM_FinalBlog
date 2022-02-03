/* eslint-disable */

import {
  LOG_OUT,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from '../types';

const initialState = {
  user: {
    email: JSON.parse(localStorage.getItem('user'))?.email,
    token: JSON.parse(localStorage.getItem('user'))?.token,
    username: JSON.parse(localStorage.getItem('user'))?.username,
    image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
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

    case UPDATE_USER:
      return { ...state, loading: true };

    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case UPDATE_USER_ERROR:
      return { ...state, loading: false, user: action.payload };

    case LOG_OUT:
      localStorage.removeItem('user');
      return { ...state, user: {} };

    default:
      return state;
  }
};
