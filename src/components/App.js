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

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ArticleList />} /> 
            <Route path="/article" element={<Article renderArticleContent={ArticleContent}/>} />
            <Route path="/article-create" element={<ArticleManager />} />
            <Route path="/article-edit" element={<ArticleManager />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(App);
