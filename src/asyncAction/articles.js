/* eslint-disable */

import { FETCH_ARTICLES, FETCH_ARTICLES_ERROR, FETCH_ARTICLES_SUCCESS, SET_ARTICLES_PAGE } from '../store/types';

export const fetchArticles =
  (page = 1) =>
  (dispatch) => {
    dispatch({ type: FETCH_ARTICLES });

    fetch(`http://kata.academy:8022/api/articles?limit=5&offset=${page > 1 ? page * 5 : 0}`)
      .then((response) => response.json())
      .then((response) => dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: response }))

      .catch((err) => dispatch({ type: FETCH_ARTICLES_ERROR, payload: `Ошибка при запросе данных ${err}` }));
  };

export function setArticlesPage(page) {
  return { type: SET_ARTICLES_PAGE, payload: page };
}
