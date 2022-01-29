/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { registerUser } from '../../asyncAction/user';
import { useForm } from 'react-hook-form';
import './AccountManager.css';
import { validate } from 'uuid';

const AccountManager = ({ agreement = false, link = true }) => {
  const dispatch = useDispatch();

  const user = {
    username: 'ASFKJqasfghquwgh12',
    email: 'ASFKJqasfghqu12wgh@mail.ru',
    password: 'ASFKJqasfghquwgh',
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const renderError = (id) => {
    switch (errors?.[id]?.type) {
      case "required":
        return <p className="error">Field is empty</p>;
      case "pattern":
        return <p className="error">Please write email address</p>;
      case "minLength":
        return <p className="error">{id} is too short</p>;
      case "maxLength":
        return <p className="error">{id} is too long</p>;
    }

    
  };

  const renderAgreement = () => {
    return (
      <div className="agreement">
        <input type="checkbox" id="agreement" className="agreement__checkbox" {...register("Agreement", {required: true})} />
        <label htmlFor="agreement" className="agreement__label">
          I agree to the processing of my personal information
        </label>
        { errors?.Agreement?.type === 'required' && <p className='error'>We need your agreement</p>}
      </div>
    );
  };

  const renderLink = () => {
    if (window.location.pathname === '/create-acc') {
      return (
        <p className="sign-text">
          Already have an account?{' '}
          <Link to="/sign-in" className="sign-link">
            Sign In
          </Link>
          .
        </p>
      );
    }

    if (window.location.pathname === '/sign-in') {
      return (
        <p className="sign-text">
          Don't have an account?{' '}
          <Link to="/create-acc" className="sign-link">
            Sign Up
          </Link>
          .
        </p>
      );
    }
  };

  const renderTitle = () => {
    if (window.location.pathname === '/create-acc') {
      return <h2 className="account__title">Create new account</h2>;
    }

    if (window.location.pathname === '/sign-in') {
      return <h2 className="account__title">Sign In</h2>;
    }

    if (window.location.pathname === '/edit-acc') {
      return <h2 className="account__title">Edit Profile</h2>;
    }
  };

  const renderButtonText = () => {
    if (window.location.pathname === '/create-acc') {
      return 'Create';
    }

    if (window.location.pathname === '/sign-in') {
      return 'Login';
    }

    if (window.location.pathname === '/edit-acc') {
      return 'Save';
    }
  };

  const renderFields = () => {
    let fields;

    if (window.location.pathname === '/create-acc') {
      fields = [
        {
          name: 'Username',
          type: 'text',
          id: 'username',
          placeholder: 'Username',
          options: {required: true, minLength: 3, maxLength: 20,}
        },
        {
          name: 'Email address',
          type: 'text',
          id: 'email',
          placeholder: 'Email address',
          options: {required: true, pattern: /\S+@\S+.\S+/, }
        },
        {
          name: 'Password',
          type: 'password',
          id: 'password',
          placeholder: 'Password',
          options: {required: true, minLength: 6, maxLength: 40,}
        },
        {
          name: 'Repeat Password',
          type: 'password',
          id: 'repeatPassword',
          placeholder: 'Password',
          options: {required: true, minLength: 6, maxLength: 40,}
        },
      ];
    }

    if (window.location.pathname === '/sign-in') {
      fields = [
        {
          name: 'Email address',
          type: 'email',
          id: 'email',
          placeholder: 'Email address',
          options: {required: true,}
        },
        {
          name: 'Password',
          type: 'password',
          id: 'password',
          placeholder: 'Password',
          options: {required: true}
        },
      ];
    }

    if (window.location.pathname === '/edit-acc') {
      fields = [
        {
          name: 'Username',
          type: 'text',
          id: 'username',
          placeholder: 'Username',
          options: {required: true,}
        },
        {
          name: 'Email address',
          type: 'email',
          id: 'email',
          placeholder: 'Email address',
          options: {required: true, pattern: /\S+@\S+.\S+/, }
        },
        {
          name: 'New Password',
          type: 'password',
          id: 'password',
          placeholder: 'New Password',
          options: {required: true, minLength: 6, maxLength: 40,}
        },
        {
          name: 'Avatar image url()',
          type: 'text',
          id: 'avatar',
          placeholder: 'Avatar image',
          options: {required: true,}
        },
      ];
    }

    return fields.map((field, id) => {
      return (
        <div className="account__inner field" key={id}>
          <label className="field__label" htmlFor={field.id}>
            {field.name}
          </label>
          <input
            className="field__input"
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            {...register(field.name, field.options, {validate: e => console.log(e)})}
          />
            {renderError(field.name)} 
        </div>
      );
    });
  };

  const onFormSubmit = (data) => {
    console.log(data);
    //dispatch(registerUser(user));
  };

  return (
    <div className="account">
      {renderTitle()}
      <form className="account__form" onSubmit={handleSubmit(onFormSubmit)}>
        {renderFields()}
        {agreement ? renderAgreement() : null}
        <button className="account__button button" type="submit">
          {renderButtonText()}
        </button>
        {link ? renderLink() : null}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
  password: state.userReducer.password,
});

export default connect(mapStateToProps)(AccountManager);
