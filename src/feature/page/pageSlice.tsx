import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface PageState {
    value: number
}

const initialState : PageState = {
    value: 0
}

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        incrementPages (state, action: PayloadAction<number>) {
            state.value += action.payload
            console.log('aumento la pagina');
            
        },
        resetPageState (state) {
            state.value=0
        }
    }
})

export const {incrementPages, resetPageState} = pageSlice.actions
export default pageSlice.reducer