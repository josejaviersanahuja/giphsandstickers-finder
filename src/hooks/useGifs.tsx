/* import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'
 */

import { Giph, queryParameters, useFetchListOfGifsQuery } from "../feature/gifs/gifsApiSlice";
import { KeywordState } from "../feature/keyword/keywordSlice";
import { RatingState } from "../feature/rating/ratingSlice";


const initialQuery : queryParameters = {
  keyword:{
    value:"lion guard"
  },
  rating: {
    value:"g"
  },  
  page:0,
  limit:10
}
interface useGifsProps {
    keyword? : KeywordState,
    rating? : RatingState
}

export function useGifs ({ keyword, rating =initialQuery.rating } : useGifsProps ) {

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

  const keywordToUse : KeywordState | undefined = keyword || keywordInCache() || initialQuery.keyword
  const {data, isFetching} = useFetchListOfGifsQuery({keyword:keywordToUse, rating})
  const loading = isFetching
  const fromRawGiphToPureGiph = () :Giph[] => {
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
  
  const gifs : Giph[] = fromRawGiphToPureGiph()
  
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

  return {loading,  gifs/* , loadingNextPage,setPage */}
}