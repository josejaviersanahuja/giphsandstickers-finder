import React, { ReactElement, useEffect } from 'react'
import SearchForm from '../../components/SearchForm';
import Gif from '../../components/Gif';

const url = 'https://media4.giphy.com/media/j9XoexYMmd7LdntEK4/giphy.gif?cid=bce465b9pqj5cbbfk2ka3pv4bxwsgg8k54xikpxuqcqy2419&rid=giphy.gif&ct=g'

export default function index(): ReactElement {
    
    return (
        <div className="notFound">
            <SearchForm/>
            <br/> 
            <h1 className="notFound__title">404. Esta no es la página que buscabas...</h1>
            <hr/>
            <br/>
            <div className="notFound__img">
                <Gif id="j9XoexYMmd7LdntEK4" title="Are you lost?" url={url} />
            </div>
        </div>
    )
}
