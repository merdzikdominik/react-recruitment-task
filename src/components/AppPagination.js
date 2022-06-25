import React from 'react';
import Pagination from '@mui/material/Pagination';

const AppPagination = ({ count, page, onChange }) => {
    return (
        <Pagination
            sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px 0'
            }}
            count={count}
            page={page}
            onChange={onChange}
        />
    );
}

export default AppPagination;