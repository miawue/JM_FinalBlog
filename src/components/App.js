/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../asyncAction/articles';
import { connect } from 'react-redux';

const App = ({ articles, error, loading, page }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(page));
  }, [page]);

  if (loading) {
    return <h1>Идёт загрузка..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {articles.map((article) => (
        <div>{article.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articleReducer.articles,
  loading: state.articleReducer.loading,
  error: state.articleReducer.error,
  page: state.articleReducer.page,
});

export default connect(mapStateToProps)(App);
