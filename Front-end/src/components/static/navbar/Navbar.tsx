import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';
import { addToken, addType } from '../../../store/tokens/action';
import { Slide, toast } from 'react-toastify';

function Navbar() {

  //criando constantes
  const token = useSelector<TokenState, TokenState['tokenLogin']>(
    (state) => state.tokenLogin
  )

  const type = useSelector<TokenState, TokenState['typePerson']>(
    (state) => state.typePerson
  )
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const rota = useLocation();

  function goLogout() {
    dispatch(addToken(''))
    dispatch(addType(''))

    toast.success('Usuário saiu com sucesso.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
    navigate('/login')
  }

  let navbarComponent = <></>;

  //se não estiver logado
  if (token === "") {
    navbarComponent = <AppBar className='navbar'>
      <Toolbar variant='dense' className='toolbar'>
        <Link to='/' className='text-decorator-none'>
          <Box>
            <img src="https://i.imgur.com/1tsr9UV.png" alt="Home" width={40} />
          </Box>
        </Link>
        <Box className='menuNav bold'>
          <Link to='/login' className='text-decorator-none'>
            <Button color='inherit' variant='contained' className='buttonNav bold'>
              Entrar
            </Button>
          </Link>
          <Link to='/cadastrar' className='text-decorator-none'>
            <Button color='inherit' variant='contained' className='buttonNav bold'>
              Cadastrar
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  } else {
    //se estiver logado e for bookkeeper
    if (type === "bookkeeper") {
      navbarComponent = <AppBar className='navbar'>
        <Toolbar variant='dense' className='toolbar'>
          <Link to='/' className='text-decorator-none'>
            <Box>
              <img src="https://i.imgur.com/1tsr9UV.png" alt="Home" width={40} />
            </Box>
          </Link>
          <Box className='menuNav bold'>
            <Link to='/bookkeeper' className='text-decorator-none'>
              <Button color='inherit' variant='contained' className='buttonNav bold'>
                Gerenciar pagamentos
              </Button>
            </Link>
            <Link to='/cadastrar' className='text-decorator-none'>
              <Button color='inherit' variant='contained' className='buttonNav bold'>
                Cadastrar
              </Button>
            </Link>
            <Button color='inherit' variant='contained' className='buttonNav bold' onClick={goLogout}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      //se estiver logado e for nutritionist
    } else if (type === "nutritionist") {
      navbarComponent = <AppBar className='navbar'>
      <Toolbar variant='dense' className='toolbar'>
        <Link to='/' className='text-decorator-none'>
          <Box>
            <img src="https://i.imgur.com/1tsr9UV.png" alt="Home" width={40} />
          </Box>
        </Link>
        <Box className='menuNav bold'>
          <Link to='/listDiet' className='text-decorator-none'>
            <Button color='inherit' variant='contained' className='buttonNav bold'>
              Gerenciar grupos e dietas
            </Button>
          </Link>
          <Link to='/cadastrar' className='text-decorator-none'>
            <Button color='inherit' variant='contained' className='buttonNav bold'>
              Cadastrar
            </Button>
          </Link>
          <Button color='inherit' variant='contained' className='buttonNav bold' onClick={goLogout}>
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
      //se estiver logado e for user(como sobrou, não coloquei comparação)
    } else {
      navbarComponent = <AppBar className='navbar'>
        <Toolbar variant='dense' className='toolbar'>
          <Link to='/' className='text-decorator-none'>
            <Box>
              <img src="https://i.imgur.com/1tsr9UV.png" alt="Home" width={40} />
            </Box>
          </Link>
          <Box className='menuNav bold'>
            <Link to='/user' className='text-decorator-none'>
              <Button color='inherit' variant='contained' className='buttonNav bold'>
                Meu perfil
              </Button>
            </Link>
            <Link to='/cadastrar' className='text-decorator-none'>
              <Button color='inherit' variant='contained' className='buttonNav bold'>
                Cadastrar
              </Button>
            </Link>
            <Button color='inherit' variant='contained' className='buttonNav bold' onClick={goLogout}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    }
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;