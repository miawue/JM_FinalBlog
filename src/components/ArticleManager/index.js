import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './ArticleManager.css';
import { useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createArticle, editArticle } from '../../asyncAction/customArticle';

const ArticleManager = ({ article }) => {
  const path = window.location.pathname;
  const slug = article ? article[0]?.slug : null;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTagFunc = (event) => {
    if (event.target.parentElement.firstChild.value.trim() !== '') {
      if (!tags.includes(event.target.parentElement.firstChild.value.trim())) {
        setTags([...tags, event.target.parentElement.firstChild.value.trim()]);
      }
      event.target.parentElement.firstChild.value = '';
    }
  };

  const removeTagFunc = (event) => {
    if (event.target.parentElement.firstChild.value !== '') {
      setTags(tags.filter((tag) => tag !== event.target.parentElement.firstChild.value));
    }
  };

  const renderTagFields = (tagsArr) =>
    tagsArr.map((el) => (
      <li className="tag" key={uuidv4()}>
        <input type="text" className="manager__input" placeholder="Tag" defaultValue={el} />
        <button className="tag__button tag__button_delete button" type="button" onClick={(tag) => removeTagFunc(tag)}>
          Delete
        </button>
      </li>
    ));

  const renderTitle = () => {
    if (path === '/article-create') {
      return <h2 className="manager__title">Create new article</h2>;
    }
    if (path === '/article-edit') {
      return <h2 className="manager__title">Edit article</h2>;
    }
    return null;
  };

  const renderBtnText = () => {
    if (path === '/article-create') {
      return 'Create';
    }
    if (path === '/article-edit') {
      return 'Edit';
    }
    return null;
  };

  const renderError = (name) => {
    const field = errors?.[name]?.ref;

    switch (errors?.[name]?.type) {
      case 'required':
        field.style.borderColor = 'red';
        return <p className="error">{name} is empty</p>;
    }
  };

  const onFormSubmit = (data) => {
    const customArticle = { ...data, tagList: tags };
    path === '/article-create' ? dispatch(createArticle(customArticle)) : dispatch(editArticle(customArticle, slug));
    navigate('/');
  };

  return (
    <div className="container">
      <div className="manager">
        {renderTitle()}
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              className="manager__input"
              id="title"
              placeholder="Title"
              {...register('title', { required: true })}
            />
            {renderError('title')}
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="description">
              Short description
            </label>
            <input
              type="text"
              className="manager__input"
              id="description"
              placeholder="Description"
              {...register('description', { required: true })}
            />
            {renderError('description')}
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="content">
              Text
            </label>
            <textarea
              type="text"
              className="manager__textarea"
              id="content"
              placeholder="Text"
              {...register('content', { required: true })}
            />
            {renderError('content')}
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="tags">
              Tags
            </label>
            <ul id="tags" className="list">
              {renderTagFields(tags)}
              <li className="tag">
                <input type="text" className="manager__input" placeholder="Tag" />
                <button className="tag__button tag__button_disabled button" type="button" disabled>
                  Delete
                </button>
                <button className="tag__button tag__button_add button" type="button" onClick={(tag) => addTagFunc(tag)}>
                  Add tag
                </button>
              </li>
            </ul>
          </div>
          <button type="submit" className="manager__button button">
            {renderBtnText()}
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.articleReducer.oneArticle,
});

export default connect(mapStateToProps)(ArticleManager);
