/* eslint-disable */

import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ONE_ARTICLE,
  FETCH_ONE_ARTICLE_ERROR,
  FETCH_ONE_ARTICLE_SUCCESS,
  SET_ARTICLES_PAGE,
} from '../store/types';

export const fetchArticles =
  (page = 1) =>
  (dispatch) => {
    dispatch({ type: FETCH_ARTICLES });

    fetch(`https://api.realworld.io/api/articles?limit=5&offset=${page > 1 ? page * 5 : 0}`)
      .then((response) => response.json())
      .then((response) => dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: response }))

      .catch((err) => dispatch({ type: FETCH_ARTICLES_ERROR, payload: `Ошибка при запросе данных ${err}` }));
  };

export const fetchOneArticle = (slug) => (dispatch) => {
  dispatch({ type: FETCH_ONE_ARTICLE });

  fetch(`https://api.realworld.io/api/articles/${slug}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ONE_ARTICLE_SUCCESS, payload: [res.article] }))

    .catch((err) => dispatch({ type: FETCH_ONE_ARTICLE_ERROR, payload: `Ошибка при запросе данных ${err}` }));
};

export function setArticlesPage(page) {
  return { type: SET_ARTICLES_PAGE, payload: page };
}
