/* eslint-disable */

import React from 'react';
import avatar from '../../img/avatar.png';
import heart from '../../img/heart.svg';
import './Post.css';

const Post = () => {
    return (
        <div className='post'>
            <div>
                <div className='post__inner'>
                    <h2 className='post__title'>Some article title</h2>
                    <div className='post__like-counter'>
                        <button className='post__like-btn button' id='like'>
                            <img src={heart} alt='icon' />
                        </button>
                        <label htmlFor='like' className='post__like-text'>12</label>
                    </div>
                </div>
                <ul className='post__tag-list list'>
                    <li className='post__tag'>Tag1</li>
                </ul>
            </div>
            <div className='post__author author'>
                <div>
                    <p className='author__name'>John Doe</p>
                    <p className='author__post-date'>March 5, 2020</p>
                </div>
                <div className='author__avatar-wrapper'>
                    <img src={avatar} alt='avatar' className='author__avatar' />
                </div>
            </div>
            <p className='post__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    )
}

export default Post;