import { configureStore } from '@reduxjs/toolkit'
// @ts-ignore
import filterReducer from "../slices/filterSlice.ts"
// @ts-ignore
import cartReducer from "../slices/cartSlice.ts"
// @ts-ignore
import pizzaReducer from "../slices/pizzaSlice.ts"

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        pizza: pizzaReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
