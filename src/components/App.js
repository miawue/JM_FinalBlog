/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../asyncAction/articles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './Article';
import ArticleContent from './ArticleContent';

const App = () => {
  const { articles, error, loading } = useSelector((state) => state.articleReducer);
  console.log(articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  if (loading) {
    return <h1>Идёт загрузка..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <BrowserRouter>
        {articles.map((article) => (
          <div>{article.name}</div>
        ))}
        <Routes>
          <Route path="/" element={<Article />} /> // внутри element будет вызов функции рендера статей
          <Route path="/article" element={<Article renderArticleContent={ArticleContent}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
