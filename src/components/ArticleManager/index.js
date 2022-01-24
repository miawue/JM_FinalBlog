/* eslint-disable */

import React from 'react';

import './ArticleManager.css';

const ArticleManager = () => {
  const renderTagField = () => {
    return (
      <li className="tag">
        <input type="text" className="manager__input" placeholder="Tag" />
        <button className="tag__button tag__button_delete button" type="button">
          Delete
        </button>
        <button className="tag__button tag__button_add button" type="button">
          Add tag
        </button>
      </li>
    );
  };

  return (
    <div className="container">
      <div className="manager">
        <h2 className="manager__title">Create new article</h2>
        <form>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="title">
              Title
            </label>
            <input type="text" className="manager__input" id="title" placeholder="Title" />
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="description">
              Short description
            </label>
            <input type="text" className="manager__input" id="description" placeholder="Description" />
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="content">
              Text
            </label>
            <textarea type="text" className="manager__textarea" id="content" placeholder="Text" />
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="tags">
              Tags
            </label>
            <ul id="tags" className="list">
              {renderTagField()}
            </ul>
          </div>
          <button type="submit" className="manager__button button">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArticleManager;
