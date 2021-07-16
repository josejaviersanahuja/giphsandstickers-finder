import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState : boolean = false

const loadingGifsSlice = createSlice({
    name:"loadingGifs",
    initialState,
    reducers:{
        setLoadingGifs(state, action : PayloadAction<boolean>) {
            state = action.payload
        }
    }
})

export const {setLoadingGifs} = loadingGifsSlice.actions
export default loadingGifsSlice.reducer