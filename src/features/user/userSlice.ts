import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    name: string
}

const initialState: InitialState = {
    name: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export default userSlice.reducer
export const { setUser } = userSlice.actions