import React, { ReactElement, useEffect } from 'react'
import ListOfGifs from '../../components/ListOfGifs';
import SearchForm from '../../components/SearchForm';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import useIsNearScreen from '../../hooks/useIsNearScreen';
import useSearchPageProps from './useSearchPageProps';

export default function index(): ReactElement {
    const {keyword, rating} = useSearchPageProps() 
    const {gifs, loading} = useGifs({keyword, rating})
    const {elementObservar} =useIsNearScreen(true) // al pasar true decimos que estamos en la pagina searchPage donde el nearscreen funciona para el infinity scroll
    
    return (
        <div className="search">
            <SearchForm/>
            {
                loading
                ? <><Spinner/><ListOfGifs gifs={[]}/></>
                : <ListOfGifs gifs={gifs}/>
            }
            <div ref={elementObservar}></div>
        </div>
    )
}
