/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.png';

import './Header.css';

const Header = () => {
  const renderUserStatus = (/* принимает состояние логина */) => {
    /* if ( состояние логина === true ) {
      return (
        <div className='header__btn-wrapper'>
          <Link to="/article-create" className='header__create-btn'>Create article</Link>
          <div className="user">
            <span className='user__name'>John Doe</span>
            <div className="user__avatar-wrapper">
              <img src={avatar} alt='avatar' className="user__avatar" />
            </div>
          </div>
          <button className="header__button button">Log Out</button>
        </div>
      );
    } else {
      
    }

    */

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
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link link">
          Realworld Blog
        </Link>
        {renderUserStatus(/* передаем состояние логина */)}
      </div>
    </header>
  );
};

export default Header;
