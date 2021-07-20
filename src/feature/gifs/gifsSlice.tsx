import {createSlice, isDraft, PayloadAction} from '@reduxjs/toolkit'
import { Giph } from '../gifApiCall/gifsApiSlice'

const initialState : Giph[]= []

const gifsSlice = createSlice({
    name:'gifs',
    initialState,
    reducers:{
        setGiphs(state, action: PayloadAction<Giph[]>){
            state = [...action.payload]
        },
        addGiphs(state, action: PayloadAction<Giph[]>){
            state= state.concat(action.payload)
        }
    }
})

export const { setGiphs, addGiphs } = gifsSlice.actions
export default gifsSlice.reducer