import {
  baseUrl,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from '../store/types';
import { getToken } from '../store/actions';

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: REGISTER_USER });

  fetch(`${baseUrl}users`, {
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

  fetch(`${baseUrl}users/login`, {
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

export const updateUser = (user) => (dispatch) => {
  dispatch({ type: UPDATE_USER });

  fetch(`${baseUrl}user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: getToken(),
    },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: UPDATE_USER_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: UPDATE_USER_ERROR, payload: err }));
};
