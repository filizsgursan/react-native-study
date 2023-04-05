import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    setFavoritesData: null, 
}

const favoritesSlice = createSlice({
    name: 'favoritesData',
    initialState: initialState,
    reducers: {
        setFavoritesData : (state, action) => {
            state.setFavoritesData = action.payload
        }
    }
})

export const {
    setFavoritesData
} = favoritesSlice.actions

export default favoritesSlice.reducer