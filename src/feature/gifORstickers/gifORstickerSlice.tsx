import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type GorSType = 'gif' | 'sticker'

export interface GorSState {
    value: GorSType
}

const initialState : GorSState = {
    value: 'gif'
}

const gifORstickerSlice = createSlice({
    name: 'GorS',
    initialState,
    reducers:{
        showGifs(state){
            state.value = 'gif'
        },
        showStickers(state){
            state.value='sticker'
        }
    }
})

export const {showGifs, showStickers} = gifORstickerSlice.actions
export default gifORstickerSlice.reducer