/* import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'
 */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Giph, queryParameters, useFetchListOfGifsQuery } from "../feature/gifApiCall/gifsApiSlice";
import { KeywordState } from "../feature/keyword/keywordSlice";
import { RatingState } from "../feature/rating/ratingSlice";
import { useAppSelector } from "../redux/hooks";


const initialQuery : queryParameters = {
  keyword:{
    value:"lion guard"
  },
  rating: {
    value:"g"
  },  
  page:{value:0},
  limit:10
}
interface useGifsProps {
    keyword? : KeywordState,
    rating? : RatingState
}

export default function useGifs ({ keyword, rating =initialQuery.rating } : useGifsProps ) {

  const page=useAppSelector((state) => state.page)
  const keywordToUse : KeywordState | undefined = keyword || keywordInCache() || initialQuery.keyword
  const [gifs, setGifs] = useState<Giph[]>([])
  const {data, isFetching} = useFetchListOfGifsQuery({keyword:keywordToUse, rating, page})
  
  const loading = gifs.length === 0 ? isFetching : false // esto es la caña aunque no lo sepas, se mejor el infinity scroll con esta ternaria
  const gifsTmp : Giph[] = fromRawGiphToPureGiph(data, isFetching)
  
  useEffect(() => {
    if (page.value===0) {
     // console.log('entro a setear los giphs ???', gifsTmp);
     setGifs(gifsTmp)
    } else {
     // console.log('entro a añadir mas giphs???');
      setGifs([...gifs].concat(gifsTmp))
    }
   }, [page, isFetching])
   
  return {loading, gifs, isFetching}
}

export const fromRawGiphToPureGiph = (data: any, isFetching: boolean, callback?: Dispatch<SetStateAction<Giph>>) :Giph[] => {
  if (isFetching) {
    return []
  } else {
    let rawGiph :Giph[] = data.data.map((e: { id: string; title: string; images: { original: {url:string}; }; }) => {
      const id = e.id
      const title = e.title
      const url = e.images.original.url
      return {id, title, url}
    })
    return rawGiph
  }
}

export const keywordInCache = () : KeywordState | undefined => {
  if (localStorage.getItem('lastKeyword')) {
    let returnThis : KeywordState = {
      value: localStorage.getItem('lastKeyword') || ""
    }
    return returnThis
  } else {
    return undefined
  }
}