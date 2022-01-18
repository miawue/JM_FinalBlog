/* eslint-disable */

import { FETCH_ARTICLES, FETCH_ARTICLES_ERROR, FETCH_ARTICLES_SUCCESS } from '../types';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { articles: [], loading: true, error: null };

    case FETCH_ARTICLES_SUCCESS:
      return { articles: action.payload, loading: false, error: null };

    case FETCH_ARTICLES_ERROR:
      return { articles: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
