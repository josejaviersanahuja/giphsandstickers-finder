import { configureStore } from '@reduxjs/toolkit'
import keywordReducer from '../feature/keyword/keywordSlice'
import ratingReducer from '../feature/rating/ratingSlice'
import pageReducer from '../feature/page/pageSlice'
import { gifsApiSlice } from '../feature/gifApiCall/gifsApiSlice'
import { trendsApiSlice } from '../feature/trends/trendsApiSlice'
import isNearScreenReducer from '../feature/isNearScreen/isNearScreenSlice'
import gifORstickerReducer from '../feature/gifORstickers/gifORstickerSlice'

const store = configureStore({
    reducer: {
        keyword: keywordReducer,
        rating: ratingReducer,
        page: pageReducer,
        isNearScreen: isNearScreenReducer,
        GorS: gifORstickerReducer,
        [gifsApiSlice.reducerPath]: gifsApiSlice.reducer,
        [trendsApiSlice.reducerPath]: trendsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(gifsApiSlice.middleware)
            .concat(trendsApiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store