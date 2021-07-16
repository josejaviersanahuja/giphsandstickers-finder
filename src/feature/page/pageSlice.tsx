import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState : number = 0

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        incrementPages (state) {
            state++
        },
        resetPageState (state) {
            state=0
        }
    }
})

export const {incrementPages, resetPageState} = pageSlice.actions
export default pageSlice.reducer