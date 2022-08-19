import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { currentPage, categorySort, search, sortName, sortOrder } = params
        const {data} = await axios.get(`https://62b1f42520cad3685c86bd7d.mockapi.io/items?page=${currentPage}&limit=4${categorySort}${search}&sortBy=${sortName}&order=${sortOrder}`)
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchPizzas.rejected,(state => {
            state.items = []
            state.status = 'error'
        }))
    },
})

// export const {  } = pizzaSlice.actions

export default pizzaSlice.reducer