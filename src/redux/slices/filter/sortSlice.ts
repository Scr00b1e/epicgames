import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  TITLE_DESC = 'title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

const initialState = {
    payload: 0,
    sort: {
        name: 'popular',
        sortProperty: SortPropertyEnum.RATING_DESC
    },
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload
        }
    },
})

export const { setSort } = sortSlice.actions

export default sortSlice.reducer