/* eslint-disable */

import React from 'react';
import Article from '../Article';

import './ArticleList.css';

const ArticleList = () => {

    const renderArticle = () => {
        return <Article />
    }

    return (
        <div>
            {renderArticle()}
        </div>
    )
}

export default ArticleList;