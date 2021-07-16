import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface KeywordState {
    value: string
}

const initialState : KeywordState = {
    value:""
}

const keywordSlice = createSlice({
    name:"keyword",
    initialState,
    reducers:{
        setKeyword(state, action : PayloadAction<string>) {
            state.value = action.payload
        }
    }
})

export const { setKeyword } = keywordSlice.actions
export default keywordSlice.reducer