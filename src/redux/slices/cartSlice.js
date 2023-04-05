import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartCount: 0,
    setAddedProduct: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        cartCount: (state, action) => {
            state.cartCount = action.payload
        },
        setAddedProduct: (state, action) => {
            state.setAddedProduct = action.payload
        },

    }
})

export const {
    cartCount,
    setAddedProduct
} = cartSlice.actions

export default cartSlice.reducer