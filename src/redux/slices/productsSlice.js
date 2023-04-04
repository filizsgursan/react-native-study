import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    setProductsData: null, 
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProductsData : (state, action) => {
            state.setProductsData = action.payload
        }
    }
})

export const {
    setProductsData
} = productsSlice.actions

export default productsSlice.reducer