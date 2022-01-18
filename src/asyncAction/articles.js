/* eslint-disable */
import { Dispatch } from 'redux';

import { FETCH_ARTICLES, FETCH_ARTICLES_ERROR, FETCH_ARTICLES_SUCCESS } from '../store/types';

export const fetchArticles = () => (dispatch) => {
  dispatch({ type: FETCH_ARTICLES });

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: response }))

    .catch((err) => dispatch({ type: FETCH_ARTICLES_ERROR, payload: `Ошибка при запросе данных ${err}` }));
};
