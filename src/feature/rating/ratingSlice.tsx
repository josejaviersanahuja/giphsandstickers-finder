import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RatingValue = "g" | "pg" | "pg-13" | "r" 

interface RatingState {
    value: RatingValue
}

const initialState : RatingState = {
    value:"g"
}

const ratingSlice = createSlice({
    name:"keyword",
    initialState,
    reducers:{
        setRating(state, action : PayloadAction<RatingValue | string>) {
            const ratingTypeValue = () :RatingValue => {
                if (action.payload === "g") {return "g"} 
                if (action.payload ==="pg") {return "pg"} 
                if (action.payload ==="pg-13") {return 'pg-13'} 
                if (action.payload ==="r") {return 'r'}
                return "g"
            }
            
                state.value = ratingTypeValue()
            
            
        }
    }
})

export const { setRating } = ratingSlice.actions
export default ratingSlice.reducer