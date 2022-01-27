/* eslint-disable */
import { REGISTER_USER } from '../store/types';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_USER });

  let response = await fetch('http://kata.academy:8022/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ user }),
  });
  const result = await response.json();
  console.log(result);
};
