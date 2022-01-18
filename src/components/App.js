/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../asyncAction/articles';

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
      {articles.map((article) => (
        <div>{article.name}</div>
      ))}
    </div>
  );
};

export default App;
