import React, { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Box, Button, Typography, TextField } from "@mui/material"
import "./Login.css";

export default function login() {

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    /*try {
        await login(`usuarios/logar`, userLogin, setRespUserLogin)
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
    }*/
  }
  return (
    <>
      <Grid
        container
        className="containerLogin">
        <Grid
          item
          xs={4}
          className="itemLogin">
          <Box paddingX={20} paddingY={5} className="boxLogin">
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textosLogin">Entrar</Typography>
              <TextField /*value={personLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}*/ id="usuario" label="E-mail" variant="outlined" name="usuario" margin="normal" fullWidth />
              <TextField /*value={personLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}*/ id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
              <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained" className="botaoLogin">Logar</Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={3}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
              </Box>
              {/* <Link to='/login'> */}
                <Typography variant="subtitle1" gutterBottom align="center" className="textosLogin">Cadastre-se</Typography>
              {/* </Link> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
