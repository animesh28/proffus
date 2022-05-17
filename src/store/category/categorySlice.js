import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item: null
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.item = action.payload.item
        }
    }
})

export const { setCategories } = categorySlice.actions

export const selectItem = (state) => state.category.item

export default categorySlice.reducer