import { configureStore } from "@reduxjs/toolkit"

import productsSlice from "./slices/productsSlice"
import cartSlice from "./slices/cartSlice";


const store = configureStore({
    reducer: {
        products: productsSlice,
        cartTotalCount: cartSlice
    },
});

export default store
