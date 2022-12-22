import { configureStore } from '@reduxjs/toolkit'
import wishSlice from './slices/wishSlice/wishSlice'

export const store = configureStore({
    reducer: {
        wishSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>