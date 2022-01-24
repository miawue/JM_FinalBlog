/* eslint-disable */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import Header from './Header';
import Article from './Article';
import ArticleList from './ArticleList';
import ArticleManager from './ArticleManager';
import AccountManager from './AccountManager';
import { fetchOneArticle } from '../asyncAction/articles';

const App = ({ article }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneArticle());
  }, []);
  
  article = article ? article[0] : {}

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path={`/articles/${article?.slug}`} element={<Article article={article} />} />
          <Route path="/article-create" element={<ArticleManager />} />
          <Route path="/article-edit" element={<ArticleManager />} />
          <Route path="/create-acc" element={<AccountManager agreement={true} />} />
          <Route path="/sign-in" element={<AccountManager />} />
          <Route path="/edit-acc" element={<AccountManager link={false} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.articleReducer.oneArticle,
});

export default connect(mapStateToProps)(App);
