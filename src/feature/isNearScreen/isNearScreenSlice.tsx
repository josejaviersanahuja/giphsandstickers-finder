import { createSlice, isDraft, PayloadAction} from '@reduxjs/toolkit'

const initialState : boolean = false;

const isNearScreenSlice = createSlice({
    name:'isNearScreen',
    initialState,
    reducers:{
        setIsNearScreen(state, action: PayloadAction<boolean>) {
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

export const { setIsNearScreen } = isNearScreenSlice.actions
export default isNearScreenSlice.reducer
