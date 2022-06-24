import React from 'react';
import Input from './components/Input';
import IdProvider from './store/IdProvider';
import Products from './components/Products';
import Container from '@mui/material/Container';
import classes from './App.module.css';

function App() {
  return (
    <IdProvider>
      <Container className={classes['container']}>
        <Input />
        <Products />
      </Container>
    </IdProvider>
  );
}

export default App;
