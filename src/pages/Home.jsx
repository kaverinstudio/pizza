import React from 'react';
import Categories from "../components/Categories.tsx";
import Sort from "../components/Sort.tsx";
import Skeleton from "../components/PizzaBlock/Skeleton.tsx";
import Index from "../components/PizzaBlock/index.tsx";
import Pagination from "../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryID, setCurrentPage, setParams} from "../redux/slices/filterSlice.ts";
import qs from 'qs'
import {useNavigate} from "react-router-dom";
import {names} from '../components/Sort.tsx'
import {fetchPizzas} from "../redux/slices/pizzaSlice.ts";
import NoFound from "./NoFound.tsx";

const Home = () => {
    const {sort, categoryID, currentPage} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { items, status } = useSelector(state => state.pizza)
    const inputValue = useSelector(state => state.filter.searchValue)
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const categorySort = categoryID > 0 ? `&category=${categoryID}` : '';
    const sortName = sort.sortProperty.replace('-', '');
    const sortOrder = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = inputValue ? `&search=${inputValue}` : ''


    React.useEffect(() => {
        if (window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = names.find(obj => obj.sortProperty === params.sortProperty)

            dispatch(
                setParams({
                    ...params,
                    sort
                }))
            isSearch.current = true
        }

    },[])


    React.useEffect(()=>{
        if (!isSearch.current){
            dispatch(fetchPizzas({
                categorySort,
                sortName,
                sortOrder,
                search,
                currentPage,
            }))
        }
        window.scrollTo(0, 0)
        isSearch.current = false
    },[categoryID, sort, inputValue, currentPage])

    React.useEffect(() => {
        if (isMounted.current){
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryID,
                currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true

    }, [categoryID, sort, inputValue, currentPage])


    return (
        <>
            <div className="content__top">
                <Categories value={categoryID} onSetCategory={(id) => dispatch(setCategoryID(id))}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    status === 'error' ?
                        <NoFound/>
                        :
                    status === 'loading'
                        ? [...new Array(8)].map((_, i) => <Skeleton key={i}/>)
                        : items.map((obj) =>
                            <Index key={obj.id} {...obj}/>
                        )
                }
            </div>
            <Pagination onChangePage={(number) => dispatch(setCurrentPage(number))}/>
        </>
    );
}

export default Home;