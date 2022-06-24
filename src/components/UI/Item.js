import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import classes from './Item.module.css';

const Item = ({ id, name, year, color }) => {

    return (
        <ListItem sx={{backgroundColor: color, width: '100%'}}>
            <div className={classes['item']}>
                <ListItemText sx={{display: 'flex', justifyContent: 'flex-start'}}>{id}</ListItemText>
                <ListItemText sx={{display: 'flex', justifyContent: 'center'}}>{name}</ListItemText>
                <ListItemText sx={{display: 'flex', justifyContent: 'flex-end'}}>{year}</ListItemText>
            </div>
        </ListItem>
    );
}

export default Item;