/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Article from './Article';
import ArticleList from './ArticleList';
import ArticleContent from './ArticleContent';
import ArticleManager from './ArticleManager';
import AccountManager from './AccountManager';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article" element={<Article renderArticleContent={ArticleContent} />} />
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(App);
