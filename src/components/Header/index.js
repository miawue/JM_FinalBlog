/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const renderUserStatus = () => {
        return (
            <div className='header__btn-wrapper'>
                <Link to="/sign-in" className='header__sign-in link'>Sign In</Link>
                <Link to="/sign-up" className='header__sign-up link'>Sign Up</Link>
            </div>
        )
    }

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to="/" className='header__link link'>Realworld Blog</Link>
                {renderUserStatus()}
            </div>
        </header>
    )
}

export default Header;