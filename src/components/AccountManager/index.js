/* eslint-disable */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AccountManager.css';

const AccountManager = ({ agreement = false, link = true }) => {
  const [state, setState] = useState({});

  const renderError = () => {
    return <p className="error">Field is empty</p>;
  };

  const renderAgreement = () => {
    return (
      <div className="agreement">
        <input type="checkbox" id="agreement" className="agreement__checkbox" onChange={(e) => onChangeInput(e)} />
        <label htmlFor="agreement" className="agreement__label">
          I agree to the processing of my personal information
        </label>
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
        },
        {
          name: 'Email address',
          type: 'email',
          id: 'email',
          placeholder: 'Email address',
        },
        {
          name: 'Password',
          type: 'password',
          id: 'password',
          placeholder: 'Password',
        },
        {
          name: 'Repeat Password',
          type: 'password',
          id: 'repeatPassword',
          placeholder: 'Password',
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
        },
        {
          name: 'Password',
          type: 'password',
          id: 'password',
          placeholder: 'Password',
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
        },
        {
          name: 'Email address',
          type: 'email',
          id: 'email',
          placeholder: 'Email address',
        },
        {
          name: 'New Password',
          type: 'password',
          id: 'password',
          placeholder: 'New Password',
        },
        {
          name: 'Avatar image url()',
          type: 'text',
          id: 'avatar',
          placeholder: 'Avatar image',
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
            onChange={(e) => onChangeInput(e)}
          />
          {/* {renderError()} */}
        </div>
      );
    });
  };

  const onChangeInput = (e) => {
    if (e.target.type !== 'checkbox') {
      e.preventDefault();
      setState({ ...state, [e.target.id]: e.target.value });
    } else {
      setState({ ...state, [e.target.id]: e.target.checked });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="account">
      {renderTitle()}
      <form className="account__form" onSubmit={(e) => onFormSubmit(e)}>
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

export default AccountManager;
