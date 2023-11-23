import { useDispatch } from "react-redux"
import { errorActions } from "../store/error-slice"

export const useAsync = () => {
    const dispatch = useDispatch()
    const catchAsync = func => {
        return () => {
            func().catch(error => dispatch(errorActions.setError(error.message)))
        }
    }
    return catchAsync
}