import { createSlice, isDraft, PayloadAction} from '@reduxjs/toolkit'

const initialState : boolean = false

const loadingNextPageSlice = createSlice({
    name:"loadingNextPage",
    initialState,
    reducers: {
        setLoadingNextPage (state, action :PayloadAction<boolean>) {
            if(isDraft(state)) {
                console.log('is draft state');
                
                state = action.payload          
            } else {
               // console.log('is not draft');
                return action.payload
            }
        }
    }
})

export const {setLoadingNextPage} = loadingNextPageSlice.actions
export default loadingNextPageSlice.reducer