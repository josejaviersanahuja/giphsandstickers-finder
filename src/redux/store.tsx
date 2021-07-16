import { configureStore } from '@reduxjs/toolkit'
import keywordReducer from '../feature/keyword/keywordSlice'
import ratingReducer from '../feature/rating/ratingSlice'
import loadingGifsReducer from '../feature/loadingGifs/loadingGifsSlice'
import pageReducer from '../feature/page/pageSlice'
import loadingNextPageReducer from '../feature/loadingNextPage/loadingNextPageSlice'

const store = configureStore({
    reducer: {
        keyword: keywordReducer,
        rating: ratingReducer,
        loadingGifs: loadingGifsReducer,
        page: pageReducer,
        loadingNextPage: loadingNextPageReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store