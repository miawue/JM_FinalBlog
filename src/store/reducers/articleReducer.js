/* eslint-disable */

import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ONE_ARTICLE,
  FETCH_ONE_ARTICLE_ERROR,
  FETCH_ONE_ARTICLE_SUCCESS,
  SET_ARTICLES_PAGE,
  SET_ONE_ARTICLE,
} from '../types';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  page: 1,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, articles: [], loading: true, error: null };

    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload, loading: false, error: null };

    case FETCH_ARTICLES_ERROR:
      return { ...state, articles: [], loading: false, error: action.payload };

    case SET_ARTICLES_PAGE:
      return { ...state, page: action.payload };

    case SET_ONE_ARTICLE:
  return { ...state, oneArticle: action.payload };

    case FETCH_ONE_ARTICLE:
      return { ...state, loading: true, error: null };

    case FETCH_ONE_ARTICLE_SUCCESS:
      return { ...state, loading: false, error: null, oneArticle: action.payload };

    case FETCH_ONE_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
