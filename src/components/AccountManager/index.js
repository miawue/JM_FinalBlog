/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../asyncAction/user';
import { useForm } from 'react-hook-form';
import './AccountManager.css';

const AccountManager = ({ agreement = false, link = true, authErrors, user }) => {
  const dispatch = useDispatch();
  user?.token ? localStorage.setItem('user', JSON.stringify(user)) : null;
  const path = window.location.pathname;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderError = (id) => {
    switch (errors?.[id]?.type) {
      case 'required':
        return <p className="error">Field is empty</p>;
      case 'pattern':
        return <p className="error">Please write email address</p>;
      case 'minLength':
        return <p className="error">{id} is too short</p>;
      case 'maxLength':
        return <p className="error">{id} is too long</p>;
    }
  };

  let authError = '';

  if (authErrors) {
    authError = (
      <p className="error">
        {Object.keys(authErrors)[0]} {Object.values(authErrors)[0]}
      </p>
    );
  }

  const renderAgreement = () => {
    return (
      <div className="agreement">
        <input
          type="checkbox"
          id="agreement"
          className="agreement__checkbox"
          {...register('Agreement', { required: true })}
        />
        <label htmlFor="agreement" className="agreement__label">
          I agree to the processing of my personal information
        </label>
        {errors?.Agreement?.type === 'required' && <p className="error">We need your agreement</p>}
      </div>
    );
  };

  const renderLink = () => {
    if (path === '/create-acc') {
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

    if (path === '/sign-in') {
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
    if (path === '/create-acc') {
      return <h2 className="account__title">Create new account</h2>;
    }

    if (path === '/sign-in') {
      return <h2 className="account__title">Sign In</h2>;
    }

    if (path === '/edit-acc') {
      return <h2 className="account__title">Edit Profile</h2>;
    }
  };

  const renderButtonText = () => {
    if (path === '/create-acc') {
      return 'Create';
    }

    if (path === '/sign-in') {
      return 'Login';
    }

    if (path === '/edit-acc') {
      return 'Save';
    }
  };

  const renderFields = () => {
    let fields;

    if (path === '/create-acc') {
      fields = [
        {
          name: 'Username',
          type: 'text',
          id: 'username',
          placeholder: 'Username',
          options: { required: true, minLength: 3, maxLength: 20 },
        },
        {
          name: 'Email address',
          type: 'text',
          id: 'email',
          placeholder: 'Email address',
          options: { required: true, pattern: /\S+@\S+.\S+/ },
        },
        {
          name: 'Password',
          type: 'password',
          id: 'password',
          placeholder: 'Password',
          options: { required: true, minLength: 6, maxLength: 40 },
        },
        {
          name: 'Repeat Password',
          type: 'password',
          id: 'repeatPassword',
          placeholder: 'Password',
          options: {
            required: true,
            minLength: 6,
            maxLength: 40,
            validate: (value) => value === document.getElementById('password').value,
          },
        },
      ];
    }

    if (path === '/sign-in') {
      fields = [
        {
          name: 'Email address',
          type: 'email',
          id: 'email',
          placeholder: 'Email address',
          options: { required: true },
        },
        {
          name: 'Password',
          type: 'password',
          id: 'password',
          placeholder: 'Password',
          options: { required: true },
        },
      ];
    }

    if (path === '/edit-acc') {
      fields = [
        {
          name: 'Username',
          type: 'text',
          id: 'username',
          placeholder: 'Username',
          options: { required: true },
        },
        {
          name: 'Email address',
          type: 'email',
          id: 'email',
          placeholder: 'Email address',
          options: { required: true, pattern: /\S+@\S+.\S+/ },
        },
        {
          name: 'New Password',
          type: 'password',
          id: 'password',
          placeholder: 'New Password',
          options: { required: true, minLength: 6, maxLength: 40 },
        },
        {
          name: 'Avatar image url()',
          type: 'text',
          id: 'avatar',
          placeholder: 'Avatar image',
          options: { required: true },
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
            {...register(field.name, field.options)}
          />
          {renderError(field.name)}
        </div>
      );
    });
  };

  const onFormSubmit = async (data) => {
    const user = {
      username: data.Username,
      email: data['Email address'],
      password: data.Password,
    };
    if (path === '/create-acc') {
      await dispatch(registerUser(user));
    } else if (path === '/sign-in') {
      await dispatch(loginUser(user));
    }
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
        {authError}
      </form>
      {link ? renderLink() : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user.user,
  username: state.userReducer.username,
  email: state.userReducer.email,
  password: state.userReducer.password,
  authErrors: state.userReducer.response.errors || state.userReducer.user.errors,
});

export default connect(mapStateToProps)(AccountManager);
