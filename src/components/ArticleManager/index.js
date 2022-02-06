/* eslint-disable */

import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

import './ArticleManager.css';

const ArticleManager = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tags, setTags] = useState([]);

  //console.log(tags);

  const addTagFunc = (e) => {
    e.target.parentElement.firstChild.value !== '' ? setTags([...tags, e.target.parentElement.firstChild.value]) : null
  }

  const removeTagFunc = (e) => {
    e.target.parentElement.firstChild.value !== '' ? setTags(tags.filter(tag => tag !== e.target.parentElement.firstChild.value)) : null
  }

  const renderTagFields = (tagsArr) => {
    if (tagsArr.length === 0) {
      return (
        <li className="tag">
          <input type="text" className="manager__input" placeholder="Tag" />
          <button className="tag__button tag__button_disabled button" type="button" disabled>
            Delete
          </button>
          <button className="tag__button tag__button_add button" type="button" onClick={(e) => addTagFunc(e)}>
            Add tag
          </button>
        </li>
      );
    }

    return tagsArr.map((el, i) => {
        return (
          <li className="tag" key={i}>
            <input type="text" className="manager__input" placeholder="Tag"/>
            <button className="tag__button tag__button_delete button" type="button" onClick={(e) => removeTagFunc(e)}>
              Delete
            </button>
            { i === tagsArr.length - 1 ? <button className="tag__button tag__button_add button" type="button" onClick={(e) => addTagFunc(e)}>Add tag</button> : null }
          </li>
        );
    });
  };

  const renderTitle = () => {
    if (window.location.pathname === '/article-create') {
      return <h2 className="manager__title">Create new article</h2>;
    }
    if (window.location.pathname === '/article-edit') {
      return <h2 className="manager__title">Edit article</h2>;
    }
  };

  const renderBtnText = () => {
    if (window.location.pathname === '/article-create') {
      return 'Create';
    }
    if (window.location.pathname === '/article-edit') {
      return 'Edit';
    }
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
    console.log({...data, tags: tags});
  }

  return (
    <div className="container">
      <div className="manager">
        {renderTitle()}
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="title">
              Title
            </label>
            <input type="text" className="manager__input" id="title" placeholder="Title" {...register("title", {required : true})} />
            {renderError('title')}
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="description">
              Short description
            </label>
            <input type="text" className="manager__input" id="description" placeholder="Description" {...register("description", {required : true})}/>
            {renderError('description')}
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="content">
              Text
            </label>
            <textarea type="text" className="manager__textarea" id="content" placeholder="Text" {...register("content", {required : true})}/>
            {renderError('content')}
          </div>
          <div className="manager__inner">
            <label className="manager__label" htmlFor="tags">
              Tags
            </label>
            <ul id="tags" className="list">
              {renderTagFields(tags)}
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

export default ArticleManager;
