/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.png';
import heart from '../../img/heart.svg';
import './Article.css';

const Article = (props) => {
  return (
    <div className="article">
      <div className="article__head">
        <div>
          <div className="article__inner">
            <Link to="/article" className="article__title">
              Some article title
            </Link>
            <div className="article__like-counter">
              <button className="article__like-btn button" id="like">
                <img src={heart} alt="icon" />
              </button>
              <label htmlFor="like" className="article__like-text">
                12
              </label>
            </div>
          </div>
          <ul className="article__tag-list list">
            <li className="article__tag">Tag1</li>
          </ul>
        </div>
        <div className="article__author author">
          <div>
            <p className="author__name">John Doe</p>
            <p className="author__article-date">March 5, 2020</p>
          </div>
          <div className="author__avatar-wrapper">
            <img src={avatar} alt="avatar" className="author__avatar" />
          </div>
        </div>
        <p className="article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.{' '}
        </p>
      </div>
      {props.renderArticleContent ? props.renderArticleContent() : null}
    </div>
  );
};

export default Article;
