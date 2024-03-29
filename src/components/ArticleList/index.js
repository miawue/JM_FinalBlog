import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { fetchArticles, fetchOneArticle, setArticlesPage } from '../../asyncAction/articles';

import Article from '../Article';

import './ArticleList.css';

const ArticleList = ({ articles, error, loading, page, totalPages }) => {
  const dispatch = useDispatch();

  totalPages = totalPages ? Math.floor(totalPages / 5) : 0;

  useEffect(() => {
    dispatch(fetchArticles(page));
  }, [dispatch, page]);

  if (loading) {
    return <h1>Идёт загрузка..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const renderArticle = () =>
    articles
      ? articles.map((article) => (
          <Article onClick={() => dispatch(fetchOneArticle(article.slug))} key={article.slug} article={article} />
        ))
      : null;

  return (
    <div className="container">
      {renderArticle()}
      <Pagination
        className="pagination"
        page={page}
        onChange={(event, num) => dispatch(setArticlesPage(num))}
        count={totalPages}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articleReducer.articles.articles,
  loading: state.articleReducer.loading,
  error: state.articleReducer.error,
  page: state.articleReducer.page,
  totalPages: state.articleReducer.articles.articlesCount,
});

export default connect(mapStateToProps)(ArticleList);
