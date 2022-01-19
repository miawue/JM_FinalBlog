/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../asyncAction/articles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './Article';
import ArticleContent from './ArticleContent';
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
      <BrowserRouter>
        {articles?.map((article) => (
          <div key={article.slug}>{article.title}</div>
        ))}
        <Routes>
          <Route path="/" element={<Article />} /> // внутри element будет вызов функции рендера статей
          <Route path="/article" element={<Article renderArticleContent={ArticleContent} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articleReducer.articles.articles,
  loading: state.articleReducer.loading,
  error: state.articleReducer.error,
  page: state.articleReducer.page,
});

export default connect(mapStateToProps)(App);
