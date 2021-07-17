import React from 'react'
import { Giph } from '../../feature/gifs/gifsApiSlice'
import Gif from '../Gif'
// import './ListOfGifs.css'

interface ListOfGifsProps {
  gifs : Giph[]
}

export default function ListOfGifs ( { gifs } : ListOfGifsProps) : React.ReactElement{
  return <div className='ListOfGifs'>
    {
      gifs.map(({id, title, url}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>
}
