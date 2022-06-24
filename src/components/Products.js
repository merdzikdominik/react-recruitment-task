import React, { useContext, useEffect, useState } from 'react';
import IdContext from '../store/id-context';
import Item from './UI/Item';
import AppPagination from './AppPagination';
import { List } from '@mui/material';
import classes from './Products.module.css';

const Products = ({ products }) => {
    const [productsState, setProductsState] = useState([]);

    const idCtx = useContext(IdContext);
    const { contextId, contextProducts, forwardProducts } = idCtx;

    const [pageNumber, setPageNumber] = useState(1);
    const productsPerPage = 5;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(productsState.length / productsPerPage)

    const filterProductsHandler = product => {
        if (contextId === 0 || contextId > productsState.length) return productsState;
        return product.id === contextId;
    }

    const changePageHandler = (event, value) => {
        setPageNumber(value);
    }

    useEffect(() => {
      fetch('https://reqres.in/api/products')
        .then(response => {return response.json()})
        .then(fetchedData => setProductsState(fetchedData.data));
    }, []);

    return (
        <section className={classes['products']}>
            <List sx={{width: '100%', justifyContent: 'space-evenly', padding: '20px 0'}}>
                {productsState
                .slice(pagesVisited - productsPerPage, pagesVisited + productsPerPage)
                .filter(filterProductsHandler)
                .map(product => 
                <Item
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    year={product.year}
                    color={product.color}
                />)}
            </List>
            <AppPagination 
                count={pageCount}
                page={pageNumber}
                onChange={changePageHandler}
            />
        </section>
    );
}

export default Products;