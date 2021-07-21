import React from 'react'
import {Link} from 'react-router-dom'
import { Giph } from '../../feature/gifApiCall/gifsApiSlice'
//import Fav from 'components/Fav'

export default function Gif ({ title, id, url } : Giph) {
  return (
    <div className="Gif">
{/*       <div className="Gif__buttons">
         <Fav id={id}></Fav>
      </div> */}
      <Link to={`/giforsticker/${id}`} className='Gif__link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>

  )
}
