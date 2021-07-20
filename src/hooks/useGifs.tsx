/* import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'
 */
import { useEffect, useState } from "react";
import { Giph, queryParameters, useFetchListOfGifsQuery } from "../feature/gifApiCall/gifsApiSlice";
import { addGiphs, setGiphs } from "../feature/gifs/gifsSlice";
import { KeywordState } from "../feature/keyword/keywordSlice";
import { RatingState } from "../feature/rating/ratingSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


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
  const {data, isFetching} = useFetchListOfGifsQuery({keyword:keywordToUse, rating, page})
  const [gifs, setGifs] = useState<Giph[]>([])
  
  const loading = isFetching
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
   

  /*const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
 
 */
  // recuperamos la keyword del localStorage
  // const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

 /*  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, rating, setGifs])
 */

/*   useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page, rating })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, rating, setGifs])
 */
  // console.log('useGifs', page, gifs);
  return {loading, gifs/* , loadingNextPage,setPage */}
}

export const fromRawGiphToPureGiph = (data: any, isFetching: boolean) :Giph[] => {
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

const keywordInCache = () : KeywordState | undefined => {
  if (localStorage.getItem('lastKeyword')) {
    let returnThis : KeywordState = {
      value: localStorage.getItem('lastKeyword') || ""
    }
    return returnThis
  } else {
    return undefined
  }
}