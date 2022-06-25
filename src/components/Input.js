import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import idContext from '../store/id-context';

const Input = () => {
    const idCtx = useContext(idContext);
    const { forwardId } = idCtx;

    const inputHandler = event => {
        const id = +event.target.value;
        const regexp = /^[0-9]+$/;
        if (regexp.test(id)) {
            forwardId(id);
        } else {
            event.target.value = '';
        }
    }

    return (
        <>
            <TextField
                sx={{
                    marginTop: '20px',
                    width: '100%'
                }}
                type="text"
                placeholder="Search product by Id"
                onChange={inputHandler}
            />
        </>
    );
}

export default Input;