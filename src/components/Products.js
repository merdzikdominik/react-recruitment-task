import React, { useContext, useEffect, useState } from 'react';
import Item from './UI/Item';
import AppPagination from './AppPagination';
import IdContext from '../store/id-context';
import { List } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);

    const idCtx = useContext(IdContext);
    const { contextId } = idCtx;

    const [pageNumber, setPageNumber] = useState(1);
    const productsPerPage = 5;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(products.length/productsPerPage);

    const filterProductsHandler = product => {
        if (contextId === 0 || contextId > products.length) return products;
        return product.id === contextId;
    }

    const changePageHandler = (event, value) => {
        setPageNumber(value);
    }

    useEffect(() => {
      fetch('https://reqres.in/api/products')
        .then(response => {return response.json()})
        .then(fetchedData => setProducts(fetchedData.data));
    }, []);

    return (
        <>
            <List 
                sx={{
                    width: '100%', 
                    padding: '0'
                }}>
                {products
                .slice(pagesVisited - productsPerPage, pagesVisited)
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
        </>
    );
}

export default Products;