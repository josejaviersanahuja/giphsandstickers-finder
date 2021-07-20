import React from 'react'
import { Giph } from '../../feature/gifApiCall/gifsApiSlice'
import Gif from '../Gif'

interface ListOfGifsProps {
  gifs : Giph[]
}

export default function ListOfGifs ( { gifs } : ListOfGifsProps) : React.ReactElement{
  return <div className='listOfGifs'>
    {
      gifs.map((e) =>
        <Gif
          id={e.id}
          key={e.id + gifs.indexOf(e)}
          title={e.title}
          url={e.url}
        />
      )
    }
  </div>
}
