import { createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState : boolean = false

const loadingNextPageSlice = createSlice({
    name:"loadingNextPage",
    initialState,
    reducers: {
        setLoadingNextPage (state, action :PayloadAction<boolean>) {
            state = action.payload
        }
    }
})

export const {setLoadingNextPage} = loadingNextPageSlice.actions
export default loadingNextPageSlice.reducer