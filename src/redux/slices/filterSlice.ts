import { createSlice } from '@reduxjs/toolkit'
// @ts-ignore
import {RootState} from "../store/store";

type Sort = {
    name: string;
    sortProperty: 'rating' | 'price' | 'title' | '-rating' | '-price' | '-title'
}

interface FilterSliceState {
    categoryID: number;
    currentPage: number;
    searchValue: string
    sort: Sort
}

const initialState: FilterSliceState = {
    categoryID: 0,
    currentPage: 1,
    searchValue: '',
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryID: (state, actions) => {
            state.categoryID = actions.payload
        },
        setSort:(state, actions) => {
            state.sort = actions.payload
        },
        setCurrentPage:(state, actions) => {
            state.currentPage = actions.payload
        },
        setParams:(state, actions) => {
            state.categoryID = actions.payload.categoryID
            state.currentPage = actions.payload.currentPage
            state.sort = actions.payload.sort
        },
        setSearch:(state, actions) => {
            state.searchValue = actions.payload
        }
    },
})

export const { setCategoryID, setSort, setCurrentPage, setParams, setSearch } = filterSlice.actions

export default filterSlice.reducer