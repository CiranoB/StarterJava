import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';

// function goLogout() { }

// // Definindo variáveis
// const token = useSelector<TokenState, TokenState['tokenLogin']>(
//   (state) => state.tokenLogin
// );

// const dispatch = useDispatch()

// let navigate = useNavigate();

// let location = useLocation();



function Navbar() {
  return (
    <AppBar className='navbar' position='sticky'>
      <Toolbar variant='dense' className='toolbar'>
        <Box>
          <img src="https://i.imgur.com/1tsr9UV.png" alt="Home" width={40} />
        </Box>
        <Box className='menuNav bold'>
          <Box marginX={2}>
            Como funciona
          </Box>
          <Box marginX={2}>
            Planos e preços
          </Box>
          <Box marginX={2} className='buttonNav'>
            Entrar
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;