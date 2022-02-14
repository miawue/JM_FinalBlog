import {
  baseUrl,
  DISLIKE_ARTICLE,
  DISLIKE_ARTICLE_ERROR,
  DISLIKE_ARTICLE_SUCCESS,
  FETCH_ARTICLES,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ONE_ARTICLE,
  FETCH_ONE_ARTICLE_ERROR,
  FETCH_ONE_ARTICLE_SUCCESS,
  LIKE_ARTICLE,
  LIKE_ARTICLE_ERROR,
  LIKE_ARTICLE_SUCCESS,
  SET_ARTICLES_PAGE,
} from '../store/types';
import { getToken } from '../store/actions';

export const fetchArticles =
  (page = 1) =>
  (dispatch) => {
    dispatch({ type: FETCH_ARTICLES });

    fetch(`${baseUrl}articles?limit=5&offset=${page > 1 ? page * 5 : 0}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: getToken(),
      },
    })
      .then((response) => response.json())
      .then((response) => dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: response }))

      .catch((err) => dispatch({ type: FETCH_ARTICLES_ERROR, payload: `Ошибка при запросе данных ${err}` }));
  };

export const fetchOneArticle = (slug) => (dispatch) => {
  dispatch({ type: FETCH_ONE_ARTICLE });

  fetch(`${baseUrl}articles/${slug}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ONE_ARTICLE_SUCCESS, payload: [res.article] }))

    .catch((err) => dispatch({ type: FETCH_ONE_ARTICLE_ERROR, payload: `Ошибка при запросе данных ${err}` }));
};

export function setArticlesPage(page) {
  return { type: SET_ARTICLES_PAGE, payload: page };
}

export const likeArticle = (slug) => (dispatch) => {
  dispatch({ type: LIKE_ARTICLE });

  fetch(`${baseUrl}articles/${slug}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: getToken(),
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: LIKE_ARTICLE_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: LIKE_ARTICLE_ERROR, payload: err }));
};

export const dislikeArticle = (slug) => (dispatch) => {
  dispatch({ type: DISLIKE_ARTICLE });

  fetch(`${baseUrl}articles/${slug}/favorite`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: getToken(),
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch({ type: DISLIKE_ARTICLE_SUCCESS, payload: res }))

    .catch((err) => dispatch({ type: DISLIKE_ARTICLE_ERROR, payload: err }));
};
