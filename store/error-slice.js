import { createSlice } from "@reduxjs/toolkit"

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        error: null
    },
    reducers: {
        setError(state, action) {
            state.error = action.payload
        },
        clearError(state) {
            state.error = null
        }
    }
})

export const errorReducer = errorSlice.reducer
export const errorActions = errorSlice.actions