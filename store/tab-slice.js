import { createSlice } from "@reduxjs/toolkit"

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        currentTab: 'all'
    },
    reducers: {
        changeTab(state, action) {
            state.currentTab = action.payload
        }
    }
})

export const tabReducer = tabSlice.reducer
export const tabActions = tabSlice.actions