/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { connect, useDispatch } from 'react-redux';
import { logOut } from '../../store/actions';
import { LOG_OUT } from '../../store/types';

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const isLoggedIn = !!user.token;
  const renderUserStatus = () => {
    if (isLoggedIn) {
      return (
        <div className="header__btn-wrapper">
          <Link to="/article-create" className="header__create-btn">
            Create article
          </Link>
          <div className="user">
            <span className="user__name">{user.username}</span>
            <div className="user__avatar-wrapper">
              <img src={user.image} alt="avatar" className="user__avatar" />
            </div>
          </div>
          <button onClick={() => dispatch({ type: LOG_OUT })} className="header__button button">
            Log Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="header__btn-wrapper">
          <Link to="/sign-in" className="header__sign-in link">
            Sign In
          </Link>
          <Link to="/create-acc" className="header__sign-up link">
            Sign Up
          </Link>
        </div>
      );
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link link">
          Realworld Blog
        </Link>
        {renderUserStatus(isLoggedIn)}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(Header);
