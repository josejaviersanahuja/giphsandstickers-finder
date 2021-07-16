import { configureStore } from '@reduxjs/toolkit'
import keywordReducer from '../feature/keyword/keywordSlice'
import ratingReducer from '../feature/rating/ratingSlice'

const store = configureStore({
    reducer: {
        keyword: keywordReducer,
        rating: ratingReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store