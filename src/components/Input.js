import React, { useContext } from 'react';
import { TextField, CssBaseline } from '@mui/material';
import idContext from '../store/id-context';
import classes from './Input.module.css';

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
        <section className={classes['filter']}>
            <CssBaseline />
            <TextField 
                sx={{marginTop: '20px'}}
                type="text"
                placeholder="Search product by Id"
                onChange={inputHandler}
            />
        </section>
    );
}

export default Input;