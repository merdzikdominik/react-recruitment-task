import React from 'react';
import Pagination from '@mui/material/Pagination';
import classes from './Pagination.module.css';

const AppPagination = ({ count, page, onChange }) => {
    return (
        <section className={classes['pagination']}>
            <Pagination 
                count={count} 
                page={page} 
                onChange={onChange}
            />
        </section>
    );
}

export default AppPagination;