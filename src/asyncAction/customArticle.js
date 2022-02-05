/* eslint-disable */

import { CREATE_ARTICLE, CREATE_ARTICLE_ERROR, CREATE_ARTICLE_SUCCESS } from '../store/types';
import { getToken } from '../store/actions';

export const createArticle = (article) => (dispatch) => {
  dispatch({ type: CREATE_ARTICLE });

  fetch('https://api.realworld.io/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: getToken(),
    },
    body: JSON.stringify({ article }),
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: CREATE_ARTICLE_ERROR, payload: err }));
};
