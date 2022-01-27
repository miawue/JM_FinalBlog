/* eslint-disable */

import { REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from '../types';

const initialState = {
  username: null,
  email: null,
  password: null,
  loading: false,
  error: null,
  success: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true, error: null };

    case REGISTER_USER_SUCCESS:
      return { ...state, success: true, loading: false, error: null, response: action.payload };

    case REGISTER_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
