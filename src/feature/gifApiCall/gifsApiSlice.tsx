import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { KeywordState } from '../keyword/keywordSlice'
import { RatingState } from '../rating/ratingSlice'
import {BASE_URL_GIPH, GIPHY_API_KEY} from '../apiSettings'
import { PageState } from '../page/pageSlice'

export interface Giph {
    id: string,
    title: string,
    url: string
}

export interface queryParameters {
    keyword?: KeywordState,
    rating?: RatingState,
    limit?: number,
    page?:PageState
}

export const gifsApiSlice = createApi({
    reducerPath: 'listGifsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_GIPH
    }),
    endpoints(builders) {
        return {
            fetchListOfGifs: builders.query<any, queryParameters >({
                query({
                    keyword = {value:"lion guard"},
                    rating = {value:"g"},
                    limit = 10,
                    page={value:0}
                }) {
                    localStorage.setItem('lastKeyword', keyword.value)
                    // console.log('entro en el fetch de redux?');
                    
                    return `/gifs/search?api_key=${GIPHY_API_KEY}&q=${keyword.value}&limit=${limit}&offset=${page.value * limit}&rating=${rating.value}&lang=en`
                }
            }),
        }
    }
})

export const { useFetchListOfGifsQuery } = gifsApiSlice
