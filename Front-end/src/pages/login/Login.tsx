import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import { Grid, Box, Button, Typography, TextField } from "@mui/material"
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken, addType } from "../../store/tokens/action";
import PersonLogin from "../../models/PersonLogin";
import { toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [personLogin, setPersonLogin] = useState<PersonLogin>({
    uuidPerson: "",
    loginPerson: "",
    passwordPerson: "",
    token: "",
    typePerson: "",
  });

  const [respPersonLogin, setRespPersonLogin] = useState<PersonLogin>({
    uuidPerson: "",
    loginPerson: "",
    passwordPerson: "",
    token: "",
    typePerson: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setPersonLogin({
      ...personLogin,
      [e.target.name]: e.target.value
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/auth/login`, personLogin, setRespPersonLogin)
      toast.success('Usuario logado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (erro) {
      toast.error('Dados inconsistentes.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }

  useEffect(() => {
    if (respPersonLogin.token !== "") {
      dispatch(addToken(respPersonLogin.token))
      dispatch(addType(respPersonLogin.typePerson))
      if (respPersonLogin.typePerson === "bookkeeper") {
        navigate('/bookkeeper')
      }
      if (respPersonLogin.typePerson === "user") {
        navigate('/user')
      }
      if (respPersonLogin.typePerson === "nutritionist") {
        navigate('/nutritionist')
      }
    }
  }, [respPersonLogin.token])

  return (
    <>
      <Grid
        container
        className="containerLogin">
        <Grid
          item
          xs={6}
          className="itemLogin">
          <Box paddingX={5} paddingY={5} className="boxLogin">
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textosLogin">Entrar</Typography>
              <TextField value={personLogin.loginPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="loginPerson" label="E-mail" variant="outlined" name="loginPerson" margin="normal" fullWidth />
              <TextField value={personLogin.passwordPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="passwordPerson" label="Senha" variant="outlined" name="passwordPerson" margin="normal" type="password" fullWidth />
              <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained" className="botaoLogin">Logar</Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={3}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
              </Box>
              <Link to='/cadastrar'>
                <Typography variant="subtitle1" gutterBottom align="center" className="textosLogin">Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
