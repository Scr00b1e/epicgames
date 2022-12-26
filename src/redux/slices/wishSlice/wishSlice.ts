import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type WishType = {
    id: string
    title: string
    price: number
    noPrice: number
    image: string
    count: number
}

interface WishInitialState {
    subjects: WishType[]
}

const initialState: WishInitialState = {
    subjects: [],
}

export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload
            const findItem = state.subjects.find((obj) => obj.id === item.id)

            if (findItem) {
                findItem.count++;
            } else {
                state.subjects.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },
        removeItem(state: WishInitialState, action: PayloadAction<string>) {
            const item = action.payload
            state.subjects = state.subjects.filter((obj) => obj.id !== item)
            const findItem = state.subjects.find((obj) => obj.id === item)

            if (findItem) {
                findItem.count--
            }
        },
        clearItem(state) {
            state.subjects = []
        }
    },
})

export const { addItem, removeItem, clearItem } = wishSlice.actions

export default wishSlice.reducer