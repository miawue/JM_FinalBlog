/* eslint-disable */
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from '../store/types';

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: REGISTER_USER });

  fetch('http://kata.academy:8022/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: REGISTER_USER_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: REGISTER_USER_ERROR, payload: err }));
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  fetch('http://kata.academy:8022/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: LOGIN_USER_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: LOGIN_USER_ERROR, payload: err }));
};
