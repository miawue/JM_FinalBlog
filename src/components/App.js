/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../asyncAction/articles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Article from './Article';
import ArticleList from './ArticleList';
import ArticleContent from './ArticleContent';


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
        {/* {articles.map((article) => (
          <div>{article.name}</div>
        ))} */}
        <Routes>
          <Route path="/" element={<ArticleList />} /> 
          <Route path="/article" element={<Article renderArticleContent={ArticleContent}/>} />
        </Routes>
      </BrowserRouter>
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
