/* eslint-disable */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../../asyncAction/articles';
import { connect } from 'react-redux';

import Article from '../Article';

import './ArticleList.css';

const ArticleList = ({ articles, error, loading, page }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles(page));
    }, [page]);

    if (loading) {
        return <h1>Идёт загрузка..</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    const renderArticle = () => {
       return articles ? articles.map((article) => <Article key={article.slug} article={article} />) : null
    }

    return (
        <div className='container'>
            {renderArticle()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articleReducer.articles.articles,
    loading: state.articleReducer.loading,
    error: state.articleReducer.error,
    page: state.articleReducer.page,
  });

export default connect(mapStateToProps)(ArticleList);