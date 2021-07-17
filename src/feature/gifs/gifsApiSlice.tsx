import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { KeywordState } from '../keyword/keywordSlice'
import { RatingState } from '../rating/ratingSlice'
import {BASE_URL_GIPH, GIPHY_API_KEY} from '../apiSettings'

export interface Giph {
    id: string,
    title: string,
    url: string
}

export interface queryParameters {
    keyword?: KeywordState,
    rating?: RatingState,
    limit?: number,
    page?:number
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
                    page=0
                }) {
                    localStorage.setItem('lastKeyword', keyword.value)
                    return `/gifs/search?api_key=${GIPHY_API_KEY}&q=${keyword.value}&limit=${limit}&offset=${page * limit}&rating=${rating.value}&lang=en`
                }
            })
        }
    }
})

export const { useFetchListOfGifsQuery } = gifsApiSlice

// https://api.giphy.com/v1/gifs/search?api_key=YSxXTCo847DYT6kYKbR9eKACXVsDqIkm&q=lion guard&limit=10&offset=0&rating=g&lang=en
// https://api.giphy.com/v1/gifs/search?api_key=YSxXTCo847DYT6kYKbR9eKACXVsDqIkm&q=lion%20guard&limit=10&offset=0&rating=g&lang=en
//                         /gifs/search?api_key=YSxXTCo847DYT6kYKbR9eKACXVsDqIkm&q=lion guard&limit=0&offset=0&rating=g&lang=en