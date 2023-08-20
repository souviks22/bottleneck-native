import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null
    },
    reducers: {
        changeToken(state, action) {
            state.token = action.payload
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions