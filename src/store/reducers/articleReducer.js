import {
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
} from '../types';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  page: 1,
  oneArticle: {},
  response: null,
};

export const articleReducer = (state = initialState, action) => {
  const idx = state.articles.articles?.findIndex((article) => article.slug === action.payload?.article.slug);
  const stateCopy = state.articles.articles;

  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, articles: [], loading: true, error: null };

    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articles: action.payload, loading: false, error: null };

    case FETCH_ARTICLES_ERROR:
      return { ...state, articles: [], loading: false, error: action.payload };

    case SET_ARTICLES_PAGE:
      return { ...state, page: action.payload };

    case FETCH_ONE_ARTICLE:
      return { ...state, loading: true, error: null };

    case FETCH_ONE_ARTICLE_SUCCESS:
      return { ...state, loading: false, error: null, oneArticle: action.payload };

    case FETCH_ONE_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case LIKE_ARTICLE:
      return { ...state, loading: true };

    case LIKE_ARTICLE_SUCCESS:
      if (!stateCopy[idx].favorited) {
        stateCopy[idx].favoritesCount += 1;
      }
      stateCopy[idx].favorited = true;
      return {
        ...state,
        loading: false,
        response: action.payload,
        articles: { ...state.articles, articles: stateCopy },
      };

    case LIKE_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DISLIKE_ARTICLE:
      return { ...state, loading: true };

    case DISLIKE_ARTICLE_SUCCESS:
      if (stateCopy[idx].favorited) {
        stateCopy[idx].favoritesCount -= 1;
      }
      stateCopy[idx].favorited = false;
      return {
        ...state,
        loading: false,
        response: action.payload,
        articles: { ...state.articles, articles: stateCopy },
      };

    case DISLIKE_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
