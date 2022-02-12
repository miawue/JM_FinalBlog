/* eslint-disable */

import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_SUCCESS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_ERROR,
  DELETE_ARTICLE_SUCCESS,
  EDIT_ARTICLE,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_SUCCESS,
} from '../store/types';
import { getToken } from '../store/actions';

export const createArticle = (article) => (dispatch) => {
  dispatch({ type: CREATE_ARTICLE });

  fetch('http://kata.academy:8022/api/articles', {
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

export const editArticle = (article, slug) => (dispatch) => {
  dispatch({ type: EDIT_ARTICLE });

  fetch(`http://kata.academy:8022/api/articles/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: getToken(),
    },
    body: JSON.stringify({ article }),
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: EDIT_ARTICLE_ERROR, payload: err }));
};

export const deleteArticle = (article, slug) => (dispatch) => {
  dispatch({ type: DELETE_ARTICLE });

  fetch(`http://kata.academy:8022/api/articles/${slug}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: getToken(),
    },
    body: JSON.stringify({ article }),
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: DELETE_ARTICLE_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: DELETE_ARTICLE_ERROR, payload: err }));
};
