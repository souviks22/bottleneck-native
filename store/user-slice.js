import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: {}
    },
    reducers: {
        changeToken(state, action) {
            state.token = action.payload
        },
        changeUser(state, action) {
            state.user = action.payload
        },
        clear(state) {
            state.token = null
            state.user = {}
        }
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions