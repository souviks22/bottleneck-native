import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./user-slice"
import { tabReducer } from "./tab-slice"
import { errorReducer } from "./error-slice"

const store = configureStore({
    reducer: {
        user: userReducer,
        tab: tabReducer,
        error: errorReducer
    }
})

export default store