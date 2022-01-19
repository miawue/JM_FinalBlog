/* eslint-disable */

import { FETCH_ARTICLES, FETCH_ARTICLES_ERROR, FETCH_ARTICLES_SUCCESS, SET_ARTICLES_PAGE } from '../types';

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

    default:
      return state;
  }
};
