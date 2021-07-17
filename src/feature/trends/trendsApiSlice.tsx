import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL_GIPH, GIPHY_API_KEY} from '../apiSettings'

interface TrendingResponse {
    data: string[],
    meta: object
}

export const trendsApiSlice = createApi({
    reducerPath: 'trendsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:BASE_URL_GIPH,
    }),
    endpoints(builders){
        return {
            fetchTrendingGifs : builders.query<TrendingResponse, {}> ({
                query({}){
                    console.log(BASE_URL_GIPH,`/trending/searches?api_key=${GIPHY_API_KEY}`);
                    
                    return `/trending/searches?api_key=${GIPHY_API_KEY}`
                }
            })
        }
    }
})

export const { useFetchTrendingGifsQuery } = trendsApiSlice