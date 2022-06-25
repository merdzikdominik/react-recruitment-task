import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const Item = ({ id, name, year, color }) => {

    return (
        <ListItem sx={{backgroundColor: color}}>
            <ListItemText sx={{display: 'flex', justifyContent: 'flex-start'}}>{id}</ListItemText>
            <ListItemText sx={{display: 'flex', justifyContent: 'center'}}>{name}</ListItemText>
            <ListItemText sx={{display: 'flex', justifyContent: 'flex-end'}}>{year}</ListItemText>
        </ListItem>
    );
}

export default Item;