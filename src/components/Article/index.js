import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import heart from '../../img/heart.svg';
import warning from '../../img/warning.svg';
import heartRed from '../../img/heartRed.svg';
import './Article.css';
import { dislikeArticle, likeArticle } from '../../asyncAction/articles';
import { deleteArticle } from '../../asyncAction/customArticle';
import { getToken } from '../../store/actions';

const Article = ({ article, onClick, canRedirect }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (canRedirect) navigate('/');
  const [popup, setPopup] = useState(false);

  const isArticleMine = article
    ? article.author.username === JSON.parse(localStorage.getItem('user'))?.username
    : false;

  const convertDate = () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    return new Date(article.createdAt).toLocaleDateString('ru-RU', options);
  };

  const renderArticleTags = () =>
    article.tagList.map((tag) => {
      if (tag !== '') {
        return (
          <li className="article__tag" key={uuidv4()}>
            {tag}
          </li>
        );
      }
    });

  const renderArticleContent = () => {
    if (window.location.pathname === `/articles/${article.slug}`) {
      return (
        <div className="content">
          <h3 className="content__title">{article.title}</h3>
          <div className="content__text">
            <ReactMarkdown children={article.body} />
          </div>
        </div>
      );
    }
  };

  const renderPopup = () => (
    <div className="wrapper">
      <div className="popup">
        <div className="popup__content">
          <div className="popup__icon-wrapper">
            <img src={warning} alt="icon" className="popup__icon" />
          </div>
          <p className="popup__text">Are you shure to delete this article?</p>
        </div>
        <div className="popup__btn-wrapper">
          <button className="popup__button button decline" type="button" onClick={() => setPopup(false)}>
            No
          </button>
          <button
            className="popup__button button accept"
            onClick={() => {
              dispatch(deleteArticle(article, article.slug));
            }}
            type="button"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );

  const renderManageButtons = (articleMine) => {
    if (articleMine) {
      return (
        <div className="manage-buttons">
          <button
            className="manage-buttons__button manage-buttons__button_delete button"
            onClick={() => setPopup(true)}
            type="button"
          >
            Delete
          </button>
          <Link to="/article-edit" className="manage-buttons__button manage-buttons__button_edit">
            Edit
          </Link>
          {popup ? renderPopup() : null}
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="article">
        <div className="article__head">
          <div>
            <div className="article__inner">
              <Link to={`/articles/${article.slug}`} className="article__title link" onClick={onClick}>
                {article.title}
              </Link>
              <div className="article__like-counter">
                <button
                  disabled={getToken() === 'Token undefined'}
                  className="article__like-btn button"
                  id="like"
                  onClick={() =>
                    !article.favorited ? dispatch(likeArticle(article.slug)) : dispatch(dislikeArticle(article.slug))
                  }
                  type="button"
                >
                  <img src={article.favorited ? heartRed : heart} alt="icon" />
                </button>
                <label htmlFor="like" className="article__like-text">
                  {article.favoritesCount}
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
          {window.location.pathname === `/articles/${article.slug}` ? renderManageButtons(isArticleMine) : null}
        </div>
        {renderArticleContent()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  canRedirect: state.customArticleReducer.canRedirect,
});

export default connect(mapStateToProps)(Article);
