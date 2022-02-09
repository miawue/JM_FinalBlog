/* eslint-disable */

import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_SUCCESS,
  EDIT_ARTICLE,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_SUCCESS,
} from '../types';

const initialState = {
  article: null,
  loading: false,
  error: null,
};

export const customArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return { ...state, loading: true };

    case CREATE_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: action.payload };

    case CREATE_ARTICLE_ERROR:
      return { ...state, error: action.payload };

    case EDIT_ARTICLE:
      return { ...state };

    case EDIT_ARTICLE_SUCCESS:
      return { ...state, article: action.payload };

    case EDIT_ARTICLE_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
