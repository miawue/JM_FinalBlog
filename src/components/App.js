/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Article from './Article';
import ArticleList from './ArticleList';
import ArticleContent from './ArticleContent';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ArticleList />} /> 
            <Route path="/article" element={<Article renderArticleContent={ArticleContent}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(App);
