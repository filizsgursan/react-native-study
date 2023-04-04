import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartCount: 0, 
}

const cartSlice = createSlice({
    name: 'cartTotalCount',
    initialState: initialState,
    reducers: {
        cartCount : (state, action) => {
            state.cartCount = action.payload
        }
    }
})

export const {
    cartCount
} = cartSlice.actions

export default cartSlice.reducer