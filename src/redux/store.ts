import { configureStore } from '@reduxjs/toolkit'
import sortSlice from './slices/filter/sortSlice'
import wishSlice from './slices/wishSlice/wishSlice'

export const store = configureStore({
    reducer: {
        wishSlice,
        sortSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>