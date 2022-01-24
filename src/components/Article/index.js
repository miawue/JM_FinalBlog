/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../../img/heart.svg';
import './Article.css';

const Article = ({ article, renderArticleContent, onClick }) => {
  const convertDate = () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    return new Date(article.createdAt).toLocaleDateString('ru-RU', options);
  };

  const renderArticleTags = () => {
    return article.tagList.map((tag, i) => {
      return (
        <li className="article__tag" key={i}>
          {tag}
        </li>
      );
    });
  };

  return (
    <div className="container" onClick={onClick}>
      <div className="article">
        <div className="article__head">
          <div>
            <div className="article__inner">
              <Link to="/article" className="article__title link">
                {article.title}
              </Link>
              <div className="article__like-counter">
                <button className="article__like-btn button" id="like" disabled>
                  <img src={heart} alt="icon" />
                </button>
                <label htmlFor="like" className="article__like-text">
                  12
                </label>
              </div>
            </div>
            <ul className="article__tag-list list">{renderArticleTags()}</ul>
          </div>
          <div className="article__author author">
            <div>
              <p className="author__name">{article.author.username}</p>
              <p className="author__article-date">{convertDate()}</p>
            </div>
            <div className="author__avatar-wrapper">
              <img src={article.author.image} alt="avatar" className="author__avatar" />
            </div>
          </div>
          <p className="article__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        {renderArticleContent ? renderArticleContent() : null}
      </div>
    </div>
  );
};

export default Article;
