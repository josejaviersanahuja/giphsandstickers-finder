import React, { ReactElement } from 'react'
import Gif from '../../components/Gif';
import Spinner from '../../components/Spinner';
import useSingleGif from '../../hooks/useSingleGif';

export default function index(): ReactElement {

    const {gif, loadingFromApi} = useSingleGif()
    // console.log(gif);
    
    return (
        <div className="detalle">

            <br/> 
            {loadingFromApi ? <Spinner/>: <h1 className="detalle__title">{gif.title}</h1>}
            <hr/>
            <br/>
            <div className="detalle__img">
                {loadingFromApi? <Spinner/> : <Gif id={gif.id} title={gif.title} url={gif.url} />}
            </div>
        
        </div>
    )
}
