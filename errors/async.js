export const catchAsync = fun => {
    return () => {
        fun().catch(console.error)
    }
}