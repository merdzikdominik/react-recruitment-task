import React from 'react';

const IdContext = React.createContext({
    contextId: 0,
    forwardId: (id) => {},
}); 

export default IdContext;