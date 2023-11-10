import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./user-slice"
import { tabReducer } from "./tab-slice"

const store = configureStore({
    reducer: {
        user: userReducer,
        tab: tabReducer
    }
})

export default store