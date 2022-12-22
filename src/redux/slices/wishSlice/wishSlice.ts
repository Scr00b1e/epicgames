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
    payload: number
    subjects: WishType[]
}

const initialState: WishInitialState = {
    payload: 0,
    subjects: [],
}

export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addItem(state: WishInitialState, action: PayloadAction<WishType>) {
            const findItem = state.subjects.find((obj) => obj.id === action.payload.id)

            if (findItem) {
                findItem.count += 1;
            } else {
                state.subjects.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },
        minusItem(state: WishInitialState, action: PayloadAction<WishType>) {
            const findItem = state.subjects.find((obj) => obj.id === action.payload.id)

            if (findItem) {
                findItem.count -= 1;
            } else {
                state.subjects.push({
                    ...action.payload,
                    count: 1,
                });
            }

        },
        removeItem(state: WishInitialState, action: PayloadAction<number>) {
            state.subjects = state.subjects.filter((obj) => obj.count !== action.payload)
        },
        clearItem(state) {
            state.subjects = []
        }
    },
})

export const { addItem, minusItem, removeItem, clearItem } = wishSlice.actions

export default wishSlice.reducer