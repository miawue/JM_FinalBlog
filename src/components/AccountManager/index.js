/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

import './AccountManager.css';

const AccountManager = ({agreement = false, link = true}) => {

    const fields = [ 
        {
            name: "Username",
            type: "text",
            id: "username",
            placeholder: "Username"
        },
        {
            name: "Email address",
            type: "email",
            id: "email",
            placeholder: "Email address"
        },
        {
            name: "Password",
            type: "password",
            id: "password",
            placeholder: "Password"
        },
        {
            name: "Repeat Password",
            type: "password",
            id: "repeatPassword",
            placeholder: "Password"
        }
    ] 

    const renderError = () => {
        return (
            <p className='error'>Field is empty</p>
        )
    }

    const renderAgreement = () => {
        return (
            <div className='agreement'>
                <input type="checkbox" id='agreement' className='agreement__checkbox'/>
                <label htmlFor='agreement' className='agreement__label'>I agree to the processing of my personal information</label>
            </div>
        )
    }

    const renderLink = () => {
        return (
            <p className='sign-in-text'>Already have an account? <Link to="/sign-in" className='sign-in-link'>Sign In</Link></p>
        )
    }

    const renderFields = () => {
        return fields.map((field, id) => {   
            return (
                <div className='account__inner field' key={id}>
                    <label className='field__label' htmlFor={field.id}>{field.name}</label>
                    <input className='field__input' type={field.type} id={field.id} placeholder={field.placeholder}/>
                    {/* {renderError()} */}
                </div>
            )
        })

    }

    return (
        <div className='account'>
            <h2 className='account__title'>Create new account</h2>
            <form className='account__form'>
                {renderFields()}
                {agreement ? renderAgreement() : null}
                <button className='account__button button' type='submit'>Create</button>
                {link ? renderLink() : null}
            </form>
        </div>
    )
}

export default AccountManager;