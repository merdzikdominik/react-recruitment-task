import React, { useReducer } from 'react';
import IdContext from './id-context';

const reducerState = {
    receivedId: 0,
};

const reducer = (state, action) => {
    let updatedItem;
    switch(action.type) {
        case 'RECEIVE_ID':
            updatedItem = {
                ...state,
                receivedId: action.id,
            };
            return updatedItem;

        default: 
            return state;
    }
}

const IdProvider = (props) => {
    const [idState, dispatch] = useReducer(reducer, reducerState);

    const forwardIdHandler = (id) => {
        dispatch({ type: 'RECEIVE_ID', id: id });
    };

    const idCtx = {
        contextId: idState.receivedId,
        forwardId: forwardIdHandler,
    };

    return (
        <IdContext.Provider value={idCtx}>
            {props.children}
        </IdContext.Provider>
    );
}

export default IdProvider;