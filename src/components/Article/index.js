/* eslint-disable */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import heart from '../../img/heart.svg';
import './Article.css';

const Article = ({ article, onClick }) => {
  const convertDate = () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    return new Date(article.createdAt).toLocaleDateString('ru-RU', options);
  };

  const renderArticleTags = () => {
    return article.tagList.map((tag, i) => {
      return (
        <li className="article__tag" key={uuidv4()}>
          {tag}
        </li>
      );
    });
  };

  const renderArticleContent = () => {
    if (window.location.pathname === `/articles/${article.slug}`) {
      return (
        <div className="content">
          <h3 className="content__title">{article.title}</h3>
          <ReactMarkdown children={article.body} />
        </div>
      );
    }
  };

  return (
    <div className="container" onClick={onClick}>
      <div className="article">
        <div className="article__head">
          <div>
            <div className="article__inner">
              <Link to={`/articles/${article.slug}`} className="article__title link">
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
          <p className="article__text">{article.description}</p>
        </div>
        {renderArticleContent()}
      </div>
    </div>
  );
};

export default Article;
