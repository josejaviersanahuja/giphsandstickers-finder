import React, { ReactElement } from 'react'
import Gif from '../../components/Gif';
import Spinner from '../../components/Spinner';
import useSingleGif from '../../hooks/useSingleGif';
import { useAppSelector } from '../../redux/hooks';

export default function index(): ReactElement {
    const GorS = useAppSelector((state)=> state.GorS)
    const {gif, loadingFromApi} = useSingleGif()
    // console.log(gif);
    
    return (
        <div className="detalle">

            <br/> 
            {loadingFromApi ? <Spinner/>: <h1 className="detalle__title">{GorS.value.toLocaleUpperCase() +': '+ gif.title}</h1>}
            <hr/>
            <br/>
            <div className="detalle__img">
                {loadingFromApi? <Spinner/> : <Gif id={gif.id} title={gif.title} url={gif.url} />}
            </div>
        
        </div>
    )
}
